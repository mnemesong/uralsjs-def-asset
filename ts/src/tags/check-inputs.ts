import * as t from "uralsjs-templator"

export const literals = [
    'checkbox-input',
    'hidden-input',
    'radio-input',
] as const

export const renderer = {} as t.config.T<typeof literals[number]>
literals.forEach(l => {
    renderer[l] = (params, content) => {
        const type = l.split('-')[0]
        const stl = params.style 
            ? ('width: 22px; height:22px; ' + params.style) 
            : ('width: 22px; height:22px;')
        const paramsText = t
            .config
            .record
            .render({...{type: type}, ...params, ...{style: stl}})
        return `<input ${paramsText}>`
    }
})