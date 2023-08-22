"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printDsl = void 0;
var printDsl = function (content) { return [
    'very-white-panel',
    {
        style: "position: absolute; top: 100px; left: 0; right: 0; "
            + "width: 400px; height: min-content; margin: auto;",
        class: "p-3"
    },
    content
]; };
exports.printDsl = printDsl;
