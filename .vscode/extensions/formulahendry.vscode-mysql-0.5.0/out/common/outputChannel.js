"user strict";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutputChannel = void 0;
const vscode = require("vscode");
class OutputChannel {
    static appendLine(value) {
        OutputChannel.outputChannel.show(true);
        OutputChannel.outputChannel.appendLine(value);
    }
}
exports.OutputChannel = OutputChannel;
OutputChannel.outputChannel = vscode.window.createOutputChannel("MySQL");
//# sourceMappingURL=outputChannel.js.map