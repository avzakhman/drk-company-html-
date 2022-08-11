window.addEventListener('DOMContentLoaded', ()=> {

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

    toggleInput('#form-page-ursachen', '#form-page-nein', '#form-page-ja', 'input-template_hidden');


    const cundenferenz = document.querySelector('#kundenreferenz'),
        firmaoptions = document.querySelectorAll('.firmaoption');
        privatoptions = document.querySelectorAll('.privatoption');
    cundenferenz.addEventListener('click', ()=> {
        if ((cundenferenz.querySelector('.select__current')).textContent == 'Firma') {
            firmaoptions.forEach((firmaoption)=> {
                firmaoption.classList.remove('input-template_hidden');
            });
            privatoptions.forEach((privatoption)=> {
                privatoption.classList.add('input-template_hidden');
            });
        }
        else if ((cundenferenz.querySelector('.select__current')).textContent == 'Privat') {
            firmaoptions.forEach((firmaoption)=> {
                firmaoption.classList.add('input-template_hidden');
            });
            privatoptions.forEach((privatoption)=> {
                privatoption.classList.remove('input-template_hidden');
            });
        }
    });

    const toggleFormStatusWindow = function() {
        const openStatus = document.querySelectorAll('.open-status'),
            statusWindow = document.querySelector('.form-status'),
            closeStatus = document.querySelector('#form-status-close');
        openStatus.forEach((button) => {
            button.addEventListener('click', ()=> {
                statusWindow.classList.add('form-status__active');
            })
        });
        closeStatus.addEventListener('click', ()=> {
            statusWindow.classList.remove('form-status__active');
        });
    }

    toggleFormStatusWindow();
});
