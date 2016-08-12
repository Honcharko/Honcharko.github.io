var test = {
    main: "Тест",
    questions : ["Ваше имя :", "Ваша фамилия :", "Ваш возраст :"],
    answers : [["Петя", "Вася"],["Иванов", "Петров"],["25", "22"]],
    right: [1, 1, 1]
};

        var jsonTest = JSON.stringify(test);
        localStorage.setItem('testing', jsonTest);

        jsonTest = localStorage.getItem('testing');
        jsonTest = JSON.parse(jsonTest);

$(function(){

    var html = $('.tmpl').html();
    var content = tmpl(html, {
        data: jsonTest
    });
    $('body').append(content);

    //submit

    $('.submit').on('click', function(){

        if($('#a00 input:checked').length == 1){
           console.log('ok');
        }


    });


});


