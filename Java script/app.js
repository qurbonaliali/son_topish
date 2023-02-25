let son = Math.round(Math.random()*1024);
console.log(son);
let h1 = document.querySelector('.text');
let n = document.querySelector('.inp');
let elForm = document.querySelector('.form');

let sanoq = 0;
let inpfrom = Number(n.value); 
let help=false;
elForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(n.value);
    sanoq++;


    if(n.value == son){
        h1.innerHTML = `Siz tori toppdiz🎉!!. Biz oylagan son ${son} edi.`;
        h1.style.color='darkgreen';
        sanoq=10;
        help=true;
    }
    else if(n.value > son){
        h1.innerHTML = `Siz topolmadiz. Biz oylagan son ${n.value} dan kichik. Sizda ${10-sanoq} urinish qoldi`;
        h1.style.color='red';
    }
    else if(n.value < son){
        h1.innerHTML = `Siz topolmadiz. Biz oylagan son ${n.value} dan kotta. Sizda ${10-sanoq} urinish qoldi`;
        h1.style.color='red';
    }

    if(sanoq==10 && help==false){
        h1.innerHTML = `Siz Yutqizdingiz!!. Biz oylagan son ${son} edi.`;
        alert('Qayta hohlaysizmi?');
        sanoq=0;
        h1.innerHTML='';
        son = Math.round(Math.random()*1024);
        console.log(son)


    }
})