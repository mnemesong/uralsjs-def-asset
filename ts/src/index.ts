export * as tags from "./tags"
export * as css from "./css"
export * as def from "./def"
export * as htmlTemplate from "./html-template"
export * as dsl from "uralsjs-templator"
export * as script from "./script/index"

export const printIonIconScriptTag = () => `
<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>`