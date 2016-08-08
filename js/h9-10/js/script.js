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
            el.css("background-position", "14px 0");
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
            el.css("background-position", "14px 0");
        }
        return true;
    }

    //animation

    var firstClick = document.querySelector('.firstClick');
    var subMenu = document.querySelector('.subMenu');
    var secondClick = document.querySelector('.secondClick');
    var secSub = document.querySelector('.secSub');


    function mouseOver(){
        subMenu.style.display = 'block';
        function secMenu(){
            secSub.style.display = 'block';
        }
        secondClick.addEventListener('mouseover', secMenu);
    }
    function mouseOut(){
        subMenu.style.display = 'none';
    }
    function secondSub(){
        secSub.style.display = 'none';
    }

    firstClick.addEventListener('mouseover', mouseOver);

    firstClick.addEventListener('mouseout', mouseOut);

    secondClick.addEventListener('mouseout', secondSub);

});


