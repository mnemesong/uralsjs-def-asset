import * as t from "uralsjs-templator"
import * as def from "../def"
import * as tags from "../tags"

export const printDsl = <M extends string>(content: t.T<M>): t.T<tags.T | M> => [
    'very-white-panel',
    {
        style: "position: absolute; top: 100px; left: 0; right: 0; " 
            + "width: 400px; height: min-content; margin: auto;",
        class: "p-3"
    },
    content
]