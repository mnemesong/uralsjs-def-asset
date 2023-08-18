import * as t from "uralsjs-templator"

export const literals = [
    'text-input', 
    'number-input', 
    'date-input',
    'email-input',
    'file-input',
    'image-input',
    'month-input',
    'password-input',
    'randge-input',
    'search-input',
    'tel-input',
    'time-input',
    'url-input',
    'week-input',
] as const

export const renderer = {} as t.dsl.abstracts.render.T<typeof literals[number]>
literals.forEach(l => {
    renderer[l] = (params, content) => {
        const type = l.split('-')[0]
        const cls = params.class 
            ? ('form-control ' + params.class) 
            : ('form-control')
        const paramsText = t.dsl
            .abstracts
            .record
            .render({...{type: type}, ...params, ...{class: cls}})
        return `<input ${paramsText}>`
    }
})