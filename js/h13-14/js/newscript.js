'use strict';
$(function () {
    var test = [
        {
            question: 'Ваше имя :',
            answer: ['Петя', 'Вася'],
            right: 1
        },
        {
            question: 'Ваша фамилия :',
            answer: ['Иванов', 'Петров'],
            right: 0
        },
        {
            question: 'Ваш возраст :',
            answer: [25, 22],
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
    $($submit).on('click', function (e) {
        e.preventDefault();
        var counter = 0;
        var user = [];

        var inputs = document.querySelectorAll('input');

        for (var i = 0; i < jsonTest.length; i++) {
            var test = jsonTest[i];
            var answered = {};
            for (var q = 0; q < inputs.length; q++) {
                if (!inputs[q].checked) continue;
                var check = inputs[q].checked;
                var parent = inputs[q].parentElement;
                var question = parent.firstElementChild.innerHTML.slice(3);


                if (question != test.question) {
                    continue;
                } else {
                    var right = test.right;
                    console.log(right);
                /*
                 1.Создаем  var right = test.right;
                 2.Проверяем нажатый инпут с  var right??
                 3.Если есть совпадение то записываем ответ(цифру 1 в пустой массив  var user =[];)
                 4. Подсчитываем количество ответов и выводим на модальное окно
                */

                }
                if(right == check){
                    answered[q] = true;

                }
                user.push(answered);

            }
        }
        //modal window
        var result = function result() {


            var $modal = $('<div class = "window"><span> У вас ' + counter + ' правильных (-й) ответов (-т)</span></div>');
            var $button = $('<button class="reset">OK</button>');
            var $overlay = $('<div class= "window-overlay">');


            $('body').append($overlay);
            $('body').append($modal);
            $($modal).append($button);

            var $reset = $('.reset')[0];

            function reset() {
                $modal.remove();
                $overlay.remove();
                $('.quest')[0].reset();
            }

            $reset.addEventListener('click', reset);
        };

        result();

    });


});




