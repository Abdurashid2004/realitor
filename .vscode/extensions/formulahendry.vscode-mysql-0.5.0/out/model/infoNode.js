"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfoNode = void 0;
class InfoNode {
    constructor(label) {
        this.label = label;
    }
    getTreeItem() {
        return {
            label: this.label,
        };
    }
    getChildren() {
        return [];
    }
}
exports.InfoNode = InfoNode;
//# sourceMappingURL=infoNode.js.map