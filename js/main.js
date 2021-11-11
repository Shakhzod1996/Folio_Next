
// Local JS

// Dark-light toggle
let lightDark = document.querySelector('.dark-light');
let change = document.querySelector('.change');
let left = document.querySelector('.left');



lightDark.addEventListener('click', ()=> {
    lightDark.classList.toggle('dark-light-active');
    change.classList.toggle('change-active');
    left.classList.toggle('left-active');

})

// Change background

let light = document.querySelector('.light');
let dark = document.querySelector('.dark');

dark.addEventListener('click', ()=> {
    dark.classList.add('dark-active');
    light.classList.remove('light-active');
    document.body.classList.add('dark-side');
})

light.addEventListener('click', ()=> {
    dark.classList.remove('dark-active');
    light.classList.add('light-active');
    document.body.classList.remove('dark-side');
})

// When Scroll header fixed
let header = document.querySelector('.header');

window.addEventListener('scroll', ()=> {
    if(scrollY > 300) {
        header.classList.add('head-fixed');
    } else {
        header.classList.remove('head-fixed');

    }
})

// Working Image Galley
// JQuery
$(document).ready(function () {
    $('.active-2').on('click', function () {
        $('.active-1').removeClass('active-1');
        $('.active-2').addClass('active-1');
        $('.active-3').removeClass('active-1');
        $('.active-4').removeClass('active-1');
        $('.act').removeClass('active-11');
        $('.three-3').addClass('img-hide');
        $('.four-4').addClass('img-hide');
        $('.five-5').addClass('img-hide');
        $('.six-6').addClass('img-hide');
        $('.thirteen-13').removeClass('img-hide');
        $('.fourthteen-14').removeClass('img-hide');
        $('.eleven-11').removeClass('img-hide');
        $('.twelve-12').removeClass('img-hide');
        $('.one-1').removeClass('img-hide');
        $('.two-2').removeClass('img-hide');
    })

    $('.active-3').on('click', function () {
        $('.active-1').removeClass('active-1');
        $('.active-3').addClass('active-1');
        $('.active-2').removeClass('active-1');
        $('.active-4').removeClass('active-1');
        $('.act').removeClass('active-11');
        $('.three-3').removeClass('img-hide');
        $('.four-4').removeClass('img-hide');
        $('.five-5').addClass('img-hide');
        $('.six-6').removeClass('img-hide');
        $('.one-1').addClass('img-hide');
        $('.two-2').addClass('img-hide');
        $('.eleven-11').addClass('img-hide');
        $('.twelve-12').addClass('img-hide');
    })

    $('.act').on('click', function () {
        $('.active-2').removeClass('active-1');
        $('.act').addClass('active-11');
        $('.active-3').removeClass('active-1');
        $('.active-4').removeClass('active-1');
        $('.three-3').removeClass('img-hide');
        $('.four-4').removeClass('img-hide');
        $('.five-5').removeClass('img-hide');
        $('.six-6').removeClass('img-hide');
        $('.one-1').removeClass('img-hide');
        $('.two-2').removeClass('img-hide');
        $('.eleven-11').removeClass('img-hide');
        $('.twelve-12').removeClass('img-hide');
        $('.thirteen-13').removeClass('img-hide');
        $('.fourthteen-14').removeClass('img-hide');
    })

    $('.active-4').on('click', function () {
        $('.active-2').removeClass('active-1');
        $('.act').removeClass('active-11');
        $('.active-3').removeClass('active-1');
        $('.active-4').addClass('active-1');
        $('.three-3').addClass('img-hide');
        $('.four-4').addClass('img-hide');
        $('.five-5').addClass('img-hide');
        $('.six-6').addClass('img-hide');
        $('.one-1').addClass('img-hide');
        $('.two-2').addClass('img-hide');
        $('.eleven-11').addClass('img-hide');
        $('.twelve-12').addClass('img-hide');
        $('.thirteen-13').addClass('img-hide');
        $('.fourthteen-14').addClass('img-hide');
    })
})
