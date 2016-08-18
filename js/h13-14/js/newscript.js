'use strict';
$(function(){
    var test = [
        {
            question : 'Ваше имя :',
            answer : [
                'Петя',
                'Вася'
            ],
            right: 1
        },
        {
            question : 'Ваша фамилия :',
            answer : [
                'Иванов',
                'Петров'
            ],
            right: 0
        },
        {
            question : 'Ваш возраст :',
            answer : [
                25,
                22
            ],
            right: 1
        }

    ];

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
    $($submit).on('click', function(e) {
        e.preventDefault();
        var counter = 0;

        var inputs = document.querySelectorAll('input');



        for(var i=0; i<jsonTest.length; i++){
            var test = jsonTest[i];

            for(var q=0; q<inputs.length; q++){
                if(!inputs[q].checked) continue;
                var parent = inputs[q].parentElement;
                console.log(parent.innerHTML);
                console.log(test.question);


                if(test.question == parent.innerHTML){
                    console.log('All right');
                }
            }
        }


        //var li = $('li');
        //for(var i=0; i<li.length; i++){
        //    var quest = li[i].getAttribute('id');
        //
        //
        //}
        //var inputs = $('input:checkbox');
        //for(var q=0; q<inputs.length; q++){
        //    var check = inputs[q].getAttribute('id')==1;
        //    console.log(check);
        //
        //
        //}
        //if(quest[i] == check){
        //    counter++;
        //    console.log('counter', counter);
        //}else{
        //    console.log('no');
        //}
        //


        //modal window
        var result = function result(){


            var $modal = $('<div class = "window"><span> У вас '+ counter+' правильных (-й) ответов (-т)</span></div>');
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

        result();

    });


});



