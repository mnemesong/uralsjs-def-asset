import * as t from "uralsjs-templator"

export const tag = 'white-panel'

export const renderer: t.config.T<typeof tag> = {
    'white-panel': (params, content) => {
        const cls = params.class 
            ? (params.class + ' white-panel p-3') 
            : 'white-panel p-3'
        const paramsText = t
            .config
            .record
            .render({...params, ...{class: cls}})
        return `<div ${paramsText}>${content}</div>`
    }
}