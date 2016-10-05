
$(function () {
    //variables
    let cnt = 0;
    let user = [];
    let inputs = document.querySelectorAll('input');
    let answered = {};


    let test = [
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

    let jsonTest = JSON.stringify(test);
    localStorage.setItem('testing', jsonTest);


    jsonTest = localStorage.getItem('testing');
    jsonTest = JSON.parse(jsonTest);

    let html = $('.tmpl').html();
    let content = tmpl(html, {
        data: jsonTest
    });
    $('body').append(content);


    let $submit = $('.submit')[0];

    //submit
    $($submit).on('click', function (e) {
        e.preventDefault();

            for(let i of jsonTest){
             test = i;
            for (let q of inputs){
                let check = q.checked;
                let parent = q.parentElement;
                let question = parent.firstElementChild.innerHTML.slice(3);
                let right;

                if (!q.checked) continue;
                if (question != test.question) {
                    continue;
                } else {
                    right = test.right;

                /*
                 1.Создаем  var right = test.right;
                 2.Проверяем нажатый инпут с  var right??
                 3.Если есть совпадение то записываем ответ(цифру 1 в пустой массив  var user =[];)
                 4. Подсчитываем количество ответов и выводим на модальное окно
                */

                }
                if(right == check){
                    q.answered = true;
                    cnt++;
                }
                user.push(answered);

            }
        }
        //modal window
            function result () {
               let $modal = $('<div class = "window"><span> У вас ' + cnt + ' правильных (-й) ответов (-т)</span></div>');
               let $button = $('<button class="reset">OK</button>');
               let $overlay = $('<div class= "window-overlay">');
               let $quest = $('.quest')[0];

            $('body').append($overlay);
            $('body').append($modal);
            $($modal).append($button);

            let $reset = $('.reset')[0];


            let reset = () => {$modal.remove(); $overlay.remove(); $quest.reset();};

            $reset.addEventListener('click', reset);
        }

        result();

    });


});





