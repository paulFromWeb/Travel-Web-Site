import { placeControl } from '../services/services';
import { enableScroll } from '../services/services';
import { disableScroll } from '../services/services';
import { deleteImg } from '../services/services';

const placeWhere = document.querySelector('#place')
const people = document.querySelector('#people');
const days = document.querySelector('#days');
const result = document.querySelector('#result');
const userName = document.querySelector('#name');
const userSurname = document.querySelector('#surname');
const userPhone = document.querySelector('#phone');
const userEmail = document.querySelector('#email')
const price = document.querySelector('#price');
const place = document.querySelector('#from_place');
const date = document.querySelector('#date');
const div = document.querySelector('.container');
const inputs = document.querySelectorAll('.inputData');
const buttonForms = document.querySelector('.submit');
function modal() {
    // POP UP 

    const block = document.querySelector('.block');
    const closeSymbol = document.querySelector('.closeSymbol');
    const contBack = document.querySelector('.contBack')
    const contBackImg = document.querySelector('.contBackImg')



    const priceButton = document.querySelectorAll('.priceButton')


    priceButton.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            disableScroll(div);

            document.querySelector('#place').value = e.target.id;
            const now = new Date()
            console.log(now)
            date.value = now.toISOString().split('T')[0];
            document.querySelector('.value').textContent = e.target.id;

            e.currentTarget.style.pointerEvents = 'none';
            closeSymbol.style.pointerEvents = 'auto';
            contBack.style.pointerEvents = 'auto';
            const img = document.createElement('img')
            img.classList.add('contBackImg')
            img.style.opacity = '0.15'
            img.src = `img/${e.target.id}.jpg`
            document.querySelector('.contBack').prepend(img)
            if (localStorage.getItem(`${e.target.id}`)) {
                const data = JSON.parse(localStorage.getItem(`${e.target.id}`))
                console.log(data)
                people.value = data.people;
                days.value = data.days;
                result.value = data.result;
                userName.value = data.userName;
                userSurname.value = data.userSurname;
                userPhone.value = data.userPhone;
                userEmail.value = data.userEmail;
                price.value = data.price;
                place.value = data.place;
                date.value = data.date;
            }
            const elemTargetId = e.target.id
            placeControl(elemTargetId, place);
        });

    })

    contBack.addEventListener('click', (e) => {
        if (e.target.classList.contains('contBackImg') || e.target.classList.contains('closeSymbol')) {
            enableScroll(div);
            deleteImg(div);
            document.querySelector('.mainMenu').style.display = 'flex';
            e.currentTarget.style.pointerEvents = 'none';
            priceButton.forEach(item => {
                item.style.pointerEvents = 'auto';
            })

        }
    })

}
export default modal;
export { placeWhere, people, days, result, userName, userSurname, userPhone, userEmail, price, place, date, div, buttonForms }
export { inputs }
