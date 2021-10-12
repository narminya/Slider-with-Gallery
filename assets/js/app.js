let carouselSlide = document.querySelector('.carousel-slide');
let carouselImage = document.querySelectorAll('.carousel-slide img');

let prevBtn = document.querySelector('#prev');
let nextBtn = document.querySelector('#next');


let index = 1;
let size = carouselImage[0].width;

function translate() {
    carouselSlide.style.transition = 'transform 1s ease';
    carouselSlide.style.transform = 'translateX(' + (-size * index) + 'px)';
}

nextBtn.addEventListener('click', () => {
    if (index >= carouselImage.length - 1) return

    index++;
    translate()

});

prevBtn.addEventListener('click', () => {
    if (index <= 0) return
    index--; 
    translate();


});



carouselSlide.addEventListener('transitionend', () => {
    if (carouselImage[index].id === 'lastClone') {
        carouselSlide.style.transition = 'none';
        index = carouselImage.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * index) + 'px)';
    } if (carouselImage[index].id === 'firstClone') {
        carouselSlide.style.transition = 'none';
        index = 1;
        carouselSlide.style.transform = 'translateX(' + (-size * index) + 'px)';
    }
})

let options = document.querySelectorAll('.options')
options.forEach((option) => {
    option.addEventListener('click', () => {

        let i = parseInt(option.getAttribute('value'));
        index = i;
        carouselSlide.style.transition = 'transform 1s ease-in-out';
        carouselSlide.style.transform = 'translateX(' + (-size * index) + 'px)';

    })
});
