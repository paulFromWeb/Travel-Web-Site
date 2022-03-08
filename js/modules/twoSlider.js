function twoSlider(mySlides, btnPrev, btnNext, wrapper, decorate) {
    // TWO SLIDER 
    const myNewSlider = function () {
        const slides = document.querySelectorAll(mySlides)
        activeMode();

        document.querySelector(btnNext).addEventListener('click', () => {
            slides.forEach(slide => {
                slide.classList.remove(decorate)
            })

            setTimeout(() => {
                const newElement = document.querySelector(wrapper).firstElementChild
                document.querySelector(wrapper).firstElementChild.remove();
                document.querySelector(wrapper).appendChild(newElement);
                activeMode()
            }, 400)


        })
        document.querySelector(btnPrev).addEventListener('click', () => {
            slides.forEach(slide => {
                slide.classList.remove(decorate)
            })
            setTimeout(() => {
                const newElement = document.querySelector(wrapper).lastElementChild
                document.querySelector(wrapper).lastElementChild.remove();
                document.querySelector(wrapper).prepend(newElement);
                activeMode2();
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