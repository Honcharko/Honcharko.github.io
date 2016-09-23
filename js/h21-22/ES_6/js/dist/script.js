'use strict';

$(function () {
    //variables
    var counter = 0;
    var user = [];
    var inputs = document.querySelectorAll('input');
    var answered = {};

    var test = [{
        question: 'Ваше имя :',
        answer: ['Петя', 'Вася'],
        right: 1
    }, {
        question: 'Ваша фамилия :',
        answer: ['Иванов', 'Петров'],
        right: 0
    }, {
        question: 'Ваш возраст :',
        answer: [25, 22],
        right: 1
    }];

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

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = jsonTest[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var i = _step.value;

                test = i;
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = inputs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var q = _step2.value;

                        var check = q.checked;
                        var parent = q.parentElement;
                        var question = parent.firstElementChild.innerHTML.slice(3);
                        var right = void 0;

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
                        if (right == check) {
                            q.answered = true;
                        }
                        user.push(answered);
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
            }
            //modal window
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        function result() {
            var $modal = $('<div class = "window"><span> У вас ' + counter + ' правильных (-й) ответов (-т)</span></div>');
            var $button = $('<button class="reset">OK</button>');
            var $overlay = $('<div class= "window-overlay">');
            var $quest = $('.quest')[0];

            $('body').append($overlay);
            $('body').append($modal);
            $($modal).append($button);

            var $reset = $('.reset')[0];

            var reset = function reset() {
                $modal.remove();$overlay.remove();$quest.reset();
            };

            $reset.addEventListener('click', reset);
        }

        result();
    });
});
