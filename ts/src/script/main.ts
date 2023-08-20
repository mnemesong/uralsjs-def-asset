declare const axiosBrowser: () => any
declare const sendDataAjax: (
    axios: any, 
    formData: any, 
    params: {action: string, method: string},
    eventHandlers: any
) => void

function addOverLayer(id: string|null = null) {
    let overLayer = document.createElement("div");
    if(id) overLayer.id = id;
    overLayer.innerHTML = '<div onclick="this.closest(\'.overlayer\').remove()"' 
        + ' class="overlayer-bg">'
        + '<a href="#" style="color:#999" onmouseover="this.style.color=\'#ccc\'" ' 
        + 'onmouseleave="this.style.color=\'#999\'">'
        + '</a></div>'
    overLayer.classList.add('overlayer');
    document.body.after(overLayer);
    return overLayer;
}

function makeForm(html: string, id = '', header = '')
{
    let newOverLayer = addOverLayer(id);
    newOverLayer.innerHTML = newOverLayer.innerHTML + '<div class="very-white-panel ' 
        + 'content-container height-min p-4 absolute-centralized">'
        + '<div class="popup-content">'
        + '<h3 class="popup-header p-0 m-0">' + header + '</h3>'
        + '<ion-icon name="close-outline" class="w-100 h-100 color-hov-red clickable" '
            + 'style="z-index: 1200;" ' 
            + 'onclick="this.closest(\'.overlayer\').remove()"></ion-icon>'
        + '<div class="popup-html">' + html + '</div>'
        + '</div></div>';
    let lastChild = newOverLayer.lastElementChild;
    if(!(lastChild instanceof HTMLElement)) {
        throw new Error("Last child is not HTMLElement")
    }
    if(lastChild.offsetHeight > newOverLayer.offsetHeight) {
        lastChild.style.marginTop = '50px';
        lastChild.style.marginBottom = '50px';
    }
    Array.from(newOverLayer.getElementsByTagName('script')).forEach((scriptBlock) => {
        eval(scriptBlock.innerHTML);
    })
}

function makePopupGallery(contentHtmlsArray: string[], id = '', index = 0)
{
    contentHtmlsArray = Array.isArray(contentHtmlsArray) ? contentHtmlsArray : [contentHtmlsArray];
    const newOverLayer = addOverLayer(id);
    const contentsHtml = contentHtmlsArray.map((el, i) => {
        return '<div class="content-container gallery-content-container ' 
            + 'absolute-centralized" style="display: none" data-id="' + i + '">'
            + el + '</div>';
    });
    const galleryHtml = '<div class="gallery-container" data-show="' 
        + index.toString() + '"><div class="w-100 h-100" ' 
        + 'onclick="this.closest(\'.overlayer\').remove()">&nbsp;</div>'
        + ((contentHtmlsArray.length > 1)
            ? ('<div class="gallery-elem gallery-left" onclick="switchGalleryContentLeft(this)">'
                + '<ion-icon name="chevron-back-outline"></ion-icon></div>'
                + '<div class="gallery-elem gallery-right" onclick="switchGalleryContentRight(this)">'
                + '<ion-icon name="chevron-forward-outline"></ion-icon></div>')
            : '')
        + '<div class="gallery-elem gallery-close" onclick="this.closest(\'.overlayer\').remove()">'
        + '<ion-icon name="close-outline"></ion-icon></div>'
        + contentsHtml.join('')
        + '</div>'
    newOverLayer.innerHTML = newOverLayer.innerHTML + galleryHtml;
    switchGalleryContent(newOverLayer.querySelector('.gallery-container'));
    Array.from(newOverLayer.getElementsByTagName('script')).forEach((scriptBlock) => {
        eval(scriptBlock.innerHTML);
    });
}

function switchGalleryContentRight(handler: HTMLElement)
{
    const galleryContainer = handler.closest('.gallery-container');
    let targetShowId = parseInt(galleryContainer.getAttribute('data-show')) + 1;
    const galleryContents = Array.from(
        galleryContainer.getElementsByClassName('content-container'));
    const maxGalleryId = galleryContents
        .map(el => parseInt(el.getAttribute('data-id')))
        .reduce((prev, cur) => Math.max(prev, cur));
    if(targetShowId > maxGalleryId) {
        targetShowId = 0;
    }
    galleryContainer.setAttribute('data-show', targetShowId.toString());
    if(!(galleryContainer instanceof HTMLElement)) {
        throw new Error("gelleryContainer is not HTMLElement")
    }
    switchGalleryContent(galleryContainer);
}

function switchGalleryContentLeft(handler: HTMLElement)
{
    const galleryContainer = handler.closest('.gallery-container');
    let targetShowId = parseInt(galleryContainer.getAttribute('data-show')) - 1;
    const galleryContents = Array.from(
        galleryContainer.getElementsByClassName('content-container'));
    const maxGalleryId = galleryContents
        .map(el => parseInt(el.getAttribute('data-id')))
        .reduce((prev, cur) => Math.max(prev, cur));
    if(targetShowId < 0) {
        targetShowId = maxGalleryId;
    }
    galleryContainer.setAttribute('data-show', targetShowId.toString());
    if(!(galleryContainer instanceof HTMLElement)) {
        throw new Error("gelleryContainer is not HTMLElement")
    }
    switchGalleryContent(galleryContainer);
}

function switchGalleryContent(galleryContainer: HTMLElement)
{
    const shownId = galleryContainer.getAttribute('data-show');
    let galleryContents = Array
        .from(galleryContainer.getElementsByClassName('content-container'))
        .map( el => {
            if(!(el instanceof HTMLElement)) 
                throw new Error("galleryElement is not HTMLElement")
            return el
        });
    galleryContents.forEach( el =>
        el.style.display = (
            el.getAttribute('data-id') === shownId ? 'block' : 'none' )
    );
}

function ssrOverLayerForm(url, data = {}, id = '') {
    const formData = new FormData();
    Object.keys(data).forEach(k => formData.append(k, data[k]));
    sendDataAjax(
        axiosBrowser(), 
        formData, 
        {action: url, method: 'get'}, {
            html: (res) => makeForm(res.html, id, res.header ? res.header : ''),
            error: (res) => {
                console.log("Building overlayer form error:", res.error);
                createAlert(res.error, 'danger');
            }
        }
    );
}

function ssrPopupGallery(url, data = {}, alerter = null, id = '') {
    const formData = new FormData();
    Object.keys(data).forEach(k => formData.append(k, data[k]));
    sendDataAjax(
        axiosBrowser(),
        formData, 
        {action: url, method: 'get'}, 
        {
            html: (res) => makePopupGallery(
                res.html, 
                id, 
                res.index ? parseInt(res.index) : 0
            ),
            htmls: (res) => makePopupGallery(
                res.htmls, 
                id, 
                res.index ? parseInt(res.index) : 0
            ),
            error: (res) => {
                console.log("Building overlayer form error:", res.error);
                if(alerter) alerter.createAlert(res.error, 'danger');
            }
        }
    );
}

function createAlert(text, style = 'danger')
{
    console.log("Alert " + style, text);
    let alertContainer = document.getElementById("alertContainer");
    if(!alertContainer) {
        const body = document.querySelector('body');
        const divEl = document.createElement('div');
        body.append(divEl);
        divEl.outerHTML = "<div class='alert-container' id='alertContainer'></div>";
    }
    setTimeout(() => {
        alertContainer = document.getElementById("alertContainer");
        let alertBlock = document.createElement('div');
        alertContainer.append(alertBlock);
        const id = Math.round(Math.random() * 1000);
        alertBlock.outerHTML = "<div class='alert-block alert-block-" 
            + style + "' id='alertCont_" + id.toString()
            + "' style='opacity: 0;'>" + text + "</div>";
        setTimeout(() => {
            alertBlock = document
                .getElementById("alertCont_" + id.toString()) as HTMLDivElement;
            alertBlock.style.opacity = '1';
        }, 50);
        setTimeout(() => {
            alertBlock = document
                .getElementById("alertCont_" + id.toString()) as HTMLDivElement;
            alertBlock.style.opacity = '0';
        }, 4400);
        setTimeout(() => {
            alertBlock = document
                .getElementById("alertCont_" + id.toString()) as HTMLDivElement;
            alertBlock.style.height = '0';
        }, 4800);
        setTimeout(() => {
            const alertBlock = document
                .getElementById("alertCont_" + id.toString());
            alertBlock.remove();
        }, 5000);
    }, 50);
}


function errorReaction(response)
{
    if(response.error) {
        createAlert(response.error);
    }
    if(response.details) {
        console.log(response.details);
    }
}

function onPressEnter(event, handler,  fn)
{
    if (event.key === "Enter") {
        event.preventDefault();
        fn(handler)
    }
}

function clickSubmitBtnInForm(handler)
{
    handler.closest('form').querySelector('.submit-button').click();
}