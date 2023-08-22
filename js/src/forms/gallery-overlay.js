"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setOnclickCloseAction = exports.printDsl = exports.dataAttrs = void 0;
exports.dataAttrs = {
    dataCloseId: 'data-close-id'
};
var printDsl = function (id, content) {
    return ['div',
        { class: 'overlayer' },
        ['div', {
                'data-close-id': id,
                class: "overlayer-bg",
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
            content
        ],
    ];
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
