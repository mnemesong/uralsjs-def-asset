import * as t from "uralsjs-templator"

export const literal = 'screen-color'

export const renderer: t.config.T<typeof literal> = {
    'screen-color': (params, content) => {
        const cls = params.class 
            ? ('screen dark-screen ' + params.class) 
            : 'screen dark-screen'
        const paramsText = t
            .config
            .record
            .render({...params, ...{class: cls}})
        return `<div ${paramsText}>${content}</div>`
    }
}