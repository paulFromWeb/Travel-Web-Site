function enableScroll(elem) {
    let pagePosition = parseInt(document.body.dataset.position, 10);
    document.body.style.top = 'auto';
    document.body.classList.remove('disable-scroll');
    window.scroll({ top: pagePosition, left: 0 });
    document.body.removeAttribute('data-position');
    document.querySelector('.mainMenu').style.display = '';
    elem.style.cssText = `
    background-color:rgba(0,0,0,0.999)!important;
`
}
function disableScroll(elem) {
    let pagePosition = window.scrollY;
    document.body.classList.add('disable-scroll');
    document.body.dataset.position = pagePosition;
    document.body.style.top = -pagePosition + 'px';
    elem.classList.add('show');
    elem.classList.remove('hide');
    document.querySelector('.mainMenu').style.display = 'none';
}
function placeControl(e, place) {
    if (JSON.parse(localStorage.getItem(e))) {
        document.querySelector('.block .btn4').style.cssText = `
    pointer-events: auto !important;
    cursor:pointer;
    `
    } else if (place.value === "") {

        console.log(place.textContent)
        document.querySelector('.block .btn4').style.cssText = `
    pointer-events: none !important;
    `
    }
    else {
        document.querySelector('.block .btn4').style.cssText = `
    pointer-events: auto !important;
    cursor:pointer;
    `
    }
}
const postData = async (url, data) => {
    let res = await fetch(url, {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: data,
    })
}

function deleteImg(elem) {
    setTimeout(() => {
        const deleteImg = document.querySelector('.contBackImg')
        deleteImg.remove();
        elem.classList.remove('show');
        elem.classList.add('hide');
        document.querySelectorAll('.inputData input').forEach(input => {
            input.value = ''
        })
    }, 1400)
}

export { enableScroll };
export { placeControl };
export { disableScroll };
export { postData };
export { deleteImg }