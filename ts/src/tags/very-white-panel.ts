import * as t from "uralsjs-templator"

export const tag = 'very-white-panel'

export const renderer: t.dsl.abstracts.render.T<typeof tag> = {
    'very-white-panel': (params, content) => {
        const cls = params.class 
            ? (params.class + ' very-white-panel p-3') 
            : 'very-white-panel p-3'
        const paramsText = t.dsl
            .abstracts
            .record
            .render({...params, ...{class: cls}})
        return `<div ${paramsText}>${content}</div>`
    }
}