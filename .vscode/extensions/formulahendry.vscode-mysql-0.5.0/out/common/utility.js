"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utility = void 0;
const fs = require("fs");
const mysql = require("mysql");
const vscode = require("vscode");
const sqlResultWebView_1 = require("../sqlResultWebView");
const appInsightsClient_1 = require("./appInsightsClient");
const global_1 = require("./global");
const outputChannel_1 = require("./outputChannel");
class Utility {
    static getConfiguration() {
        return vscode.workspace.getConfiguration("vscode-mysql");
    }
    static queryPromise(connection, sql) {
        return new Promise((resolve, reject) => {
            connection.query(sql, (err, rows) => {
                if (err) {
                    reject("Error: " + err.message);
                }
                else {
                    resolve(rows);
                }
            });
            connection.end();
        });
    }
    // Remove MySQL instructions: DELIMITER
    static removeDelimiterInstructions(sql) {
        if (!sql.search(/delimiter/i)) {
            return sql;
        }
        const rc = new RegExp(/(?<!--\s+.*)(delimiter\s+(\S+))/gi);
        let currentDelimiter = ";";
        let nextPosition = 0;
        let result = "";
        let a;
        while (Boolean(a = rc.exec(sql))) {
            result += (currentDelimiter === ";")
                ? sql.slice(nextPosition, a.index)
                : sql.slice(nextPosition, a.index).replace(new RegExp(currentDelimiter, "g"), ";");
            nextPosition = a.index + a[1].length;
            currentDelimiter = a[2];
        }
        result += (currentDelimiter === ";")
            ? sql.slice(nextPosition)
            : sql.slice(nextPosition).replace(new RegExp(currentDelimiter, "g"), ";");
        return result;
    }
    static runQuery(sql, connectionOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            appInsightsClient_1.AppInsightsClient.sendEvent("runQuery.start");
            if (!sql && !vscode.window.activeTextEditor) {
                vscode.window.showWarningMessage("No SQL file selected");
                appInsightsClient_1.AppInsightsClient.sendEvent("runQuery.noFile");
                return;
            }
            if (!connectionOptions && !global_1.Global.activeConnection) {
                const hasActiveConnection = yield Utility.hasActiveConnection();
                if (!hasActiveConnection) {
                    vscode.window.showWarningMessage("No MySQL Server or Database selected");
                    appInsightsClient_1.AppInsightsClient.sendEvent("runQuery.noMySQL");
                    return;
                }
            }
            if (!sql) {
                const activeTextEditor = vscode.window.activeTextEditor;
                const selection = activeTextEditor.selection;
                if (selection.isEmpty) {
                    sql = activeTextEditor.document.getText();
                }
                else {
                    sql = activeTextEditor.document.getText(selection);
                }
            }
            connectionOptions = connectionOptions ? connectionOptions : global_1.Global.activeConnection;
            connectionOptions.multipleStatements = true;
            const connection = Utility.createConnection(connectionOptions);
            if (this.getConfiguration().get("enableDelimiterOperator")) {
                sql = this.removeDelimiterInstructions(sql);
            }
            outputChannel_1.OutputChannel.appendLine("[Start] Executing MySQL query...");
            connection.query(sql, (err, rows) => {
                if (Array.isArray(rows)) {
                    if (rows.some(((row) => Array.isArray(row)))) {
                        rows.forEach((row, index) => {
                            if (Array.isArray(row)) {
                                Utility.showQueryResult(row, "Results " + (index + 1));
                            }
                            else {
                                outputChannel_1.OutputChannel.appendLine(JSON.stringify(row));
                            }
                        });
                    }
                    else {
                        Utility.showQueryResult(rows, "Results");
                    }
                }
                else {
                    outputChannel_1.OutputChannel.appendLine(JSON.stringify(rows));
                }
                if (err) {
                    outputChannel_1.OutputChannel.appendLine(err);
                    appInsightsClient_1.AppInsightsClient.sendEvent("runQuery.end", { Result: "Fail", ErrorMessage: err });
                }
                else {
                    appInsightsClient_1.AppInsightsClient.sendEvent("runQuery.end", { Result: "Success" });
                }
                outputChannel_1.OutputChannel.appendLine("[Done] Finished MySQL query.");
            });
            connection.end();
        });
    }
    static createSQLTextDocument(sql = "") {
        return __awaiter(this, void 0, void 0, function* () {
            const textDocument = yield vscode.workspace.openTextDocument({ content: sql, language: "sql" });
            return vscode.window.showTextDocument(textDocument);
        });
    }
    static createConnection(connectionOptions) {
        const newConnectionOptions = Object.assign({}, connectionOptions);
        if (connectionOptions.certPath && fs.existsSync(connectionOptions.certPath)) {
            newConnectionOptions.ssl = {
                ca: fs.readFileSync(connectionOptions.certPath),
            };
        }
        return mysql.createConnection(newConnectionOptions);
    }
    static getPreviewUri(data) {
        const uri = vscode.Uri.parse("sqlresult://mysql/data");
        return uri.with({ query: data });
    }
    static showQueryResult(data, title) {
        // vscode.commands.executeCommand(
        //     "vscode.previewHtml",
        //     Utility.getPreviewUri(JSON.stringify(data)),
        //     vscode.ViewColumn.Two,
        //     title).then(() => { }, (e) => {
        //         OutputChannel.appendLine(e);
        //     });
        sqlResultWebView_1.SqlResultWebView.show(data, title);
    }
    static hasActiveConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            let count = 5;
            while (!global_1.Global.activeConnection && count > 0) {
                yield Utility.sleep(100);
                count--;
            }
            return !!global_1.Global.activeConnection;
        });
    }
    static sleep(ms) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }
}
exports.Utility = Utility;
Utility.maxTableCount = Utility.getConfiguration().get("maxTableCount");
//# sourceMappingURL=utility.js.map