function oneSlider(img, btnPrev, btnNext, wrapper, decorate, decorateBtn, decorateBtn2) {
    // FIRST SLIDER 

    const getDataSlider = async function getData() {
        const prev = document.querySelector(btnPrev)
        const next = document.querySelector(btnNext)
        const swImg = document.querySelector(img);

        let index = 0;
        const res = await fetch('database.json')
        const data = await res.json()
        console.log(data.imgSlider[1].img)
        function showSlide() {
            function addAnimate(index) {
                setTimeout(() => {
                    document.querySelector(wrapper).classList.add(decorate);
                    swImg.src = `${data.imgSlider[index].img}`
                    swImg.alt = `${data.imgSlider[index].altimg}`
                    document.querySelector('.firstText').textContent = `${data.imgSlider[index].title}`
                }, 500)
            }
            const imgArr = ['slide1', 'slide2', 'slide3']

            next.addEventListener('click', (e) => {
                console.log(e.target)
                e.target.classList.add(decorateBtn);
                document.querySelector(wrapper).classList.remove(decorate);
                index = index + 1;
                if (index === 3) {
                    index = 0;
                }
                setTimeout(() => {
                    e.target.classList.remove(decorateBtn);
                }, 500)
                addAnimate(index);

            })

            prev.addEventListener('click', (e) => {
                e.target.classList.add(decorateBtn2);
                document.querySelector(wrapper).classList.remove(decorate);
                if (index !== 0) {
                    index = index - 1;

                    addAnimate(index);
                } else if (index === 0) {
                    index = 2;
                    addAnimate(index);
                }
                setTimeout(() => {
                    e.target.classList.remove(decorateBtn2);
                }, 500)

            }
            )
        }
        showSlide();
    }
    getDataSlider();
}
export default oneSlider;