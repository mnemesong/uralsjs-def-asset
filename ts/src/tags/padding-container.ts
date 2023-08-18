import * as t from "uralsjs-templator"

export const literal = 'padding-container'

export const renderer: t.dsl.abstracts.render.T<typeof literal> = {
    'padding-container': (params, content) => {
        const cls = params.class 
            ? (params.class + ' padding-container') 
            : 'padding-container'
        const paramsText = t.dsl
            .abstracts
            .record
            .render({...params, ...{class: cls}})
        return `<div ${paramsText}>${content}</div>`
    }
}