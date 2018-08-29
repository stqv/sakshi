var circle = document.querySelector('#circle');
var triangle = document.querySelector('.triangle');
var box = document.querySelector('.box');
var h1 = document.querySelector('.box h1');
var cards = document.querySelector('.cards');
var a=1;
circle.addEventListener('click',function(){
        
        h1.classList.toggle('hideh');
        triangle.classList.toggle('hide');
        box.classList.toggle('hidebox');
})