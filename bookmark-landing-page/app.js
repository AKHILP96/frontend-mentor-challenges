
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');

let input = document.getElementById('email-input');
let btn = document.getElementById('email-button');
let img = document.getElementById('errorimg');
let txt = document.getElementById('error');

const faqAnswer = document.querySelectorAll('.faq-answer');


let ele = document.querySelectorAll('.section-3 > div');

one.onclick = function(){
    for(let i=0;i<ele.length;i++){
        ele[i].style.display = 'none';
    }
    one.setAttribute('id','red-border');
    two.removeAttribute("id");
    three.removeAttribute("id");
    ele[0].style.display='flex';

}

two.onclick = function(){
    for(let i=0;i<ele.length;i++){
        ele[i].style.display = 'none';
    }
    ele[1].style.display = 'flex';
    two.setAttribute('id','red-border');
    one.removeAttribute("id");
    three.removeAttribute("id");

}

three.onclick = function(){
    for(let i=0;i<ele.length;i++){
        ele[i].style.display = 'none';
    }
    ele[2].style.display = 'flex';
    three.setAttribute('id','red-border');
    one.removeAttribute("id");
    two.removeAttribute("id");

}

window.onload = () => {
    ele[0].style.display = 'flex';
    ele[1].style.display = 'none';
    ele[2].style.display = 'none';
    one.setAttribute('id','red-border');
    
    for(let i=0;i<faqAnswer.length;i++){
        faqAnswer[i].style.display = 'none';
    }
    img.style.display = 'none';
    txt.style.display = 'none';
}



console.log(faqAnswer);

const faqQue = document.querySelectorAll('.faq-question');
console.log(faqQue);

window.onclick = (e) => {
    if(e.path[2].className == 'faq'){
        e.stopPropagation();
        let ele = e.path[1].nextElementSibling;
        if(ele.style.display == 'none'){
            console.log(e.path[1].children[1]);
            e.path[1].children[1].style = 'transform:rotate(180deg)';
            ele.style.display = 'flex';
        }else{
            e.path[1].children[1].style = 'transform:rotate(0deg)';
            ele.style.display = 'none'
        }
    }
}

btn.onclick = (e) => {
    console.log("ererE");
    console.log(input.value);
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(input.value) == false) {
        img.style.display = 'block';
        txt.style.display = 'block';
    }else{
        img.style.display = 'none';
        txt.style.display = 'none';
    }
}