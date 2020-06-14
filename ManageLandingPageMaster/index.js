let tags = document.querySelectorAll('a');
let divs = document.querySelectorAll('body>div');
for(let t of tags){
    t.addEventListener('click',show);
}

function show(e){
    for(let d of divs){
        d.style.display = "none";
    }
    console.log(e.target.dataset.id);
    let ele = e.target.dataset.id;
    console.log(document.getElementById(ele));
    document.getElementById(ele).style.display='block';
}

window.onload = () =>{
    console.log("ho");
    for(let d of divs){
        d.style.display = "none";
    }
    document.getElementById('main').style.display='block';
}
console.log(divs);
console.log(tags);