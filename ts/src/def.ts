import * as t from "uralsjs-templator"
import * as tags from "./tags"

export const config = {
    ...t.html.config,
    ...tags.gridGap.renderer,
    ...tags.overlayerGallery.renderer,
    ...tags.whitePanel.renderer,
    ...tags.veryWhitePanel.renderer,
    ...tags.screenColor.renderer,
    ...tags.screenPhoto.renderer,
    ...tags.paddingContainer.renderer,
    ...tags.btnInputs.renderer,
    ...tags.checkInputs.renderer,
    ...tags.formControlInputs.renderer,
    ...tags.btns.renderer,
    ...tags.navTopPanel.renderer,
    ...tags.navTopSpace.renderer,
    ...tags.navTopItem.renderer,
    ...tags.ionIcon.renderer,
}