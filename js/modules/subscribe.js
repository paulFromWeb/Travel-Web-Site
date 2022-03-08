import { postData } from '../services/services';
function subscribe() {
    let user;
    const input = document.getElementById('input')

    const button = document.getElementById('button')
    button.addEventListener('click', (e) => {
        e.preventDefault();
        if (input.value === localStorage.getItem('email')) {
            document.getElementById('button').textContent = "You are subscribed!"
            document.getElementById('button').style.cssText = `
                
            box-shadow: 0 0 25px rgb(212, 169, 28);`
        } else {
            if (input.value.includes('@')) {

                user = {
                    'email': input.value,
                }
                const json = JSON.stringify(user);
                console.log(json)
                console.log(input.value)

                postData('http://localhost:3000/email', json)

                localStorage.setItem('email', input.value)

                e.target.textContent = "Thank you!"
                document.getElementById('button').style.cssText = `
                
            box-shadow: 0 0 25px rgb(212, 169, 28);`
            }
            else {
                return false
            }
        }




    })
}
export default subscribe;