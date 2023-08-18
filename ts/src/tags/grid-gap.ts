import * as t from "uralsjs-templator"

export const literals = [
    'grid-gap-0', 
    'grid-gap-5', 
    'grid-gap-10', 
    'grid-gap-20',
    'grid-gap-30' 
] as const

export const renderer = {} as t.config.T<typeof literals[number]>
literals.forEach(l => {
    renderer[l] = (params, content) => {
        const cls = params.class 
            ? ('d-grid ' + l + ' ' + params.class) 
            : ('d-grid ' + l)
        const paramsText = t
            .config
            .record
            .render({...params, ...{class: cls}})
        return `<div ${paramsText}>${content}</div>`
    }
})