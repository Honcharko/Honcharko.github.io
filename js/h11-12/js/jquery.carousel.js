(function($){
    $.fn.carousel = function() {
    var right = $('.carRight');
    var left = $('.carLeft');
    var elemList = $('.carList');
    var pixels = 625;
    var valueLeft = 0;
    var elemCount = elemList.find('li').length;
    var min = -(elemCount - 1) * pixels;
    var max = 0;

    left.click(function(){
        if(valueLeft != max) {
            valueLeft += 625;
            elemList.animate({
                left: valueLeft + 'px'
            }, 400);
        }
    });

    right.click(function(){
        if(valueLeft != min){
        valueLeft -= 625;
        elemList.animate({
            left: valueLeft + 'px'
        }, 400);
        }
    });
}

})(jQuery);