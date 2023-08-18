import * as t from "uralsjs-templator"

export const literals = [
    'button-input',
    'reset-input',
    'submit-input',
] as const

export const renderer = {} as t.dsl.abstracts.render.T<typeof literals[number]>
literals.forEach(l => {
    renderer[l] = (params, content) => {
        const type = l.split('-')[0]
        const cls = params.class 
            ? ('btn btn-primary ' + params.class) 
            : ('btn btn-primary')
        const paramsText = t.dsl
            .abstracts
            .record
            .render({...{type: type}, ...params, ...{class: cls}})
        return `<input ${paramsText}>`
    }
})