import * as t from "uralsjs-templator";
import * as tag from "../tags";
import { dsl } from "..";
export declare const dataAttrs: {
    dataCloseId: string;
};
export declare const printDsl: <M extends string>(id: string, content: t.T<M>) => t.T<"object" | "big" | "link" | "small" | "strike" | "sub" | "sup" | "map" | "input" | "code" | "data" | "progress" | "track" | "source" | "button" | "address" | "center" | "font" | "a" | "abbr" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "blockquote" | "body" | "br" | "canvas" | "caption" | "cite" | "col" | "colgroup" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "footer" | "form" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hr" | "html" | "i" | "iframe" | "img" | "ins" | "kbd" | "label" | "li" | "main" | "mark" | "meta" | "meter" | "nav" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "picture" | "pre" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "script" | "section" | "select" | "span" | "strong" | "style" | "summary" | "table" | "tbody" | "td" | "template" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "u" | "ul" | "var" | "video" | "wbr" | "acronym" | "applet" | "basefont" | "dir" | "frame" | "frameset" | "keygen" | "noframes" | "param" | "tt" | "svg" | "!DOCTYPE" | "command" | "grid-gap-0" | "grid-gap-5" | "grid-gap-10" | "grid-gap-20" | "grid-gap-30" | "overlayer-gallery" | "white-panel" | "screen-photo" | "screen-color" | "padding-container" | "very-white-panel" | "button-input" | "reset-input" | "submit-input" | "checkbox-input" | "hidden-input" | "radio-input" | "text-input" | "number-input" | "date-input" | "email-input" | "file-input" | "image-input" | "month-input" | "password-input" | "randge-input" | "search-input" | "tel-input" | "time-input" | "url-input" | "week-input" | "btn-success" | "btn-danger" | "btn-warning" | "btn-info" | "btn-white" | "btn-dark" | "btn-primary" | "btn-secondary" | "nav-top-panel" | "nav-top-space" | "nav-top-item" | "ion-icon" | M>;
export declare const setOnclickCloseAction: (id: string, action: (e: MouseEvent) => void) => void;