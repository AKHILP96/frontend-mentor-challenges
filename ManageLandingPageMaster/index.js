let tags = document.querySelectorAll('[data-id]');
let divs = document.querySelectorAll('body>div');
let forms = document.querySelectorAll('[data-form]');
let inputs = document.querySelectorAll('#getstarted input');
console.log(forms);
console.log(inputs);

let monthly = document.getElementsByClassName('monthly');
let yearly = document.getElementsByClassName('yearly');

for(let t of tags){
    t.addEventListener('click',show);
}

function show(e){
    console.log(e.target);
    for(let d of divs){
        d.style.display = "none";
    }
    console.log(e.target.dataset.id);
    let ele = e.target.dataset.id;
    document.getElementById(ele).style.display='block';
}

window.onload = () =>{
    for(let d of divs){
        d.style.display = "none";
    }
    document.getElementById('main').style.display='block';
    console.log(monthly);
    console.log(yearly);
    for(let m of monthly){
        m.style.display = 'none';
    }
    
    for(let input of inputs){
        input.addEventListener('blur',check);
        console.log(input);
    }

    for(let form of forms){
        form.style.display="none";
    }

}


let prices = document.querySelectorAll('#pricing > .flex > .grid > div');
console.log(prices[0]);
console.log(prices[1]);

let pricesContainer = document.querySelector('#pricing > .flex > .grid');
pricesContainer.addEventListener('click',compute);

function compute(){
    if(prices[0].getAttribute('id')){
        prices[0].removeAttribute('id');
        prices[1].setAttribute('id','active');
        for(let y of yearly){
            y.style.display="none";
        }
        for(let m of monthly){
            m.style.display="inline-block";
        }

    }else{
        prices[1].removeAttribute('id');
        prices[0].setAttribute('id','active');
        for(let m of monthly){
            m.style.display="none";
        }
        for(let y of yearly){
            y.style.display="inline-block";
        }        
    }
}




function check(e){
    console.log(e.target.id);
    let ele = document.querySelector(`[data-form=${e.target.id}]`);
    if(e.target.value.length<1){ ele.style.display = "block"; ele.classList.add('dropdown');}
    else ele.style.display = "none";
    console.log(e.target.value.length);
}