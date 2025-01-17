import $ from '../core';

$.prototype.slider = function() {
    for (let i = 0; i < this.length; i++){
        const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width;

        const slides =  this[i].querySelectorAll('.carousel-item'),
              slidesFild = this[i].querySelector('.carousel-slides');
        const dots = this[i].querySelectorAll('.carousel-indicators li');

        slidesFild.style.width = 100 * slides.length + '%';
        slides.forEach(slide => {
           slide.style.width = width; 
        });

        let offset = 0;
        let slideIndex = 0;

        $(this[i].querySelector('[data-slide="next"]')).click((e) => {
            e.preventDefault();
            if (offset == (+width.replace(/\D/g, '') * (slides.length - 1)))  {
                offset = 0;
            } else {
                offset += +width.replace(/\D/g, '');
            }


            slidesFild.style.transform = `translateX(-${offset}px)`;

            if (slideIndex == slides.length - 1){
                slideIndex = 0;
            } else {
                slideIndex++;
            }
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });
        $(this[i].querySelector('[data-slide="prev"]')).click((e) => {
            e.preventDefault();
            if (offset == 0)  {                
                offset = +width.replace(/\D/g, '') * (slides.length - 1);
            } else {
                offset -= +width.replace(/\D/g, '');
            }


            slidesFild.style.transform = `translateX(-${offset}px)`;
            if (slideIndex == 0){
                
                slideIndex = slides.length - 1;
            } else {
                slideIndex--;
            }
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });

        const sliderId = this[i].getAttribute('id');
        $(`#${sliderId} .carousel-indicators li`).click((e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = +width.replace(/\D/g, '') * slideTo;
            slidesFild.style.transform = `translateX(-${offset}px)`;
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');

        });
    }
};

$('.carousel').slider();