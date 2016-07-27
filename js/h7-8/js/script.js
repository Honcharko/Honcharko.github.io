$(function(){
    $('.tabs div').hide();
    $('.tabs div:first').show();
    $('.tabs ul li:first').addClass('active');
    $('.tabs ul li a').on('click', function(){
        $('.tabs ul li').removeClass('active');
        $(this).parent().addClass('active');
        var $tab = $(this).attr('href');
        $('.tabs div').hide();
        $($tab).show();
        return false;
    });
        //Task 2
    $('.one').hover(function(){
        var $count = $('.textOne');
        $($count).show();
    // first input
    }, function(){
        $('.textOne').hide();
    });

    $('.two').hover(function(){
        var $count = $('.textTwo');
        $($count).show();
    //second input
    }, function(){
        $('.textTwo').hide();
    });
    //third input
    $('.three').hover(function(){
        var $count = $('.textThree');
        $($count).show();

    }, function(){
        $('.textThree').hide();
    });
    //onclick button
    $('.sub').on('click', function(){
        $('span').slideToggle();
    })
});