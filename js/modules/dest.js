function dest() {
    // Creating Destination with DataBase 

    const infoAboutCity = document.querySelector('.infoAboutCity');
    infoAboutCity.innerHTML += `
    <button class="priceButton">I want to go there!</button>
    `
    const getBaseData = async function getData() {
        const res = await fetch('database.json')
        const data = await res.json()
        console.log(data)
        let index = 0;
        data.destination.forEach((item, i, array) => {
            const myP = document.querySelector('.infoAboutCity_p');
            myP.textContent = array[0].descr
            index++;
            const myArr = array;
            const par = document.querySelectorAll('.par');
            const img = document.querySelector('#id');

            if (index === 1) {
                const div = document.createElement('div');
                div.classList.add('blockWrapperElem2');
                div.setAttribute('data-aos', 'zoom-in-right');
                div.setAttribute('data-aos-delay', 500);
                div.innerHTML += `
                    <p class="title">Travel destinations</p>
                    <p class="par elem_active">${array[0].title}</p>
                    <p class="par">${array[1].title}</p>
                    <p class="par">${array[2].title}</p>
                    <p class="par">${array[3].title}</p>
                    <p class="par">${array[4].title}</p>
                    
                `
                document.querySelector('.infoAboutCity button').id = array[0].title;
                document.querySelector('.blockWrapper').append(div);
            }

            function second() {
                img.classList.add('animate');
                setTimeout(infoAboutCity.classList.add('animate'), 12);
            }
            par.forEach((item, i) => {
                item.addEventListener('click', (e) => {
                    if (img.classList.contains('animate')) {
                        img.classList.remove('animate');
                        infoAboutCity.classList.remove('animate');
                    }
                    setTimeout(second, 400);
                    setTimeout(() => {
                        img.src = myArr[i].img;

                    }, 400);
                    if (!e.target.classList.contains('elem_active')) {
                        myFn();
                        setTimeout(() => {
                            e.target.classList.add('elem_active');
                            document.querySelector('.infoAboutCity button').id = e.target.textContent;
                        }, 250);
                    }
                    if (myP.textContent != '') {
                        myP.textContent = '';
                        myP.classList.remove('animate');
                        setTimeout(() => {
                            myP.textContent = array[i].descr;
                            myP.classList.add('animate');
                        }, 1500);
                    }
                });
            });
            function myFn() {
                par.forEach((item, i) => {
                    item.classList.remove('elem_active');
                })
            };
        });
    };
    getBaseData();

}
export default dest;