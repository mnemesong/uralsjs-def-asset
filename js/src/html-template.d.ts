import * as htmlDslDef from "../src";
import * as htmlDsl from "uralsjs-templator";
export type T = {
    lang: string;
    title: string;
    faviconUrl: string;
    cssFileUrls: string[];
    jsFileUrls: string[];
    jsScripts: string[];
    bodyParams: htmlDsl.config.record.T;
};
export declare const renderHtml: (t: T, content: string) => string;
