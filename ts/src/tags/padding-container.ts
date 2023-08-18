import * as t from "uralsjs-templator"

export const literal = 'padding-container'

export const renderer: t.dsl.abstracts.render.T<typeof literal> = {
    'padding-container': (params, content) => {
        const cls = params.class 
            ? ('padding-container ' + params.class) 
            : 'padding-container'
        const paramsText = t.dsl
            .abstracts
            .record
            .render({...{class: cls}, ...params})
        return `<div ${paramsText}>${content}</div>`
    }
}