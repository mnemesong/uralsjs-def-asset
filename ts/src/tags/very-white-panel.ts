import * as t from "uralsjs-templator"

export const tag = 'very-white-panel'

export const renderer: t.config.T<typeof tag> = {
    'very-white-panel': (params, content) => {
        const cls = params.class 
            ? (params.class + ' very-white-panel p-3') 
            : 'very-white-panel p-3'
        const paramsText = t
            .config
            .record
            .render({...params, ...{class: cls}})
        return `<div ${paramsText}>${content}</div>`
    }
}