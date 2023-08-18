import * as t from "uralsjs-templator"

export const tag = 'white-panel'

export const renderer: t.dsl.abstracts.render.T<typeof tag> = {
    'white-panel': (params, content) => {
        const cls = params.class 
            ? (params.class + ' white-panel p-3') 
            : 'white-panel p-3'
        const paramsText = t.dsl
            .abstracts
            .record
            .render({...params, ...{class: cls}})
        return `<div ${paramsText}>${content}</div>`
    }
}