console.log("connected");

let inputs = document.querySelectorAll('input');
let submit = document.querySelector('button');
let img = document.querySelectorAll('.errorimg');
let text = document.querySelectorAll('.errortext');

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validate(e){
    e.preventDefault();

    for(let i=0;i<4;i++){
            if(inputs[i].value.length == 0){
                img[i].classList.remove('error');
                text[i].classList.remove('error');
            }else{
                img[i].classList.add('error');
                text[i].classList.add('error');
            }
    }

    if(validateEmail(inputs[2].value)){
        img[2].classList.remove('error');
        text[2].classList.remove('error');
    }else{
        img[2].classList.remove('error');
        text[2].classList.remove('error');
    }

    // if(inputs[1].value.length == 0){
    //     img[1].classList.remove('error');
    //     text[1].classList.remove('error');
    // }else{
    //     img[0].classList.add('error');
    //     text[0].classList.add('error');
    // }
    // if(inputs[2].value.length == 0){
    //     img[2].classList.remove('error');
    //     text[2].classList.remove('error');
    // }else{
    //     img[0].classList.add('error');
    //     text[0].classList.add('error');
    // }
    // if(inputs[3].value.length == 0){
    //     img[3].classList.remove('error');
    //     text[3].classList.remove('error');
    // }else{
    //     img[0].classList.add('error');
    //     text[0].classList.add('error');
    // }
}

submit.addEventListener('click',validate);

