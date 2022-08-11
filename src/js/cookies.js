window.addEventListener('DOMContentLoaded', ()=> {

    const AcceptCookies = function() {
        const cookiesWindow = document.querySelector('.cookies'),
            closeCookies = cookiesWindow.querySelector('.acceptCookies');

        closeCookies.addEventListener('click', ()=>{
            cookiesWindow.classList.add('cookies__hidden');
        })
    }
    AcceptCookies();

});