import * as t from "uralsjs-templator"

export const literals = [
    'btn-success',
    'btn-danger',
    'btn-warning',
    'btn-info',
    'btn-white',
    'btn-dark',
    'btn-primary',
    'btn-secondary',
] as const

export const renderer = {} as t.dsl.abstracts.render.T<typeof literals[number]>
literals.forEach(l => {
    renderer[l] = (params, content) => {
        const type = l.split('-')[1]

        const cls = params.class 
            ? ('btn btn-' + type + ' ' + params.class)
            : ('btn btn-' + type)
        const paramsText = t.dsl
            .abstracts
            .record
            .render({...{type: 'button'}, ...params, ...{class: cls}})
        return `<button ${paramsText}>${content}</button>`
    }
})