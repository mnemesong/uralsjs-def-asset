import * as t from "uralsjs-templator"

export const literal = 'padding-container'

export const renderer: t.config.T<typeof literal> = {
    'padding-container': (params, content) => {
        const cls = params.class 
            ? ('padding-container ' + params.class) 
            : 'padding-container'
        const paramsText = t
            .config
            .record
            .render({...{class: cls}, ...params})
        return `<div ${paramsText}>${content}</div>`
    }
}