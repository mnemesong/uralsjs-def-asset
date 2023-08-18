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
var page1 = templator.tag.typecheck(['screen-color',
    {},
    ['padding-container',
        { 'class': "position-relative" },
        ['div',
            { class: "d-grid w-100", style: "grid-template-columns: 1fr 400px 1fr" },
            '&nbsp;',
            ['very-white-panel',
                {
                    class: 'mt-5 mb-5 w-100 p-3',
                    style: 'height: min-content;'
                },
                ['grid-gap-20',
                    {},
                    ['h3',
                        {},
                        "Авторизация"
                    ],
                    ['text-input'],
                    ['date-input'],
                    ['file-input'],
                    ['image-input'],
                    ['month-input'],
                    ['search-input'],
                    ['url-input'],
                    ['submit-input'],
                ],
            ],
            '&nbsp;',
        ]
    ],
], index.def.renderer);
var page2 = templator.tag.typecheck([
    'screen-photo',
    { photo: './1.jpg' },
    [
        'padding-container',
        {},
        [
            'grid-gap-30',
            { style: "grid-template-columns: 1fr 1fr;" },
            [
                'white-panel',
                {},
                'das98dnas89dn9as',
                ['br'],
                [
                    'btn-info',
                    {},
                    "Success"
                ]
            ],
            [
                'white-panel',
                {},
                'das98dnas89dn9as',
                ['br'],
                [
                    'btn-info',
                    {},
                    "Success"
                ]
            ],
        ]
    ]
], index.def.renderer);
var render = function () {
    document.body.innerHTML = templator.tag.render(page1, index.def.renderer)
        + templator.tag.render(page2, index.def.renderer);
};
render();
