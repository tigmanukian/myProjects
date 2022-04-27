function toggleClass(){
    let menu = document.querySelector('#burger');
    menu.classList.toggle('toggleCls');
}
let hamburger = document.querySelector('#burgerImg');

hamburger.addEventListener('click',toggleClass)


function inner(){
    document.getElementById('demo').innerHTML='Hello JavaScript';
    
};
function inner1(){
    document.getElementById('demo').innerHTML='A Company Of';
};