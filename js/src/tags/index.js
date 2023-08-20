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
exports.renderer = exports.ionIcon = exports.helper = exports.navTopItem = exports.navTopSpace = exports.navTopPanel = exports.btns = exports.formControlInputs = exports.checkInputs = exports.btnInputs = exports.veryWhitePanel = exports.paddingContainer = exports.screenColor = exports.screenPhoto = exports.whitePanel = exports.overlayerGallery = exports.gridGap = void 0;
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
exports.ionIcon = __importStar(require("./ion-icon"));
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
var ionIcon = __importStar(require("./ion-icon"));
exports.renderer = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, t.html.config), gridGap.renderer), overlayerGallery.renderer), whitePanel.renderer), veryWhitePanel.renderer), screenColor.renderer), screenPhoto.renderer), paddingContainer.renderer), btnInputs.renderer), checkInputs.renderer), formControlInputs.renderer), btns.renderer), navTopPanel.renderer), navTopSpace.renderer), navTopItem.renderer), ionIcon.renderer);
