import * as t from "uralsjs-templator"

export const literal = 'ion-icon'

export const renderer: t.config.T<typeof literal> = {
    'ion-icon': (params, content) => {
        return `<ion-icon ${t.config.record.render(params)}>${content}<ion-icon>`
    }
}