"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setOnclickCloseAction = exports.printDsl = exports.dataAttrs = void 0;
var t = __importStar(require("uralsjs-templator"));
var def = __importStar(require("../def"));
exports.dataAttrs = {
    dataCloseId: 'data-close-id'
};
var printDsl = function (id, content) {
    return t.typecheck(['div',
        { class: 'overlayer' },
        ['div', {
                'data-close-id': id,
                class: "overlayer-bg"
            },
        ],
        ['div',
            { class: "gallery-container", "data-show": "0" },
            ['div',
                {
                    class: "w-100 h-100",
                    'data-close-id': id,
                },
                '&nbsp;'
            ],
            ['div',
                {
                    class: "gallery-elem gallery-close",
                    'data-close-id': id,
                },
                '<ion-icon name="close-outline"></ion-icon>'
            ],
            content
        ],
    ], def.config);
};
exports.printDsl = printDsl;
var setOnclickCloseAction = function (id, action) {
    Array.from(document.querySelectorAll("[".concat(exports.dataAttrs.dataCloseId, "='").concat(id, "']")))
        .forEach(function (el) {
        if (el instanceof HTMLElement) {
            el.onclick = action;
        }
    });
};
exports.setOnclickCloseAction = setOnclickCloseAction;
