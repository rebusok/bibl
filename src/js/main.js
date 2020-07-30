import './lib/lib';
import $ from './lib/lib';


$('#first').on('click', () =>{
    $('div').eq(1).fadeOut(800);
});
$('[data-coutn="second"]').on('click', () =>{
    $('div').eq(2).fadeOut(800);
});

$('button').eq(2).on('click', () => {
    $('.w-500').fadeOut(800);
});
$('button').eq(3).on('click', () => {
    $('.w-500').fadeToggle(800);
});