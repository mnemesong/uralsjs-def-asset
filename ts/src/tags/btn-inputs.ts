import * as t from "uralsjs-templator"

export const literals = [
    'button-input',
    'reset-input',
    'submit-input',
] as const

export const renderer = {} as t.config.T<typeof literals[number]>
literals.forEach(l => {
    renderer[l] = (params, content) => {
        const type = l.split('-')[0]

        const cls = params.class 
            ? (((typeof params.class === 'string' 
                ? params.class 
                : params.class.toString()
                ).includes('btn-')
                    ? ('btn ' + params.class)
                    : ('btn btn-primary ' + params.class))) 
            : ('btn btn-primary')
        const paramsText = t
            .config
            .record
            .render({...{type: type}, ...params, ...{class: cls}})
        return `<input ${paramsText}>`
    }
})