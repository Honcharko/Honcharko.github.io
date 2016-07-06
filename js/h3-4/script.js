var test = {
    wrapper: function() {
        var parent = document.getElementsByTagName("body")[0];
        var element = document.createElement("div");
        element.classList.add("wrapper");
        parent.appendChild(element);
    },
    box: function() {
        var par = document.createElement("div");
        par.classList.add("box");
        par.style.width = "300px";
        par.style.display = "block";
        var wrapper = document.querySelectorAll(".wrapper");
        wrapper[0].appendChild(par);
    },
    main: function(){
        var text = document.createElement("h3");
        text.innerHTML = 'Тест по программированию';
        text.style.textAlign = "center";
        var wrapper = document.querySelectorAll(".wrapper");
        wrapper[0].appendChild(text);

    },
    question: function(){
        var num = document.createElement("p");
        num.innerHTML = "1. Вопрос №1";
        var box = document.querySelectorAll(".box");
        num.style.marginLeft = "80px";
        box[0].appendChild(num);
    },
    input: function(){
        var input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.setAttribute("id","answearFirst");
        var label = document.createElement("label");
        label.setAttribute("for", "answearFirst");
        label.innerHTML = "Вариант ответа №1";
        input.style.marginLeft = "100px";
        input.style.display = "block";
        input.style.float = "left";
        label.style.display = "block";
        label.style.float = "left";
        var box = document.querySelectorAll(".box");
        box[0].appendChild(input);
        box[0].appendChild(label);

        input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.setAttribute("id","answearSecond");
        label = document.createElement("label");
        label.setAttribute("for", "answearSecond");
        label.innerHTML = "Вариант ответа №2";
        input.style.marginLeft = "100px";
        box = document.querySelectorAll(".box");
        box[0].appendChild(input);
        box[0].appendChild(label);

        input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.setAttribute("id","answearThird");
        label = document.createElement("label");
        label.setAttribute("for", "answearThird");
        label.innerHTML = "Вариант ответа №3";
        input.style.marginLeft = "100px";
        box = document.querySelectorAll(".box");
        box[0].appendChild(input);
        box[0].appendChild(label);

        num = document.createElement("p");
        num.innerHTML = "2. Вопрос №2";
        box = document.querySelectorAll(".box");
        num.style.marginLeft = "80px";
        box[0].appendChild(num);

        input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.setAttribute("id","answearFour");
        label = document.createElement("label");
        label.setAttribute("for", "answearFour");
        label.innerHTML = "Вариант ответа №1";
        input.style.marginLeft = "100px";
        input.style.display = "block";
        input.style.float = "left";
        label.style.display = "block";
        label.style.float = "left";
        box = document.querySelectorAll(".box");
        box[0].appendChild(input);
        box[0].appendChild(label);

        input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.setAttribute("id","answearFive");
        label = document.createElement("label");
        label.setAttribute("for", "answearFive");
        label.innerHTML = "Вариант ответа №2";
        input.style.marginLeft = "100px";
        box = document.querySelectorAll(".box");
        box[0].appendChild(input);
        box[0].appendChild(label);

        input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.setAttribute("id","answearSix");
        label = document.createElement("label");
        label.setAttribute("for", "answearSix");
        label.innerHTML = "Вариант ответа №3";
        input.style.marginLeft = "100px";
        box = document.querySelectorAll(".box");
        box[0].appendChild(input);
        box[0].appendChild(label);

        num = document.createElement("p");
        num.innerHTML = "3. Вопрос №3";
        box = document.querySelectorAll(".box");
        num.style.marginLeft = "80px";
        box[0].appendChild(num);

        input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.setAttribute("id","answearSeven");
        label = document.createElement("label");
        label.setAttribute("for", "answearSeven");
        label.innerHTML = "Вариант ответа №1";
        input.style.marginLeft = "100px";
        input.style.display = "block";
        input.style.float = "left";
        label.style.display = "block";
        label.style.float = "left";
        box = document.querySelectorAll(".box");
        box[0].appendChild(input);
        box[0].appendChild(label);

        input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.setAttribute("id","answearEight");
        label = document.createElement("label");
        label.setAttribute("for", "answearEight");
        label.innerHTML = "Вариант ответа №2";
        input.style.marginLeft = "100px";
        box = document.querySelectorAll(".box");
        box[0].appendChild(input);
        box[0].appendChild(label);

        input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.setAttribute("id","answearNine");
        label = document.createElement("label");
        label.setAttribute("for", "answearNine");
        label.innerHTML = "Вариант ответа №3";
        input.style.marginLeft = "100px";
        box = document.querySelectorAll(".box");
        box[0].appendChild(input);
        box[0].appendChild(label);
    },
    button: function(){
        var submit = document.createElement("input");
        submit.setAttribute("type", "submit");
        submit.setAttribute("value","Проверить мои результаты");
        submit.innerHTML = "Проверить мои результаты";
        submit.style.display = "block";
        submit.style.marginLeft = "295px";
        submit.style.width = "300px";
        submit.style.height = "50px";
        submit.style.color = "black";
        submit.style.fontSize = "14px";
        submit.style.background = "#9fc1f3";
        submit.style.border = "1px solid black";
        var wrapper = document.querySelectorAll(".wrapper");
        wrapper[0].appendChild(submit);
    }
};
test.wrapper();
test.main();
test.box();
test.question();
test.input();
test.button();


