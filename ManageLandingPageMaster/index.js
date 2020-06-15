let tags = document.querySelectorAll('a');
let divs = document.querySelectorAll('body>div');

let monthly = document.getElementsByClassName('monthly');
let yearly = document.getElementsByClassName('yearly');

for(let t of tags){
    t.addEventListener('click',show);
}

function show(e){
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