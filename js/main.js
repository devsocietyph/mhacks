

// ENTRIES page
function entryFilter(type){
    
}


/* $(document).ready(function() {
    $('#navigation').click(function(e) {  
       $('#navigation').fadeOut();
    });
    
    $('#navigation a').click(function(e) {  
       $('#navigation').fadeOut();
    });
    
});

function hamburger(){
    $("#navigation").fadeIn();
} */

$(function () {
    $('a').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body,.container').animate({ scrollTop: target.offset().top }, 1000);
                return false;
            }
        }
    });
});