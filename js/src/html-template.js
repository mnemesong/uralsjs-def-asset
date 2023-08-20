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
        .concat(t.jsScripts.map(function (script) { return ['script', {}, script]; }))
        .concat([t.advTags ? t.advTags : '']), htmlDslDef.tags.renderer);
};
exports.renderHtml = renderHtml;
