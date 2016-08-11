var test = {
    main: "Тест по программированию",
    questions : ["Ваше имя", "Ваша фамилия", "Ваш возраст"],
    answers : [["Петя", "Вася"],["Иванов", "Петров"],["25", "22"]],
    right: [1, 1, 1]
};

//function () {
//    var c = this.questions.length;
//    var w = this.answers.length;
//    var obj = {};
//    for (var i = 0; i < c; i++) {
//        obj[this.questions[i]] = this.answers[i];
//        for (var q = 0; q < w; q++) {
//            obj[this.questions[q]] = this.answers[q];
//        }
//    }
//    return obj;
//}
        var jsonTest = JSON.stringify(test);
        localStorage.setItem('testing', jsonTest);

        jsonTest = localStorage.getItem('testing');
        jsonTest = JSON.parse(jsonTest);
console.log(jsonTest);

//    localStorage.setItem('testing', JSON.stringify(test.counter()));
//    var testing = localStorage.getItem('testing');
//
//    testing = JSON.parse(testing);
//
//
//$(function(){
//    var html = $('.tmpl').html();
//    var content = tmpl(html, {
//        data: testing
//    });
//    //console.log(content);
//    $('body').append(content);
//});


