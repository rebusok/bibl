import './lib/lib';
import $ from './lib/lib';


$('button').on('click', function(){
    $('button').fadeOut(2000);
});
$('div').eq(2).on('click', function(){
    $('button').eq(1).fadeIn(2000, 'inline-block');
});
$('div').addAtribute('woooj', 300).toggleAtribute('woooj').toggleAtribute('woooj', 600);
$('div').click(function(){
    console.log($(this).index());
});

// console.log($('div').eq(2).find('.more'));
// console.log($('.some').closest('.findmedsd').addClass('sdsda'));
$('.more').fadeOut(1800);