import * as htmlDslDef from "../src"
import * as htmlDsl from "uralsjs-templator"

export type T = {
    lang: string,
    title: string,
    faviconUrl: string,
    cssFileUrls: string[],
    jsFileUrls: string[],
    jsScripts: string[],
    bodyParams: htmlDsl.config.record.T
}

export const printIonIconScriptTag = () => `
<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>`

export const renderHtml = (t: T, content: string): string => {
    return '<!DOCTYPE html>\n' + htmlDsl.render([
        'html',
        {lang: t.lang, class: "h-100"},
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
                {charset: 'UTF-8'}
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
                {type: 'image/x-icon', href: t.faviconUrl, rel: 'icon'},
            ],
        ].concat(t.cssFileUrls.map( url => [
            'link', {rel: 'stylesheet', href: url}
        ])) as htmlDsl.T<
            typeof htmlDsl.html.doubleTag.literals[number] 
            | typeof htmlDsl.html.singleTag.literals[number]
        >,
        ['body', t.bodyParams, content, printIonIconScriptTag(),]
    ]
        .concat(t.jsFileUrls.map(url => ['script', {src: url}]))
        .concat(t.jsScripts.map(script => ['script', {}, script])) as htmlDsl.T<
            typeof htmlDsl.html.doubleTag.literals[number] 
    >, htmlDslDef.tags.renderer)
}