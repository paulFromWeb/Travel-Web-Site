import { placeControl } from '../services/services';
import { inputs } from './modal';
function modalBtns(decorate) {
    const checkButton = document.querySelector('#Yes')
    checkButton.addEventListener('click', (e) => {
        if (e.target.classList.contains('checked')) {
            e.target.classList.remove('checked')
        } else {
            e.target.classList.add('checked')
        }
    })
    let index = 0;

    function addActive(element) {
        element.nextElementSibling.classList.add(decorate)
        element.textContent = '✔'
    }
    function deleteActive(elem) {
        elem.classList.remove(decorate)
    }

    const insurance = document.querySelector('#insurance');
    document.querySelector('.btn4').addEventListener('click', () => {
        if (checkButton.classList.contains('checked') === false) {
            insurance.value = 50;
        } else {
            insurance.value = 0;
        }
    })
    const place = document.querySelector('#place').value;
    document.querySelectorAll('.btn4').forEach((item, i, arr) => {
        item.addEventListener('click', (e) => {
            const place = document.querySelector('#place').value;
            let priceTicket = document.querySelector('#price').value;
            const addTicketPrice = async () => {

                const res = await fetch('ticketPriceDB.json');
                const myData = await res.json();
                console.log(myData.price)
                myData.price.forEach(item => {
                    if (item.title === place) {
                        priceTicket = item.price;
                    }
                    return priceTicket;
                })
                return price.value = priceTicket;
            }
            addTicketPrice();
            console.log(priceTicket)
            const visible = document.querySelector('.visible')
            visible.classList.remove('visible')
            visible.nextElementSibling.classList.add('visible')

            ++index;

            if (index === 2) {
                let lineFirst = document.querySelector('.line .actived')
                addActive(lineFirst);
                let startActive = document.querySelector('.markers .actived')
                addActive(startActive)
            } else if (index === 1) {
                let lineFirst = document.querySelector('.line div')
                addActive(lineFirst);
                let startActive = document.querySelector('.markers div')
                addActive(startActive)
            }
        })
    })

    document.querySelectorAll('.btn5').forEach(item => {
        item.addEventListener('click', () => {
            const visible = document.querySelector('.visible')
            visible.classList.remove('visible')
            visible.previousElementSibling.classList.add('visible')
            --index;
            if (index === 1) {
                let lineFirst = document.querySelector('.line .actived').nextElementSibling
                deleteActive(lineFirst);
                let startActive = document.querySelector('.markers .actived').nextElementSibling
                startActive.previousElementSibling.textContent = '2'
                deleteActive(startActive)

            } else if (index === 0) {
                let lineFirst = document.querySelector('.line div').nextElementSibling
                deleteActive(lineFirst);
                let startActive = document.querySelector('.markers div').nextElementSibling
                startActive.previousElementSibling.textContent = '1'
                deleteActive(startActive)
            }
        })
    })

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            result.value = (+price.value * +people.value) + (+days.value * +people.value * 200) + +insurance.value
            control();
            placeControl(document.querySelector('.value').textContent, place);
            console.log(document.querySelector('.value').textContent)
        })
    })

    people.addEventListener('input', () => {
        if (people.value === 0 || people.value === '') {

            return false;
        }

        if (people.value > 10) {
            people.value = 0;
        }
        if (checkButton.classList.contains('checked')) {
            insurance.value = people.value * 0;
        } else {
            insurance.value = people.value * 50;
        }

    })
    days.addEventListener('input', () => {
        if (days.value === 0 || days.value > 14) {
            days.value = 1;
        }
        control();

    })

    function control() {
        if (people.value === 0 || people.value === '' || days.value === 0 || days.value === '') {
            document.querySelector('.block2 .btn4').style.cssText = `
            pointer-events: none !important;
            `
        } else {
            document.querySelector('.block2 .btn4').style.cssText = `
            pointer-events: auto !important;
            cursor:pointer;
            `
        }

    }
}
export default modalBtns;