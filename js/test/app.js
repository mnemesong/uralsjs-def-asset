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
var templator = __importStar(require("uralsjs-templator"));
var index = __importStar(require("../src"));
var page = templator.tag.typecheck(['screen-color',
    {},
    ['padding-container',
        { 'class': "position-relative" },
        ['very-white-panel', {
                class: 'center-container mt-6 p-3',
                style: 'width: 400px; height: min-content;'
            },
            ['grid-gap-20',
                {},
                ['h3',
                    {},
                    "Авторизация"
                ]
            ]
        ]
    ],
], index.def.renderer);
var render = function () {
    document.body.innerHTML = templator.tag.render(page, index.def.renderer);
};
render();
