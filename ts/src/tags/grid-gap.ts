import * as t from "uralsjs-templator"

export const literals = [
    'grid-gap-0', 
    'grid-gap-5', 
    'grid-gap-10', 
    'grid-gap-20',
    'grid-gap-30' 
] as const

export const renderer = {} as t.dsl.abstracts.render.T<typeof literals[number]>
literals.forEach(l => {
    renderer[l] = (params, content) => {
        const cls = params.class 
            ? (params.class + ' d-grid ' + l) 
            : ('d-grid ' + l)
        const paramsText = t.dsl
            .abstracts
            .record
            .render({...params, ...{class: cls}})
        return `<div ${paramsText}>${content}</div>`
    }
})