console.log("heelo");

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');

one.style.background='#00ff00';
two.style.background='#ff0000';
three.style.background = '#0000ff';

let ele = document.querySelectorAll('.section-3 > div');

one.onclick = function(){
    for(let i=0;i<ele.length;i++){
        ele[i].style.display = 'none';
        console.log('hidinh',i);
        console.log(ele[i]);
    }
    ele[0].style.display='block';
}

two.onclick = function(){
    for(let i=0;i<ele.length;i++){
        ele[i].style.display = 'none';
    }
    ele[1].style.display = 'block';
}

three.onclick = function(){
    for(let i=0;i<ele.length;i++){
        ele[i].style.display = 'none';
    }
    ele[2].style.display = 'block';
}

window.onload = () => {
    ele[0].style.display = 'block';
    ele[1].style.display = 'none';
    ele[2].style.display = 'none';
}

