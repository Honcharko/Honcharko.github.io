$(function() {
    $('select').selectBox();

    jQuery(".check").mousedown(
        /* при клике на чекбоксе меняем его вид и значение */
        function () {

            changeCheck(jQuery(this));

        });


    jQuery(".check").each(
        /* при загрузке страницы нужно проверить какое значение имеет чекбокс и в соответствии с ним выставить вид */
        function () {

            changeCheckStart(jQuery(this));

        });


    function changeCheck(el)
    /*
     функция смены вида и значения чекбокса
     el - span контейнер дял обычного чекбокса
     input - чекбокс
     */ {
        var el = el,
            input = el.find("input").eq(0);
        if (!input.attr("checked")) {
            el.css("background-position", "0 -22px");
            input.attr("checked", true)
        } else {
            el.css("background-position", "0 0");
            input.attr("checked", false)
        }
        return true;
    }

    function changeCheckStart(el)
    /*
     если установлен атрибут checked, меняем вид чекбокса
     */ {
        var el = el,
            input = el.find("input").eq(0);
        if (input.attr("checked")) {
            el.css("background-position", "0 -22px");
        }
        return true;
    }

    //animation

    var $menu = document.querySelector('.firstClick').childNodes[2];
    var $sub = document.querySelector('.firstClick').childNodes[2].getElementsByTagName('li');
    var $secMenu = document.querySelector('.secClick').childNodes[2];

    $('.firstClick').hover(function () {
        $($menu).animate({
            opacity: '1'
        },500);
            console.log($sub);
        $($sub).animate({
            backgroundColor: 'wheat'
        },500);
    },
        function () {
            $($menu).animate({
                opacity: '0'
            },500);
        });

    // second hover
    $('.secClick').hover(function () {
            $($secMenu).animate({
                opacity: '1'
            },500);

        },
        function () {
            $($secMenu).animate({
                opacity: '0'
            },500);
        });


});