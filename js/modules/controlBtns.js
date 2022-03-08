function controlBtns(triggers, videoUrl, decorate) {
    // CONTROL BTNS 
    document.querySelectorAll(triggers).forEach(btn => {
        btn.onclick = () => {
            let src = btn.getAttribute('data-src');
            document.querySelector(videoUrl).src = src;

            document.querySelectorAll(triggers).forEach(buttons => {
                if (buttons.classList.contains(decorate)) {
                    buttons.classList.remove(decorate);
                }
            })
            btn.classList.add(decorate);
        }
    })
}
export default controlBtns; 