console.log("heelo");

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');

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
}

