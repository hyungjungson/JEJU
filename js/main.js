//anchorTag_click_scroll
$('a').click(function(){
    $('html, body').animate({
    scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});