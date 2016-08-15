    'use strict';
$(function(){
var test = {
    main: "Тест",
    questions : ["Ваше имя :", "Ваша фамилия :", "Ваш возраст :"],
    answers : [["Петя", "Вася"],["Иванов", "Петров"],["25", "22"]]
};

        var jsonTest = JSON.stringify(test);
        localStorage.setItem('testing', jsonTest);


    jsonTest = localStorage.getItem('testing');
    jsonTest = JSON.parse(jsonTest);


    var html = $('.tmpl').html();
    var content = tmpl(html, {
        data: jsonTest
    });
    $('body').append(content);

    var $submit = $('.submit')[0];

    //submit
    $($submit).on('click', function(e){
        var $cnt = 0;

        e.preventDefault();
        if($('#a00 input:checked').length==1 && $('#а01 input:checked').length==0){
            $cnt++;
        }else{
            $cnt = 0;
        }
        if($('#a10 input:checked').length==0 && $('#a11 input:checked').length==1){
            $cnt++;
        }
        if($('#a20 input:checked').length==1 && $('#а21 input:checked').length==0){
            $cnt++;
        }

        //modal window
        var window = function window(){


            var $modal = $('<div class = "window"><span> У вас '+ $cnt +' правильных (-й) ответов (-т)</span></div>');
            var $button = $('<button class="reset">OK</button>');
            var $overlay = $('<div class= "window-overlay">');


            $('body').append($overlay);
            $('body').append($modal);
            $($modal).append($button);

            var $reset = $('.reset')[0];

            function reset(){
                $modal.remove();
                $overlay.remove();
                $('.quest')[0].reset();
            }

            $reset.addEventListener('click', reset);
        };

        window();

    });

});


