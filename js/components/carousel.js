const btnNext = document.querySelector('.button-arrow.-next');
const btnBack = document.querySelector('.button-arrow.-back');
const elements = document.querySelector('.elements');
const pixel = 100;
let step = 0;

btnNext.addEventListener("click", function() {
    step += pixel;
    elements.style = `transform: translateX(${step}px)`;
});

btnBack.addEventListener('click', function() {
    step -= pixel;
    elements.style = `transform: translateX(${step}px)`;
}); 
