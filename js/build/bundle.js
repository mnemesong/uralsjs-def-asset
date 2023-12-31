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
var src = __importStar(require("../src"));
var page1 = templator.render(['screen-color',
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
], src.tags.renderer);
var page2 = templator.render([
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
                    { id: "create-alert-btn" },
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
                    { id: "create-popup-btn" },
                    "Success"
                ]
            ],
        ]
    ]
], src.tags.renderer);
var menu = templator.render([
    'nav-top-panel',
    {},
    [
        'nav-top-item',
        { class: "font-large" },
        [
            'a',
            { href: "/url", class: "color-light" },
            'Brand'
        ]
    ]
], src.tags.renderer)
    + templator.render(['nav-top-space'], src.tags.renderer);
var render = function () {
    document.body.innerHTML = menu
        + page1
        + page2
        + '<div id="popup-container"></div>'
        + src.htmlTemplate.printIonIconScriptTag();
};
render();
document.getElementById('create-alert-btn').onclick = function (event) { return src
    .script.createAlert("Alert!"); };
document.getElementById('create-popup-btn').onclick = function (event) {
    document
        .getElementById('popup-container').innerHTML = src.dsl.render(src.forms.gallery.printDsl('my-popup', [
        'very-white-panel',
        {
            style: "position: absolute; top: 100px; left: 0; right: 0; "
                + "width: 400px; height: min-content; margin: auto;",
            class: "p-3"
        },
        "My content"
    ]), src.def.config);
    src.forms
        .gallery
        .setOnclickCloseAction('my-popup', function (e) { console.log("HELLO!"); });
};
