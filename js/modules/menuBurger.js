function menuBurger() {
    const mainMenu = document.querySelector('.mainMenu');
    const menuLinks = document.querySelector('.menuLinks');
    const matIcons1 = document.querySelector('.material-icons1');
    const matIcons2 = document.querySelector('.material-icons2');
    const myDelete = document.querySelector('.delete');

    function closeBurger() {
        mainMenu.classList.remove('mainMenuActive');
        myDelete.style.opacity = '1';
        matIcons1.style.cssText = `
        transform :rotate(0deg);
        top:0;
        `;
        menuLinks.classList.remove('menuFlex');
        matIcons2.style.cssText = ` 
        transform :rotate(0);
        bottom:0;
        `;
    }
    document.querySelector('.menuIcon').addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) {
            closeBurger();
            e.target.classList.remove('active');
            menuLinks.style.display = 'none';
        } else {
            mainMenu.classList.add('mainMenuActive');
            menuLinks.style.display = 'block';
            menuLinks.classList.add('menuFlex');
            e.target.classList.add('active');
            myDelete.style.opacity = '0';
            matIcons1.style.cssText = `
            transform :rotate(45deg);
            top:12.5px;
            `;
            matIcons2.style.cssText = `
            transform :rotate(-45deg);
            top:12.5px;
            `;
        }
    });
    document.querySelectorAll('.menuLinks a').forEach(item => {
        item.addEventListener('click', () => {
            closeBurger();
            console.log()
            if (+(window.getComputedStyle(mainMenu).width).replace(/px/g, '') < 768) {
                menuLinks.style.display = 'none';
            }
        });
    });
}
export default menuBurger;