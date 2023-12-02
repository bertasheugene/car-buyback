document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector('.form-submit');
    console.log(form);
    if(form){

        form.addEventListener("submit", (event) => {
            let formName = document.querySelector('.form__name');
            let formPhone = document.querySelector('.form__phone');
            let formEmail = document.querySelector('.form__email');

            let clearPhone = formPhone.value.replace(/\D/g, '');

            formName.classList.remove('form__input_error');
            formPhone.classList.remove('form__input_error');


            let error = 0;

            if(formEmail.value){
                error++;
            }

            if(!formName.value){
                console.log('name');
                error++;
                formName.classList.add('form__input_error');
            }

        
            if(!clearPhone || (clearPhone.length !== 12 && clearPhone.length !== 11)){

                console.log('phone');
                error++;
                formPhone.classList.add('form__input_error');
            }

            if(error){
                event.preventDefault();
            }

        });

       

    }

});