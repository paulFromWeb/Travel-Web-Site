import { enableScroll } from '../services/services';
import { postData } from '../services/services';
import { deleteImg } from '../services/services';
import { placeWhere, people, days, result, userName, userSurname, userPhone, userEmail, price, place, date, div, buttonForms } from './modal';
function forms() {
    // Forms 

    bindPostData(buttonForms);

    function bindPostData(form) {
        form.addEventListener('click', (e) => {
            const offer = {
                'price': price.value,
                'place': place.value,
                'placeWhere': placeWhere.value,
                'date': date.value,
                'people': people.value,
                'days': days.value,
                'result': result.value,
                'userName': userName.value,
                'userSurname': userSurname.value,
                'userPhone': userPhone.value,
                'userEmail': userEmail.value
            }
            const json = JSON.stringify(offer)
            localStorage.setItem(`${offer.placeWhere}`, json)
            console.log(json)
            postData('http://localhost:3000/responces', json)
                .then((data) => {
                    console.log(data);
                }).catch(() => {
                }).finally(() => {
                    document.querySelector('.markers').lastElementChild.textContent = '✔';
                    enableScroll(div);

                    deleteImg(div);
                })
        });
    }
}
export default forms;