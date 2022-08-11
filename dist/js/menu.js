window.addEventListener('DOMContentLoaded', ()=> {

    //функция открытия / закрытия окна
    const toggleFormWindow = function() {
        const openForm = document.querySelectorAll('.trigger-form'),
            formWindow = document.querySelector('.form-window'),
            closeForm = document.querySelector('#form-close');
        openForm.forEach((button) => {
            button.addEventListener('click', ()=> {
                formWindow.classList.add('form-window__active');
            })
        })
        closeForm.addEventListener('click', ()=> {
            formWindow.classList.remove('form-window__active');
        })
    }

    toggleFormWindow();

    const toggleFormStatusWindow = function() {
        const openStatus = document.querySelectorAll('.open-status'),
            statusWindow = document.querySelector('.form-status'),
            formWindow = document.querySelector('.form-window'),
            closeStatus = document.querySelector('#form-status-close');
        openStatus.forEach((button) => {
            button.addEventListener('click', ()=> {
                formWindow.classList.remove('form-window__active');
                statusWindow.classList.add('form-status__active');
            })
        });
        closeStatus.addEventListener('click', ()=> {
            statusWindow.classList.remove('form-status__active');
        });
    }

    toggleFormStatusWindow();
        
    const toggleInput = function(input, option_1, option_2, classToToggle) {
        const   firmaInput = document.querySelector(input),
                firma = document.querySelector(option_1),
                privat = document.querySelector(option_2);
        firma.addEventListener('click', ()=> {
            firmaInput.classList.remove(classToToggle);
        })
        privat.addEventListener('click', ()=> {
            firmaInput.classList.add(classToToggle);
        })
    }

    toggleInput('#firma-input', '#firma', '#privat', 'diagnose-form__hidden');
    toggleInput('#window-firma-input', '#window-firma', '#window-privat', 'diagnose-form__hidden');

});