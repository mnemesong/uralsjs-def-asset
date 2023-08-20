function addOverLayer(id) {
    if (id === void 0) { id = null; }
    var overLayer = document.createElement("div");
    if (id)
        overLayer.id = id;
    overLayer.innerHTML = '<div onclick="this.closest(\'.overlayer\').remove()"'
        + ' class="overlayer-bg">'
        + '<a href="#" style="color:#999" onmouseover="this.style.color=\'#ccc\'" '
        + 'onmouseleave="this.style.color=\'#999\'">'
        + '</a></div>';
    overLayer.classList.add('overlayer');
    document.body.after(overLayer);
    return overLayer;
}
function makeForm(html, id, header) {
    if (id === void 0) { id = ''; }
    if (header === void 0) { header = ''; }
    var newOverLayer = addOverLayer(id);
    newOverLayer.innerHTML = newOverLayer.innerHTML + '<div class="very-white-panel '
        + 'content-container height-min p-4 absolute-centralized">'
        + '<div class="popup-content">'
        + '<h3 class="popup-header p-0 m-0">' + header + '</h3>'
        + '<ion-icon name="close-outline" class="w-100 h-100 color-hov-red clickable" '
        + 'style="z-index: 1200;" '
        + 'onclick="this.closest(\'.overlayer\').remove()"></ion-icon>'
        + '<div class="popup-html">' + html + '</div>'
        + '</div></div>';
    var lastChild = newOverLayer.lastElementChild;
    if (!(lastChild instanceof HTMLElement)) {
        throw new Error("Last child is not HTMLElement");
    }
    if (lastChild.offsetHeight > newOverLayer.offsetHeight) {
        lastChild.style.marginTop = '50px';
        lastChild.style.marginBottom = '50px';
    }
    Array.from(newOverLayer.getElementsByTagName('script')).forEach(function (scriptBlock) {
        eval(scriptBlock.innerHTML);
    });
}
function makePopupGallery(contentHtmlsArray, id, index) {
    if (id === void 0) { id = ''; }
    if (index === void 0) { index = 0; }
    contentHtmlsArray = Array.isArray(contentHtmlsArray) ? contentHtmlsArray : [contentHtmlsArray];
    var newOverLayer = addOverLayer(id);
    var contentsHtml = contentHtmlsArray.map(function (el, i) {
        return '<div class="content-container gallery-content-container '
            + 'absolute-centralized" style="display: none" data-id="' + i + '">'
            + el + '</div>';
    });
    var galleryHtml = '<div class="gallery-container" data-show="'
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
        + '</div>';
    newOverLayer.innerHTML = newOverLayer.innerHTML + galleryHtml;
    switchGalleryContent(newOverLayer.querySelector('.gallery-container'));
    Array.from(newOverLayer.getElementsByTagName('script')).forEach(function (scriptBlock) {
        eval(scriptBlock.innerHTML);
    });
}
function switchGalleryContentRight(handler) {
    var galleryContainer = handler.closest('.gallery-container');
    var targetShowId = parseInt(galleryContainer.getAttribute('data-show')) + 1;
    var galleryContents = Array.from(galleryContainer.getElementsByClassName('content-container'));
    var maxGalleryId = galleryContents
        .map(function (el) { return parseInt(el.getAttribute('data-id')); })
        .reduce(function (prev, cur) { return Math.max(prev, cur); });
    if (targetShowId > maxGalleryId) {
        targetShowId = 0;
    }
    galleryContainer.setAttribute('data-show', targetShowId.toString());
    if (!(galleryContainer instanceof HTMLElement)) {
        throw new Error("gelleryContainer is not HTMLElement");
    }
    switchGalleryContent(galleryContainer);
}
function switchGalleryContentLeft(handler) {
    var galleryContainer = handler.closest('.gallery-container');
    var targetShowId = parseInt(galleryContainer.getAttribute('data-show')) - 1;
    var galleryContents = Array.from(galleryContainer.getElementsByClassName('content-container'));
    var maxGalleryId = galleryContents
        .map(function (el) { return parseInt(el.getAttribute('data-id')); })
        .reduce(function (prev, cur) { return Math.max(prev, cur); });
    if (targetShowId < 0) {
        targetShowId = maxGalleryId;
    }
    galleryContainer.setAttribute('data-show', targetShowId.toString());
    if (!(galleryContainer instanceof HTMLElement)) {
        throw new Error("gelleryContainer is not HTMLElement");
    }
    switchGalleryContent(galleryContainer);
}
function switchGalleryContent(galleryContainer) {
    var shownId = galleryContainer.getAttribute('data-show');
    var galleryContents = Array
        .from(galleryContainer.getElementsByClassName('content-container'))
        .map(function (el) {
        if (!(el instanceof HTMLElement))
            throw new Error("galleryElement is not HTMLElement");
        return el;
    });
    galleryContents.forEach(function (el) {
        return el.style.display = (el.getAttribute('data-id') === shownId ? 'block' : 'none');
    });
}
function ssrOverLayerForm(url, data, alerter, id) {
    if (data === void 0) { data = {}; }
    if (alerter === void 0) { alerter = null; }
    if (id === void 0) { id = ''; }
    var formData = new FormData();
    Object.keys(data).forEach(function (k) { return formData.append(k, data[k]); });
    sendDataAjax(axiosBrowser(), formData, { action: url, method: 'get' }, {
        html: function (res) { return makeForm(res.html, id, res.header ? res.header : ''); },
        error: function (res) {
            console.log("Building overlayer form error:", res.error);
            if (alerter)
                alerter.createAlert(res.error, 'danger');
        }
    });
}
function ssrPopupGallery(url, data, alerter, id) {
    if (data === void 0) { data = {}; }
    if (alerter === void 0) { alerter = null; }
    if (id === void 0) { id = ''; }
    var formData = new FormData();
    Object.keys(data).forEach(function (k) { return formData.append(k, data[k]); });
    sendDataAjax(axiosBrowser(), formData, { action: url, method: 'get' }, {
        html: function (res) { return makePopupGallery(res.html, id, res.index ? parseInt(res.index) : 0); },
        htmls: function (res) { return makePopupGallery(res.htmls, id, res.index ? parseInt(res.index) : 0); },
        error: function (res) {
            console.log("Building overlayer form error:", res.error);
            if (alerter)
                alerter.createAlert(res.error, 'danger');
        }
    });
}
function createAlert(text, style) {
    if (style === void 0) { style = 'danger'; }
    console.log("Alert " + style, text);
    var alertContainer = document.getElementById("alertContainer");
    if (!alertContainer) {
        var body = document.querySelector('body');
        var divEl = document.createElement('div');
        body.append(divEl);
        divEl.outerHTML = "<div class='alert-container' id='alertContainer'></div>";
    }
    setTimeout(function () {
        alertContainer = document.getElementById("alertContainer");
        var alertBlock = document.createElement('div');
        alertContainer.append(alertBlock);
        var id = Math.round(Math.random() * 1000);
        alertBlock.outerHTML = "<div class='alert-block alert-block-"
            + style + "' id='alertCont_" + id.toString()
            + "' style='opacity: 0;'>" + text + "</div>";
        setTimeout(function () {
            alertBlock = document
                .getElementById("alertCont_" + id.toString());
            alertBlock.style.opacity = '1';
        }, 50);
        setTimeout(function () {
            alertBlock = document
                .getElementById("alertCont_" + id.toString());
            alertBlock.style.opacity = '0';
        }, 4400);
        setTimeout(function () {
            alertBlock = document
                .getElementById("alertCont_" + id.toString());
            alertBlock.style.height = '0';
        }, 4800);
        setTimeout(function () {
            var alertBlock = document
                .getElementById("alertCont_" + id.toString());
            alertBlock.remove();
        }, 5000);
    }, 50);
}
function errorReaction(response) {
    if (response.error) {
        createAlert(response.error);
    }
    if (response.details) {
        console.log(response.details);
    }
}
function onPressEnter(event, handler, fn) {
    if (event.key === "Enter") {
        event.preventDefault();
        fn(handler);
    }
}
function clickSubmitBtnInForm(handler) {
    handler.closest('form').querySelector('.submit-button').click();
}
