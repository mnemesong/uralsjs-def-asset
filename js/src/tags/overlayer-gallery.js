"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.renderer = exports.tag = void 0;
var t = __importStar(require("uralsjs-templator"));
exports.tag = 'overlayer-gallery';
exports.renderer = {
    'overlayer-gallery': function (params, content) {
        var cls = params.class
            ? ('overlayer ' + params.class)
            : 'overlayer';
        var p2 = __assign(__assign({}, params), { class: cls });
        return t.render(['div',
            p2,
            ['div', {
                    onclick: "this.closest('.overlayer').remove()",
                    class: "overlayer-bg"
                },
            ],
            ['div',
                { class: "gallery-container", "data-show": "0" },
                ['div',
                    {
                        class: "w-100 h-100",
                        onclick: "this.closest('.overlayer').remove()"
                    },
                    '&nbsp;'
                ],
                ['div',
                    {
                        class: "gallery-elem gallery-close",
                        onclick: "this.closest('.overlayer').remove()"
                    },
                    '<ion-icon name="close-outline"></ion-icon>'
                ],
                content
            ],
        ], t.html.config);
    }
};
