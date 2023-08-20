(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
], index.tags.renderer);
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
                    { onclick: /*javascript*/ "createAlert('Alert!')" },
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
], index.tags.renderer);
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
], index.tags.renderer)
    + templator.render(['nav-top-space'], index.tags.renderer);
var render = function () {
    document.body.innerHTML = menu + page1 + page2;
};
render();

},{"../src":5,"uralsjs-templator":31}],2:[function(require,module,exports){
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
exports.getPath = exports.getAll = exports.getColors = exports.getTable = exports.getNav = exports.getMain = exports.getFonts = exports.getBootstrap = void 0;
var p = __importStar(require("path"));
var getBootstrap = function () { return p
    .resolve(module.path, "..", "..", "resources", "bootstrap.min.css"); };
exports.getBootstrap = getBootstrap;
var getFonts = function () { return p
    .resolve(module.path, "..", "..", "resources", "fonts.css"); };
exports.getFonts = getFonts;
var getMain = function () { return p
    .resolve(module.path, "..", "..", "resources", "main.css"); };
exports.getMain = getMain;
var getNav = function () { return p
    .resolve(module.path, "..", "..", "resources", "nav.css"); };
exports.getNav = getNav;
var getTable = function () { return p
    .resolve(module.path, "..", "..", "resources", "table.css"); };
exports.getTable = getTable;
var getColors = function () { return p
    .resolve(module.path, "..", "..", "resources", "colors.css"); };
exports.getColors = getColors;
var getAll = function () { return [
    (0, exports.getBootstrap)(),
    (0, exports.getFonts)(),
    (0, exports.getMain)(),
    (0, exports.getNav)(),
    (0, exports.getTable)(),
    (0, exports.getColors)(),
]; };
exports.getAll = getAll;
var getPath = function () { return p
    .resolve(module.path, "..", "..", "resources"); };
exports.getPath = getPath;

},{"path":23}],3:[function(require,module,exports){
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
exports.config = void 0;
var t = __importStar(require("uralsjs-templator"));
var tags = __importStar(require("./tags"));
exports.config = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, t.html.config), tags.gridGap.renderer), tags.overlayerGallery.renderer), tags.whitePanel.renderer), tags.veryWhitePanel.renderer), tags.screenColor.renderer), tags.screenPhoto.renderer), tags.paddingContainer.renderer), tags.btnInputs.renderer), tags.checkInputs.renderer), tags.formControlInputs.renderer), tags.btns.renderer), tags.navTopPanel.renderer), tags.navTopSpace.renderer);

},{"./tags":13,"uralsjs-templator":31}],4:[function(require,module,exports){
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
exports.renderHtml = void 0;
var htmlDslDef = __importStar(require("../src"));
var htmlDsl = __importStar(require("uralsjs-templator"));
var renderHtml = function (t, content) {
    return '<!DOCTYPE html>\n' + htmlDsl.render([
        'html',
        { lang: t.lang, class: "h-100" },
        [
            'head',
            {},
            [
                'title',
                {},
                t.title
            ],
            [
                'meta',
                { charset: 'UTF-8' }
            ],
            [
                'meta',
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
                },
            ],
            [
                'link',
                { type: 'image/x-icon', href: t.faviconUrl, rel: 'icon' },
            ],
        ].concat(t.cssFileUrls.map(function (url) { return [
            'link', { rel: 'stylesheet', href: url }
        ]; })),
        ['body', t.bodyParams, content],
    ]
        .concat(t.jsFileUrls.map(function (url) { return ['script', { src: url }]; }))
        .concat(t.jsScripts.map(function (script) { return ['script', {}, script]; })), htmlDslDef.tags.renderer);
};
exports.renderHtml = renderHtml;

},{"../src":5,"uralsjs-templator":31}],5:[function(require,module,exports){
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
exports.script = exports.dsl = exports.htmlTemplate = exports.def = exports.css = exports.tags = void 0;
exports.tags = __importStar(require("./tags"));
exports.css = __importStar(require("./css"));
exports.def = __importStar(require("./def"));
exports.htmlTemplate = __importStar(require("./html-template"));
exports.dsl = __importStar(require("uralsjs-templator"));
exports.script = __importStar(require("./script"));

},{"./css":2,"./def":3,"./html-template":4,"./script":6,"./tags":13,"uralsjs-templator":31}],6:[function(require,module,exports){
function addOverLayer(id) {
    if (id === void 0) { id = null; }
    var overLayer = document.createElement("div");
    if (id)
        overLayer.id = id;
    overLayer.innerHTML = '<div onclick="this.closest(\'.overlayer\').remove()"'
        + ' class="overlayer-bg">'
        + '<a href="#" style="color:#999" onmouseover="this.style.color=\'#ccc\'" '
        + 'onmouseleave="this.style.color=\'#999\'">'
        + '</a></div>';
    overLayer.classList.add('overlayer');
    document.body.after(overLayer);
    return overLayer;
}
function makeForm(html, id, header) {
    if (id === void 0) { id = ''; }
    if (header === void 0) { header = ''; }
    var newOverLayer = addOverLayer(id);
    newOverLayer.innerHTML = newOverLayer.innerHTML + '<div class="very-white-panel '
        + 'content-container height-min p-4 absolute-centralized">'
        + '<div class="popup-content">'
        + '<h3 class="popup-header p-0 m-0">' + header + '</h3>'
        + '<ion-icon name="close-outline" class="w-100 h-100 color-hov-red clickable" '
        + 'style="z-index: 1200;" '
        + 'onclick="this.closest(\'.overlayer\').remove()"></ion-icon>'
        + '<div class="popup-html">' + html + '</div>'
        + '</div></div>';
    var lastChild = newOverLayer.lastElementChild;
    if (!(lastChild instanceof HTMLElement)) {
        throw new Error("Last child is not HTMLElement");
    }
    if (lastChild.offsetHeight > newOverLayer.offsetHeight) {
        lastChild.style.marginTop = '50px';
        lastChild.style.marginBottom = '50px';
    }
    Array.from(newOverLayer.getElementsByTagName('script')).forEach(function (scriptBlock) {
        eval(scriptBlock.innerHTML);
    });
}
function makePopupGallery(contentHtmlsArray, id, index) {
    if (id === void 0) { id = ''; }
    if (index === void 0) { index = 0; }
    contentHtmlsArray = Array.isArray(contentHtmlsArray) ? contentHtmlsArray : [contentHtmlsArray];
    var newOverLayer = addOverLayer(id);
    var contentsHtml = contentHtmlsArray.map(function (el, i) {
        return '<div class="content-container gallery-content-container '
            + 'absolute-centralized" style="display: none" data-id="' + i + '">'
            + el + '</div>';
    });
    var galleryHtml = '<div class="gallery-container" data-show="'
        + index.toString() + '"><div class="w-100 h-100" '
        + 'onclick="this.closest(\'.overlayer\').remove()">&nbsp;</div>'
        + ((contentHtmlsArray.length > 1)
            ? ('<div class="gallery-elem gallery-left" onclick="switchGalleryContentLeft(this)">'
                + '<ion-icon name="chevron-back-outline"></ion-icon></div>'
                + '<div class="gallery-elem gallery-right" onclick="switchGalleryContentRight(this)">'
                + '<ion-icon name="chevron-forward-outline"></ion-icon></div>')
            : '')
        + '<div class="gallery-elem gallery-close" onclick="this.closest(\'.overlayer\').remove()">'
        + '<ion-icon name="close-outline"></ion-icon></div>'
        + contentsHtml.join('')
        + '</div>';
    newOverLayer.innerHTML = newOverLayer.innerHTML + galleryHtml;
    switchGalleryContent(newOverLayer.querySelector('.gallery-container'));
    Array.from(newOverLayer.getElementsByTagName('script')).forEach(function (scriptBlock) {
        eval(scriptBlock.innerHTML);
    });
}
function switchGalleryContentRight(handler) {
    var galleryContainer = handler.closest('.gallery-container');
    var targetShowId = parseInt(galleryContainer.getAttribute('data-show')) + 1;
    var galleryContents = Array.from(galleryContainer.getElementsByClassName('content-container'));
    var maxGalleryId = galleryContents
        .map(function (el) { return parseInt(el.getAttribute('data-id')); })
        .reduce(function (prev, cur) { return Math.max(prev, cur); });
    if (targetShowId > maxGalleryId) {
        targetShowId = 0;
    }
    galleryContainer.setAttribute('data-show', targetShowId.toString());
    if (!(galleryContainer instanceof HTMLElement)) {
        throw new Error("gelleryContainer is not HTMLElement");
    }
    switchGalleryContent(galleryContainer);
}
function switchGalleryContentLeft(handler) {
    var galleryContainer = handler.closest('.gallery-container');
    var targetShowId = parseInt(galleryContainer.getAttribute('data-show')) - 1;
    var galleryContents = Array.from(galleryContainer.getElementsByClassName('content-container'));
    var maxGalleryId = galleryContents
        .map(function (el) { return parseInt(el.getAttribute('data-id')); })
        .reduce(function (prev, cur) { return Math.max(prev, cur); });
    if (targetShowId < 0) {
        targetShowId = maxGalleryId;
    }
    galleryContainer.setAttribute('data-show', targetShowId.toString());
    if (!(galleryContainer instanceof HTMLElement)) {
        throw new Error("gelleryContainer is not HTMLElement");
    }
    switchGalleryContent(galleryContainer);
}
function switchGalleryContent(galleryContainer) {
    var shownId = galleryContainer.getAttribute('data-show');
    var galleryContents = Array
        .from(galleryContainer.getElementsByClassName('content-container'))
        .map(function (el) {
        if (!(el instanceof HTMLElement))
            throw new Error("galleryElement is not HTMLElement");
        return el;
    });
    galleryContents.forEach(function (el) {
        return el.style.display = (el.getAttribute('data-id') === shownId ? 'block' : 'none');
    });
}
function ssrOverLayerForm(url, data, alerter, id) {
    if (data === void 0) { data = {}; }
    if (alerter === void 0) { alerter = null; }
    if (id === void 0) { id = ''; }
    var formData = new FormData();
    Object.keys(data).forEach(function (k) { return formData.append(k, data[k]); });
    sendDataAjax(axiosBrowser(), formData, { action: url, method: 'get' }, {
        html: function (res) { return makeForm(res.html, id, res.header ? res.header : ''); },
        error: function (res) {
            console.log("Building overlayer form error:", res.error);
            if (alerter)
                alerter.createAlert(res.error, 'danger');
        }
    });
}
function ssrPopupGallery(url, data, alerter, id) {
    if (data === void 0) { data = {}; }
    if (alerter === void 0) { alerter = null; }
    if (id === void 0) { id = ''; }
    var formData = new FormData();
    Object.keys(data).forEach(function (k) { return formData.append(k, data[k]); });
    sendDataAjax(axiosBrowser(), formData, { action: url, method: 'get' }, {
        html: function (res) { return makePopupGallery(res.html, id, res.index ? parseInt(res.index) : 0); },
        htmls: function (res) { return makePopupGallery(res.htmls, id, res.index ? parseInt(res.index) : 0); },
        error: function (res) {
            console.log("Building overlayer form error:", res.error);
            if (alerter)
                alerter.createAlert(res.error, 'danger');
        }
    });
}
function createAlert(text, style) {
    if (style === void 0) { style = 'danger'; }
    console.log("Alert " + style, text);
    var alertContainer = document.getElementById("alertContainer");
    if (!alertContainer) {
        var body = document.querySelector('body');
        var divEl = document.createElement('div');
        body.append(divEl);
        divEl.outerHTML = "<div class='alert-container' id='alertContainer'></div>";
    }
    setTimeout(function () {
        alertContainer = document.getElementById("alertContainer");
        var alertBlock = document.createElement('div');
        alertContainer.append(alertBlock);
        var id = Math.round(Math.random() * 1000);
        alertBlock.outerHTML = "<div class='alert-block alert-block-"
            + style + "' id='alertCont_" + id.toString()
            + "' style='opacity: 0;'>" + text + "</div>";
        setTimeout(function () {
            alertBlock = document
                .getElementById("alertCont_" + id.toString());
            alertBlock.style.opacity = '1';
        }, 50);
        setTimeout(function () {
            alertBlock = document
                .getElementById("alertCont_" + id.toString());
            alertBlock.style.opacity = '0';
        }, 4400);
        setTimeout(function () {
            alertBlock = document
                .getElementById("alertCont_" + id.toString());
            alertBlock.style.height = '0';
        }, 4800);
        setTimeout(function () {
            var alertBlock = document
                .getElementById("alertCont_" + id.toString());
            alertBlock.remove();
        }, 5000);
    }, 50);
}
function errorReaction(response) {
    if (response.error) {
        createAlert(response.error);
    }
    if (response.details) {
        console.log(response.details);
    }
}
function onPressEnter(event, handler, fn) {
    if (event.key === "Enter") {
        event.preventDefault();
        fn(handler);
    }
}
function clickSubmitBtnInForm(handler) {
    handler.closest('form').querySelector('.submit-button').click();
}

},{}],7:[function(require,module,exports){
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
exports.renderer = exports.literals = void 0;
var t = __importStar(require("uralsjs-templator"));
exports.literals = [
    'button-input',
    'reset-input',
    'submit-input',
];
exports.renderer = {};
exports.literals.forEach(function (l) {
    exports.renderer[l] = function (params, content) {
        var type = l.split('-')[0];
        var cls = params.class
            ? (((typeof params.class === 'string'
                ? params.class
                : params.class.toString()).includes('btn-')
                ? ('btn ' + params.class)
                : ('btn btn-primary ' + params.class)))
            : ('btn btn-primary');
        var paramsText = t
            .config
            .record
            .render(__assign(__assign({ type: type }, params), { class: cls }));
        return "<input ".concat(paramsText, ">");
    };
});

},{"uralsjs-templator":31}],8:[function(require,module,exports){
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
exports.renderer = exports.literals = void 0;
var t = __importStar(require("uralsjs-templator"));
exports.literals = [
    'btn-success',
    'btn-danger',
    'btn-warning',
    'btn-info',
    'btn-white',
    'btn-dark',
    'btn-primary',
    'btn-secondary',
];
exports.renderer = {};
exports.literals.forEach(function (l) {
    exports.renderer[l] = function (params, content) {
        var type = l.split('-')[1];
        var cls = params.class
            ? ('btn btn-' + type + ' ' + params.class)
            : ('btn btn-' + type);
        var paramsText = t
            .config
            .record
            .render(__assign(__assign({ type: 'button' }, params), { class: cls }));
        return "<button ".concat(paramsText, ">").concat(content, "</button>");
    };
});

},{"uralsjs-templator":31}],9:[function(require,module,exports){
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
exports.renderer = exports.literals = void 0;
var t = __importStar(require("uralsjs-templator"));
exports.literals = [
    'checkbox-input',
    'hidden-input',
    'radio-input',
];
exports.renderer = {};
exports.literals.forEach(function (l) {
    exports.renderer[l] = function (params, content) {
        var type = l.split('-')[0];
        var stl = params.style
            ? ('width: 22px; height:22px; ' + params.style)
            : ('width: 22px; height:22px;');
        var paramsText = t
            .config
            .record
            .render(__assign(__assign({ type: type }, params), { style: stl }));
        return "<input ".concat(paramsText, ">");
    };
});

},{"uralsjs-templator":31}],10:[function(require,module,exports){
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
exports.renderer = exports.literals = void 0;
var t = __importStar(require("uralsjs-templator"));
exports.literals = [
    'text-input',
    'number-input',
    'date-input',
    'email-input',
    'file-input',
    'image-input',
    'month-input',
    'password-input',
    'randge-input',
    'search-input',
    'tel-input',
    'time-input',
    'url-input',
    'week-input',
];
exports.renderer = {};
exports.literals.forEach(function (l) {
    exports.renderer[l] = function (params, content) {
        var type = l.split('-')[0];
        var cls = params.class
            ? ('form-control ' + params.class)
            : ('form-control');
        var paramsText = t
            .config
            .record
            .render(__assign(__assign({ type: type }, params), { class: cls }));
        return "<input ".concat(paramsText, ">");
    };
});

},{"uralsjs-templator":31}],11:[function(require,module,exports){
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
exports.renderer = exports.literals = void 0;
var t = __importStar(require("uralsjs-templator"));
exports.literals = [
    'grid-gap-0',
    'grid-gap-5',
    'grid-gap-10',
    'grid-gap-20',
    'grid-gap-30'
];
exports.renderer = {};
exports.literals.forEach(function (l) {
    exports.renderer[l] = function (params, content) {
        var cls = params.class
            ? ('d-grid ' + l + ' ' + params.class)
            : ('d-grid ' + l);
        var paramsText = t
            .config
            .record
            .render(__assign(__assign({}, params), { class: cls }));
        return "<div ".concat(paramsText, ">").concat(content, "</div>");
    };
});

},{"uralsjs-templator":31}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.whitePanel = exports.veryWhitePanel = exports.screenPhoto = exports.screenColor = exports.paddingContainer = exports.overlayerGallery = exports.navTopSpace = exports.navTopPanel = exports.navTopItem = exports.gridGap30 = exports.gridGap20 = exports.gridGap10 = exports.gridGap5 = exports.gridGap0 = exports.weekInput = exports.urlInput = exports.timeInput = exports.telInput = exports.searchInput = exports.randgeInput = exports.passwordInput = exports.monthInput = exports.imageInput = exports.fileInput = exports.emailInput = exports.dateInput = exports.numberInput = exports.textInput = exports.radioInput = exports.hiddenInput = exports.checkboxInput = exports.btnSecondary = exports.btnPrimary = exports.btnDark = exports.btnWhite = exports.btnInfo = exports.btnWarning = exports.btnDanger = exports.btnSuccess = exports.submitInput = exports.resetInput = exports.buttonInput = void 0;
exports.buttonInput = 'button-input';
exports.resetInput = 'reset-input';
exports.submitInput = 'submit-input';
exports.btnSuccess = 'btn-success';
exports.btnDanger = 'btn-danger';
exports.btnWarning = 'btn-warning';
exports.btnInfo = 'btn-info';
exports.btnWhite = 'btn-white';
exports.btnDark = 'btn-dark';
exports.btnPrimary = 'btn-primary';
exports.btnSecondary = 'btn-secondary';
exports.checkboxInput = 'checkbox-input';
exports.hiddenInput = 'hidden-input';
exports.radioInput = 'radio-input';
exports.textInput = 'text-input';
exports.numberInput = 'number-input';
exports.dateInput = 'date-input';
exports.emailInput = 'email-input';
exports.fileInput = 'file-input';
exports.imageInput = 'image-input';
exports.monthInput = 'month-input';
exports.passwordInput = 'password-input';
exports.randgeInput = 'randge-input';
exports.searchInput = 'search-input';
exports.telInput = 'tel-input';
exports.timeInput = 'time-input';
exports.urlInput = 'url-input';
exports.weekInput = 'week-input';
exports.gridGap0 = 'grid-gap-0';
exports.gridGap5 = 'grid-gap-5';
exports.gridGap10 = 'grid-gap-10';
exports.gridGap20 = 'grid-gap-20';
exports.gridGap30 = 'grid-gap-30';
exports.navTopItem = 'nav-top-item';
exports.navTopPanel = 'nav-top-panel';
exports.navTopSpace = 'nav-top-space';
exports.overlayerGallery = 'overlayer-gallery';
exports.paddingContainer = 'padding-container';
exports.screenColor = 'screen-color';
exports.screenPhoto = 'screen-photo';
exports.veryWhitePanel = 'very-white-panel';
exports.whitePanel = 'white-panel';

},{}],13:[function(require,module,exports){
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
exports.renderer = exports.helper = exports.navTopItem = exports.navTopSpace = exports.navTopPanel = exports.btns = exports.formControlInputs = exports.checkInputs = exports.btnInputs = exports.veryWhitePanel = exports.paddingContainer = exports.screenColor = exports.screenPhoto = exports.whitePanel = exports.overlayerGallery = exports.gridGap = void 0;
exports.gridGap = __importStar(require("./grid-gap"));
exports.overlayerGallery = __importStar(require("./overlayer-gallery"));
exports.whitePanel = __importStar(require("./white-panel"));
exports.screenPhoto = __importStar(require("./screen-photo"));
exports.screenColor = __importStar(require("./screen-color"));
exports.paddingContainer = __importStar(require("./padding-container"));
exports.veryWhitePanel = __importStar(require("./very-white-panel"));
exports.btnInputs = __importStar(require("./btn-inputs"));
exports.checkInputs = __importStar(require("./check-inputs"));
exports.formControlInputs = __importStar(require("./form-control-inputs"));
exports.btns = __importStar(require("./btns"));
exports.navTopPanel = __importStar(require("./nav-top-panel"));
exports.navTopSpace = __importStar(require("./nav-top-space"));
exports.navTopItem = __importStar(require("./nav-top-item"));
exports.helper = __importStar(require("./helper"));
var t = __importStar(require("uralsjs-templator"));
var gridGap = __importStar(require("./grid-gap"));
var overlayerGallery = __importStar(require("./overlayer-gallery"));
var whitePanel = __importStar(require("./white-panel"));
var screenPhoto = __importStar(require("./screen-photo"));
var screenColor = __importStar(require("./screen-color"));
var paddingContainer = __importStar(require("./padding-container"));
var veryWhitePanel = __importStar(require("./very-white-panel"));
var btnInputs = __importStar(require("./btn-inputs"));
var checkInputs = __importStar(require("./check-inputs"));
var formControlInputs = __importStar(require("./form-control-inputs"));
var btns = __importStar(require("./btns"));
var navTopPanel = __importStar(require("./nav-top-panel"));
var navTopSpace = __importStar(require("./nav-top-space"));
var navTopItem = __importStar(require("./nav-top-item"));
exports.renderer = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, t.html.config), gridGap.renderer), overlayerGallery.renderer), whitePanel.renderer), veryWhitePanel.renderer), screenColor.renderer), screenPhoto.renderer), paddingContainer.renderer), btnInputs.renderer), checkInputs.renderer), formControlInputs.renderer), btns.renderer), navTopPanel.renderer), navTopSpace.renderer), navTopItem.renderer);

},{"./btn-inputs":7,"./btns":8,"./check-inputs":9,"./form-control-inputs":10,"./grid-gap":11,"./helper":12,"./nav-top-item":14,"./nav-top-panel":15,"./nav-top-space":16,"./overlayer-gallery":17,"./padding-container":18,"./screen-color":19,"./screen-photo":20,"./very-white-panel":21,"./white-panel":22,"uralsjs-templator":31}],14:[function(require,module,exports){
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
exports.renderer = exports.literal = void 0;
var t = __importStar(require("uralsjs-templator"));
exports.literal = 'nav-top-item';
exports.renderer = {
    'nav-top-item': function (params, content) {
        var cls = params.class
            ? "d-table h-100 " + params.class
            : "d-table h-100";
        return t.render([
            'div',
            __assign(__assign({}, params), { class: cls }),
            [
                'div',
                {
                    class: "d-table-cell pe-2 ps-2 h-100",
                    style: "vertical-align: middle;"
                },
                content
            ]
        ], t.html.config);
    }
};

},{"uralsjs-templator":31}],15:[function(require,module,exports){
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
exports.renderer = exports.literal = void 0;
var t = __importStar(require("uralsjs-templator"));
exports.literal = 'nav-top-panel';
exports.renderer = {
    'nav-top-panel': function (params, content) {
        var cls = params.class
            ? "w-100 position-fixed dark-screen padding-width "
                + params.class
            : "w-100 position-fixed dark-screen padding-width";
        var stl = params.style
            ? "top: 0; height: 50px; z-index: 999; "
                + params.style
            : "top: 0; height: 50px; z-index: 999;";
        return t.render([
            'div',
            __assign(__assign({}, params), { class: cls, style: stl }),
            (content.length > 0) ? content : '&nbsp;'
        ], t.html.config);
    }
};

},{"uralsjs-templator":31}],16:[function(require,module,exports){
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
exports.renderer = exports.literal = void 0;
var t = __importStar(require("uralsjs-templator"));
exports.literal = 'nav-top-space';
exports.renderer = {
    'nav-top-space': function (params, content) {
        var cls = params.class
            ? "w-100 screen-dark " + params.class
            : "w-100 screen-dark";
        var stl = params.style
            ? "height: 50px; " + params.style
            : "height: 50px;";
        return t.render([
            'div',
            __assign(__assign({}, params), { class: cls, style: stl }),
            (content.length > 0) ? '&nbsp;' : content
        ], t.html.config);
    }
};

},{"uralsjs-templator":31}],17:[function(require,module,exports){
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
            : params.class;
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

},{"uralsjs-templator":31}],18:[function(require,module,exports){
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
exports.renderer = exports.literal = void 0;
var t = __importStar(require("uralsjs-templator"));
exports.literal = 'padding-container';
exports.renderer = {
    'padding-container': function (params, content) {
        var cls = params.class
            ? ('padding-container ' + params.class)
            : 'padding-container';
        var paramsText = t
            .config
            .record
            .render(__assign({ class: cls }, params));
        return "<div ".concat(paramsText, ">").concat(content, "</div>");
    }
};

},{"uralsjs-templator":31}],19:[function(require,module,exports){
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
exports.renderer = exports.literal = void 0;
var t = __importStar(require("uralsjs-templator"));
exports.literal = 'screen-color';
exports.renderer = {
    'screen-color': function (params, content) {
        var cls = params.class
            ? ('screen dark-screen ' + params.class)
            : 'screen dark-screen';
        var paramsText = t
            .config
            .record
            .render(__assign(__assign({}, params), { class: cls }));
        return "<div ".concat(paramsText, ">").concat(content, "</div>");
    }
};

},{"uralsjs-templator":31}],20:[function(require,module,exports){
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
exports.tag = 'screen-photo';
exports.renderer = {
    'screen-photo': function (params, content) {
        var cls = params.class
            ? (params.class + ' screen')
            : 'screen';
        var photo = params['photo']
            ? (typeof params['photo'] === 'string'
                ? params['photo']
                : params['photo'].toString())
            : '';
        var paramsCorrected = __assign({}, params);
        if (params['photo']) {
            delete paramsCorrected[photo];
        }
        return t.render(['div',
            paramsCorrected,
            ['div',
                { style: "position: absolute; height:100%; width:100%;" },
                ['div',
                    {
                        class: 'screen-sticky',
                        style: (photo.length > 0)
                            ? "background-image: url('".concat(photo, "');")
                            : ''
                    }
                ]
            ],
            content], t.html.config);
    }
};

},{"uralsjs-templator":31}],21:[function(require,module,exports){
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
exports.tag = 'very-white-panel';
exports.renderer = {
    'very-white-panel': function (params, content) {
        var cls = params.class
            ? (params.class + ' very-white-panel p-3')
            : 'very-white-panel p-3';
        var paramsText = t
            .config
            .record
            .render(__assign(__assign({}, params), { class: cls }));
        return "<div ".concat(paramsText, ">").concat(content, "</div>");
    }
};

},{"uralsjs-templator":31}],22:[function(require,module,exports){
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
exports.tag = 'white-panel';
exports.renderer = {
    'white-panel': function (params, content) {
        var cls = params.class
            ? (params.class + ' white-panel p-3')
            : 'white-panel p-3';
        var paramsText = t
            .config
            .record
            .render(__assign(__assign({}, params), { class: cls }));
        return "<div ".concat(paramsText, ">").concat(content, "</div>");
    }
};

},{"uralsjs-templator":31}],23:[function(require,module,exports){
(function (process){(function (){
// 'path' module extracted from Node.js v8.11.1 (only the posix part)
// transplited with Babel

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

function assertPath(path) {
  if (typeof path !== 'string') {
    throw new TypeError('Path must be a string. Received ' + JSON.stringify(path));
  }
}

// Resolves . and .. elements in a path with directory names
function normalizeStringPosix(path, allowAboveRoot) {
  var res = '';
  var lastSegmentLength = 0;
  var lastSlash = -1;
  var dots = 0;
  var code;
  for (var i = 0; i <= path.length; ++i) {
    if (i < path.length)
      code = path.charCodeAt(i);
    else if (code === 47 /*/*/)
      break;
    else
      code = 47 /*/*/;
    if (code === 47 /*/*/) {
      if (lastSlash === i - 1 || dots === 1) {
        // NOOP
      } else if (lastSlash !== i - 1 && dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 /*.*/ || res.charCodeAt(res.length - 2) !== 46 /*.*/) {
          if (res.length > 2) {
            var lastSlashIndex = res.lastIndexOf('/');
            if (lastSlashIndex !== res.length - 1) {
              if (lastSlashIndex === -1) {
                res = '';
                lastSegmentLength = 0;
              } else {
                res = res.slice(0, lastSlashIndex);
                lastSegmentLength = res.length - 1 - res.lastIndexOf('/');
              }
              lastSlash = i;
              dots = 0;
              continue;
            }
          } else if (res.length === 2 || res.length === 1) {
            res = '';
            lastSegmentLength = 0;
            lastSlash = i;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          if (res.length > 0)
            res += '/..';
          else
            res = '..';
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0)
          res += '/' + path.slice(lastSlash + 1, i);
        else
          res = path.slice(lastSlash + 1, i);
        lastSegmentLength = i - lastSlash - 1;
      }
      lastSlash = i;
      dots = 0;
    } else if (code === 46 /*.*/ && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}

function _format(sep, pathObject) {
  var dir = pathObject.dir || pathObject.root;
  var base = pathObject.base || (pathObject.name || '') + (pathObject.ext || '');
  if (!dir) {
    return base;
  }
  if (dir === pathObject.root) {
    return dir + base;
  }
  return dir + sep + base;
}

var posix = {
  // path.resolve([from ...], to)
  resolve: function resolve() {
    var resolvedPath = '';
    var resolvedAbsolute = false;
    var cwd;

    for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
      var path;
      if (i >= 0)
        path = arguments[i];
      else {
        if (cwd === undefined)
          cwd = process.cwd();
        path = cwd;
      }

      assertPath(path);

      // Skip empty entries
      if (path.length === 0) {
        continue;
      }

      resolvedPath = path + '/' + resolvedPath;
      resolvedAbsolute = path.charCodeAt(0) === 47 /*/*/;
    }

    // At this point the path should be resolved to a full absolute path, but
    // handle relative paths to be safe (might happen when process.cwd() fails)

    // Normalize the path
    resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);

    if (resolvedAbsolute) {
      if (resolvedPath.length > 0)
        return '/' + resolvedPath;
      else
        return '/';
    } else if (resolvedPath.length > 0) {
      return resolvedPath;
    } else {
      return '.';
    }
  },

  normalize: function normalize(path) {
    assertPath(path);

    if (path.length === 0) return '.';

    var isAbsolute = path.charCodeAt(0) === 47 /*/*/;
    var trailingSeparator = path.charCodeAt(path.length - 1) === 47 /*/*/;

    // Normalize the path
    path = normalizeStringPosix(path, !isAbsolute);

    if (path.length === 0 && !isAbsolute) path = '.';
    if (path.length > 0 && trailingSeparator) path += '/';

    if (isAbsolute) return '/' + path;
    return path;
  },

  isAbsolute: function isAbsolute(path) {
    assertPath(path);
    return path.length > 0 && path.charCodeAt(0) === 47 /*/*/;
  },

  join: function join() {
    if (arguments.length === 0)
      return '.';
    var joined;
    for (var i = 0; i < arguments.length; ++i) {
      var arg = arguments[i];
      assertPath(arg);
      if (arg.length > 0) {
        if (joined === undefined)
          joined = arg;
        else
          joined += '/' + arg;
      }
    }
    if (joined === undefined)
      return '.';
    return posix.normalize(joined);
  },

  relative: function relative(from, to) {
    assertPath(from);
    assertPath(to);

    if (from === to) return '';

    from = posix.resolve(from);
    to = posix.resolve(to);

    if (from === to) return '';

    // Trim any leading backslashes
    var fromStart = 1;
    for (; fromStart < from.length; ++fromStart) {
      if (from.charCodeAt(fromStart) !== 47 /*/*/)
        break;
    }
    var fromEnd = from.length;
    var fromLen = fromEnd - fromStart;

    // Trim any leading backslashes
    var toStart = 1;
    for (; toStart < to.length; ++toStart) {
      if (to.charCodeAt(toStart) !== 47 /*/*/)
        break;
    }
    var toEnd = to.length;
    var toLen = toEnd - toStart;

    // Compare paths to find the longest common path from root
    var length = fromLen < toLen ? fromLen : toLen;
    var lastCommonSep = -1;
    var i = 0;
    for (; i <= length; ++i) {
      if (i === length) {
        if (toLen > length) {
          if (to.charCodeAt(toStart + i) === 47 /*/*/) {
            // We get here if `from` is the exact base path for `to`.
            // For example: from='/foo/bar'; to='/foo/bar/baz'
            return to.slice(toStart + i + 1);
          } else if (i === 0) {
            // We get here if `from` is the root
            // For example: from='/'; to='/foo'
            return to.slice(toStart + i);
          }
        } else if (fromLen > length) {
          if (from.charCodeAt(fromStart + i) === 47 /*/*/) {
            // We get here if `to` is the exact base path for `from`.
            // For example: from='/foo/bar/baz'; to='/foo/bar'
            lastCommonSep = i;
          } else if (i === 0) {
            // We get here if `to` is the root.
            // For example: from='/foo'; to='/'
            lastCommonSep = 0;
          }
        }
        break;
      }
      var fromCode = from.charCodeAt(fromStart + i);
      var toCode = to.charCodeAt(toStart + i);
      if (fromCode !== toCode)
        break;
      else if (fromCode === 47 /*/*/)
        lastCommonSep = i;
    }

    var out = '';
    // Generate the relative path based on the path difference between `to`
    // and `from`
    for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
      if (i === fromEnd || from.charCodeAt(i) === 47 /*/*/) {
        if (out.length === 0)
          out += '..';
        else
          out += '/..';
      }
    }

    // Lastly, append the rest of the destination (`to`) path that comes after
    // the common path parts
    if (out.length > 0)
      return out + to.slice(toStart + lastCommonSep);
    else {
      toStart += lastCommonSep;
      if (to.charCodeAt(toStart) === 47 /*/*/)
        ++toStart;
      return to.slice(toStart);
    }
  },

  _makeLong: function _makeLong(path) {
    return path;
  },

  dirname: function dirname(path) {
    assertPath(path);
    if (path.length === 0) return '.';
    var code = path.charCodeAt(0);
    var hasRoot = code === 47 /*/*/;
    var end = -1;
    var matchedSlash = true;
    for (var i = path.length - 1; i >= 1; --i) {
      code = path.charCodeAt(i);
      if (code === 47 /*/*/) {
          if (!matchedSlash) {
            end = i;
            break;
          }
        } else {
        // We saw the first non-path separator
        matchedSlash = false;
      }
    }

    if (end === -1) return hasRoot ? '/' : '.';
    if (hasRoot && end === 1) return '//';
    return path.slice(0, end);
  },

  basename: function basename(path, ext) {
    if (ext !== undefined && typeof ext !== 'string') throw new TypeError('"ext" argument must be a string');
    assertPath(path);

    var start = 0;
    var end = -1;
    var matchedSlash = true;
    var i;

    if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
      if (ext.length === path.length && ext === path) return '';
      var extIdx = ext.length - 1;
      var firstNonSlashEnd = -1;
      for (i = path.length - 1; i >= 0; --i) {
        var code = path.charCodeAt(i);
        if (code === 47 /*/*/) {
            // If we reached a path separator that was not part of a set of path
            // separators at the end of the string, stop now
            if (!matchedSlash) {
              start = i + 1;
              break;
            }
          } else {
          if (firstNonSlashEnd === -1) {
            // We saw the first non-path separator, remember this index in case
            // we need it if the extension ends up not matching
            matchedSlash = false;
            firstNonSlashEnd = i + 1;
          }
          if (extIdx >= 0) {
            // Try to match the explicit extension
            if (code === ext.charCodeAt(extIdx)) {
              if (--extIdx === -1) {
                // We matched the extension, so mark this as the end of our path
                // component
                end = i;
              }
            } else {
              // Extension does not match, so our result is the entire path
              // component
              extIdx = -1;
              end = firstNonSlashEnd;
            }
          }
        }
      }

      if (start === end) end = firstNonSlashEnd;else if (end === -1) end = path.length;
      return path.slice(start, end);
    } else {
      for (i = path.length - 1; i >= 0; --i) {
        if (path.charCodeAt(i) === 47 /*/*/) {
            // If we reached a path separator that was not part of a set of path
            // separators at the end of the string, stop now
            if (!matchedSlash) {
              start = i + 1;
              break;
            }
          } else if (end === -1) {
          // We saw the first non-path separator, mark this as the end of our
          // path component
          matchedSlash = false;
          end = i + 1;
        }
      }

      if (end === -1) return '';
      return path.slice(start, end);
    }
  },

  extname: function extname(path) {
    assertPath(path);
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find
    var preDotState = 0;
    for (var i = path.length - 1; i >= 0; --i) {
      var code = path.charCodeAt(i);
      if (code === 47 /*/*/) {
          // If we reached a path separator that was not part of a set of path
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            startPart = i + 1;
            break;
          }
          continue;
        }
      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }
      if (code === 46 /*.*/) {
          // If this is our first dot, mark it as the start of our extension
          if (startDot === -1)
            startDot = i;
          else if (preDotState !== 1)
            preDotState = 1;
      } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }

    if (startDot === -1 || end === -1 ||
        // We saw a non-dot character immediately before the dot
        preDotState === 0 ||
        // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      return '';
    }
    return path.slice(startDot, end);
  },

  format: function format(pathObject) {
    if (pathObject === null || typeof pathObject !== 'object') {
      throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
    }
    return _format('/', pathObject);
  },

  parse: function parse(path) {
    assertPath(path);

    var ret = { root: '', dir: '', base: '', ext: '', name: '' };
    if (path.length === 0) return ret;
    var code = path.charCodeAt(0);
    var isAbsolute = code === 47 /*/*/;
    var start;
    if (isAbsolute) {
      ret.root = '/';
      start = 1;
    } else {
      start = 0;
    }
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    var i = path.length - 1;

    // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find
    var preDotState = 0;

    // Get non-dir info
    for (; i >= start; --i) {
      code = path.charCodeAt(i);
      if (code === 47 /*/*/) {
          // If we reached a path separator that was not part of a set of path
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            startPart = i + 1;
            break;
          }
          continue;
        }
      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }
      if (code === 46 /*.*/) {
          // If this is our first dot, mark it as the start of our extension
          if (startDot === -1) startDot = i;else if (preDotState !== 1) preDotState = 1;
        } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }

    if (startDot === -1 || end === -1 ||
    // We saw a non-dot character immediately before the dot
    preDotState === 0 ||
    // The (right-most) trimmed path component is exactly '..'
    preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      if (end !== -1) {
        if (startPart === 0 && isAbsolute) ret.base = ret.name = path.slice(1, end);else ret.base = ret.name = path.slice(startPart, end);
      }
    } else {
      if (startPart === 0 && isAbsolute) {
        ret.name = path.slice(1, startDot);
        ret.base = path.slice(1, end);
      } else {
        ret.name = path.slice(startPart, startDot);
        ret.base = path.slice(startPart, end);
      }
      ret.ext = path.slice(startDot, end);
    }

    if (startPart > 0) ret.dir = path.slice(0, startPart - 1);else if (isAbsolute) ret.dir = '/';

    return ret;
  },

  sep: '/',
  delimiter: ':',
  win32: null,
  posix: null
};

posix.posix = posix;

module.exports = posix;

}).call(this)}).call(this,require('_process'))
},{"_process":24}],24:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],25:[function(require,module,exports){
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
exports.record = void 0;
exports.record = __importStar(require("./record"));

},{"./record":26}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = void 0;
var render = function (t) { return Object
    .keys(t).map(function (k) { return ' ' + k + '="'
    + (typeof t[k] === 'string' ? t[k] : t[k].toString())
        .replace('"', '\\"') + '"'; })
    .join(''); };
exports.render = render;

},{}],27:[function(require,module,exports){
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
exports.config = exports.literals = void 0;
var c = __importStar(require("../config"));
exports.literals = [
    'a',
    'abbr',
    'acronym',
    'address',
    'applet',
    'article',
    'aside',
    'audio',
    'b',
    'basefont',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'button',
    'canvas',
    'caption',
    'center',
    'cite',
    'code',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'dir',
    'div',
    'dl',
    'dt',
    'em',
    'fieldset',
    'figcaption',
    'figure',
    'font',
    'footer',
    'form',
    'frame',
    'frameset',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'html',
    'i',
    'iframe',
    'ins',
    'kbd',
    'label',
    'li',
    'main',
    'map',
    'mark',
    'meter',
    'nav',
    'noframes',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'span',
    'strike',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'svg',
    'table',
    'tbody',
    'td',
    'template',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'tt',
    'u',
    'ul',
    'var',
    'video',
];
var reducer = function (acc, el) {
    var _a;
    var a = function (params, content) {
        return "<".concat(el).concat(c.record.render(params), ">").concat(content, "</").concat(el, ">");
    };
    return __assign(__assign({}, acc), (_a = {}, _a[el] = a, _a));
};
exports.config = exports.literals.reduce(reducer, {});

},{"../config":25}],28:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.header = exports.head = exports.h6 = exports.h5 = exports.h4 = exports.h3 = exports.h2 = exports.h1 = exports.frameset = exports.frame = exports.form = exports.footer = exports.font = exports.figure = exports.figcaption = exports.fieldset = exports.em = exports.dt = exports.dl = exports.div = exports.dir = exports.dialog = exports.dfn = exports.details = exports.del = exports.dd = exports.datalist = exports.data = exports.colgroup = exports.code = exports.cite = exports.center = exports.caption = exports.canvas = exports.button = exports.body = exports.blockquote = exports.big = exports.bdo = exports.bdi = exports.basefont = exports.b = exports.audio = exports.aside = exports.article = exports.applet = exports.address = exports.acronym = exports.abbr = exports.a = void 0;
exports.time = exports.thead = exports.th = exports.tfoot = exports.textarea = exports.template = exports.td = exports.tbody = exports.table = exports.svg = exports.sup = exports.summary = exports.sub = exports.style = exports.strong = exports.strike = exports.span = exports.small = exports.select = exports.section = exports.script = exports.samp = exports.s = exports.ruby = exports.rt = exports.rp = exports.q = exports.progress = exports.pre = exports.picture = exports.p = exports.output = exports.option = exports.optgroup = exports.ol = exports.object = exports.noscript = exports.noframes = exports.nav = exports.meter = exports.mark = exports.map = exports.main = exports.li = exports.label = exports.kbd = exports.ins = exports.iframe = exports.i = exports.html = void 0;
exports.wbr = exports.track = exports.source = exports.param = exports.meta = exports.link = exports.keygen = exports.input = exports.img = exports.hr = exports.embed = exports.command = exports.col = exports.br = exports.base = exports.area = exports.doctype = exports.video = exports._var = exports.ul = exports.u = exports.tt = exports.tr = exports.title = void 0;
exports.a = 'a';
exports.abbr = 'abbr';
exports.acronym = 'acronym';
exports.address = 'address';
exports.applet = 'applet';
exports.article = 'article';
exports.aside = 'aside';
exports.audio = 'audio';
exports.b = 'b';
exports.basefont = 'basefont';
exports.bdi = 'bdi';
exports.bdo = 'bdo';
exports.big = 'big';
exports.blockquote = 'blockquote';
exports.body = 'body';
exports.button = 'button';
exports.canvas = 'canvas';
exports.caption = 'caption';
exports.center = 'center';
exports.cite = 'cite';
exports.code = 'code';
exports.colgroup = 'colgroup';
exports.data = 'data';
exports.datalist = 'datalist';
exports.dd = 'dd';
exports.del = 'del';
exports.details = 'details';
exports.dfn = 'dfn';
exports.dialog = 'dialog';
exports.dir = 'dir';
exports.div = 'div';
exports.dl = 'dl';
exports.dt = 'dt';
exports.em = 'em';
exports.fieldset = 'fieldset';
exports.figcaption = 'figcaption';
exports.figure = 'figure';
exports.font = 'font';
exports.footer = 'footer';
exports.form = 'form';
exports.frame = 'frame';
exports.frameset = 'frameset';
exports.h1 = 'h1';
exports.h2 = 'h2';
exports.h3 = 'h3';
exports.h4 = 'h4';
exports.h5 = 'h5';
exports.h6 = 'h6';
exports.head = 'head';
exports.header = 'header';
exports.html = 'html';
exports.i = 'i';
exports.iframe = 'iframe';
exports.ins = 'ins';
exports.kbd = 'kbd';
exports.label = 'label';
exports.li = 'li';
exports.main = 'main';
exports.map = 'map';
exports.mark = 'mark';
exports.meter = 'meter';
exports.nav = 'nav';
exports.noframes = 'noframes';
exports.noscript = 'noscript';
exports.object = 'object';
exports.ol = 'ol';
exports.optgroup = 'optgroup';
exports.option = 'option';
exports.output = 'output';
exports.p = 'p';
exports.picture = 'picture';
exports.pre = 'pre';
exports.progress = 'progress';
exports.q = 'q';
exports.rp = 'rp';
exports.rt = 'rt';
exports.ruby = 'ruby';
exports.s = 's';
exports.samp = 'samp';
exports.script = 'script';
exports.section = 'section';
exports.select = 'select';
exports.small = 'small';
exports.span = 'span';
exports.strike = 'strike';
exports.strong = 'strong';
exports.style = 'style';
exports.sub = 'sub';
exports.summary = 'summary';
exports.sup = 'sup';
exports.svg = 'svg';
exports.table = 'table';
exports.tbody = 'tbody';
exports.td = 'td';
exports.template = 'template';
exports.textarea = 'textarea';
exports.tfoot = 'tfoot';
exports.th = 'th';
exports.thead = 'thead';
exports.time = 'time';
exports.title = 'title';
exports.tr = 'tr';
exports.tt = 'tt';
exports.u = 'u';
exports.ul = 'ul';
exports._var = 'var';
exports.video = 'video';
exports.doctype = '!DOCTYPE';
exports.area = 'area';
exports.base = 'base';
exports.br = 'br';
exports.col = 'col';
exports.command = 'command';
exports.embed = 'embed';
exports.hr = 'hr';
exports.img = 'img';
exports.input = 'input';
exports.keygen = 'keygen';
exports.link = 'link';
exports.meta = 'meta';
exports.param = 'param';
exports.source = 'source';
exports.track = 'track';
exports.wbr = 'wbr';

},{}],29:[function(require,module,exports){
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
exports.config = exports.helper = exports.singleTag = exports.doubleTag = void 0;
exports.doubleTag = __importStar(require("./double-tag"));
exports.singleTag = __importStar(require("./single-tag"));
exports.helper = __importStar(require("./helper"));
var singleTag = __importStar(require("./single-tag"));
var doubleTag = __importStar(require("./double-tag"));
exports.config = __assign(__assign({}, singleTag.config), doubleTag.config);

},{"./double-tag":27,"./helper":28,"./single-tag":30}],30:[function(require,module,exports){
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
exports.config = exports.literals = void 0;
var c = __importStar(require("../config"));
exports.literals = [
    '!DOCTYPE',
    'area',
    'base',
    'br',
    'col',
    'command',
    'embed',
    'hr',
    'img',
    'input',
    'keygen',
    'link',
    'meta',
    'param',
    'source',
    'track',
    'wbr',
];
var reducer = function (acc, el) {
    var _a;
    var a = function (params, content) {
        return "<".concat(el).concat(c.record.render(params), ">");
    };
    return __assign(__assign({}, acc), (_a = {}, _a[el] = a, _a));
};
exports.config = exports.literals.reduce(reducer, {});

},{"../config":25}],31:[function(require,module,exports){
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
exports.typecheck = exports.render = exports.html = exports.config = void 0;
exports.config = __importStar(require("./config"));
exports.html = __importStar(require("./html"));
var render = function (t, conf, deep) {
    if (deep === void 0) { deep = 0; }
    if (typeof t === 'string') {
        return t;
    }
    var childs = t.filter(function (v, i) { return i > 1; });
    var content = childs.map(function (tag) { return "\n" + ('  '.repeat(deep + 1))
        + (0, exports.render)(tag, conf, deep + 1); })
        .join("");
    return conf[t[0]]((t.length > 1 ? t[1] : {}), content);
};
exports.render = render;
var typecheck = function (t, renderFuncs) { return t; };
exports.typecheck = typecheck;

},{"./config":25,"./html":29}]},{},[1]);
