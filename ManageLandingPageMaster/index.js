console.log("yumm");

let hamburger = document.querySelector('#hamburger');
let list = document.querySelector('#nav-ul');

hamburger.addEventListener('click',()=>{
    console.log("clicked");
    console.log(list);
    list.classList.toggle('show');
});