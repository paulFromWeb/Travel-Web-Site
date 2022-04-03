function twoSlider(mySlides, btnPrev, btnNext, wrapper, decorate, decorateBtn, decorateBtn2) {
    // TWO SLIDER 
    const myNewSlider = function () {
        const slides = document.querySelectorAll(mySlides)
        activeMode();

        document.querySelector(btnNext).addEventListener('click', (e) => {
            e.target.classList.add(decorateBtn);
            slides.forEach(slide => {
                slide.classList.remove(decorate)
            })

            setTimeout(() => {
                const newElement = document.querySelector(wrapper).firstElementChild
                document.querySelector(wrapper).firstElementChild.remove();
                document.querySelector(wrapper).appendChild(newElement);
                activeMode()
                e.target.classList.remove(decorateBtn);
            }, 400)


        })
        document.querySelector(btnPrev).addEventListener('click', (e) => {
            e.target.classList.add(decorateBtn2);
            slides.forEach(slide => {
                slide.classList.remove(decorate)
            })
            setTimeout(() => {
                const newElement = document.querySelector(wrapper).lastElementChild
                document.querySelector(wrapper).lastElementChild.remove();
                document.querySelector(wrapper).prepend(newElement);
                activeMode2();
                e.target.classList.remove(decorateBtn2);
            }, 400)
        })


    }
    myNewSlider();

    function activeMode() {
        const newElement = document.querySelector(wrapper).firstElementChild;
        const centerElement = newElement.nextElementSibling;
        centerElement.classList.add(decorate);


    }
    function activeMode2() {
        const newElement = document.querySelector(wrapper).lastElementChild;
        const centerElement = newElement.previousElementSibling;
        centerElement.classList.add(decorate);
    }
}
export default twoSlider;