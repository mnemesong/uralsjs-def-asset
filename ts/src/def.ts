import * as templator from "uralsjs-templator"
import * as tags from "./tags"

export const renderer = {
    ...templator.def.renderer,
    ...tags.gridGap.renderer,
    ...tags.overlayerGallery.renderer,
    ...tags.whitePanel.renderer,
    ...tags.veryWhitePanel.renderer,
    ...tags.screenColor.renderer,
    ...tags.screenPhoto.renderer,
    ...tags.paddingContainer.renderer,
}