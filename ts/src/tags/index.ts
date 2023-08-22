export * as gridGap from "./grid-gap"
export * as overlayerGallery from "./overlayer-gallery"
export * as whitePanel from "./white-panel"
export * as screenPhoto from "./screen-photo"
export * as screenColor from "./screen-color"
export * as paddingContainer from "./padding-container"
export * as veryWhitePanel from "./very-white-panel"
export * as btnInputs from "./btn-inputs"
export * as checkInputs from './check-inputs'
export * as formControlInputs from "./form-control-inputs"
export * as btns from "./btns"
export * as navTopPanel from "./nav-top-panel"
export * as navTopSpace from "./nav-top-space"
export * as navTopItem from "./nav-top-item"
export * as helper from "./helper"
export * as ionIcon from "./ion-icon"

import * as t from "uralsjs-templator"

import * as gridGap from "./grid-gap"
import * as overlayerGallery from "./overlayer-gallery"
import * as whitePanel from "./white-panel"
import * as screenPhoto from "./screen-photo"
import * as screenColor from "./screen-color"
import * as paddingContainer from "./padding-container"
import * as veryWhitePanel from "./very-white-panel"
import * as btnInputs from "./btn-inputs"
import * as checkInputs from './check-inputs'
import * as formControlInputs from "./form-control-inputs"
import * as btns from "./btns"
import * as navTopPanel from "./nav-top-panel"
import * as navTopSpace from "./nav-top-space"
import * as navTopItem from "./nav-top-item"
import * as ionIcon from "./ion-icon"
import { type } from "os"

export const renderer = {
    ...t.html.config,
    ...gridGap.renderer,
    ...overlayerGallery.renderer,
    ...whitePanel.renderer,
    ...veryWhitePanel.renderer,
    ...screenColor.renderer,
    ...screenPhoto.renderer,
    ...paddingContainer.renderer,
    ...btnInputs.renderer,
    ...checkInputs.renderer,
    ...formControlInputs.renderer,
    ...btns.renderer,
    ...navTopPanel.renderer,
    ...navTopSpace.renderer,
    ...navTopItem.renderer,
    ...ionIcon.renderer,
} as const

export type T = keyof typeof renderer