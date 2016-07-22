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
        $($count).slideToggle('slow');
    // first input
    }, function(){
        $('.textOne').slideToggle();
    });

    $('.two').hover(function(){
        var $count = $('.textTwo');
        $($count).slideToggle('slow');
    //second input
    }, function(){
        $('.textTwo').slideToggle();
    });
    //third input
    $('.three').hover(function(){
        var $count = $('.textThree');
        $($count).slideToggle('slow');

    }, function(){
        $('.textThree').slideToggle();
    });
    //onclick button
    $('.sub').on('click', function(){
        $('span').slideToggle();
    })
});