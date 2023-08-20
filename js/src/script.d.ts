declare const axiosBrowser: () => any;
declare const sendDataAjax: (axios: any, formData: any, params: {
    action: string;
    method: string;
}, eventHandlers: any) => void;
declare function addOverLayer(id?: string | null): HTMLDivElement;
declare function makeForm(html: string, id?: string, header?: string): void;
declare function makePopupGallery(contentHtmlsArray: string[], id?: string, index?: number): void;
declare function switchGalleryContentRight(handler: HTMLElement): void;
declare function switchGalleryContentLeft(handler: HTMLElement): void;
declare function switchGalleryContent(galleryContainer: HTMLElement): void;
declare function ssrOverLayerForm(url: any, data?: {}, alerter?: any, id?: string): void;
declare function ssrPopupGallery(url: any, data?: {}, alerter?: any, id?: string): void;
declare function createAlert(text: any, style?: string): void;
declare function errorReaction(response: any): void;
declare function onPressEnter(event: any, handler: any, fn: any): void;
declare function clickSubmitBtnInForm(handler: any): void;
