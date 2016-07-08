var test = {
    main: "Тест по программированию",
    questions : ["№1", "№2", "№3"],
    text: "Проверить мои результаты",
    title: function(main){
        var div;
        div = document.createElement("h3");
        div.innerHTML = this.main;
        div.style.textAlign = "center";
        document.body.appendChild(div);
    },
    counter: function() {
        var c = this.questions.length;
        var ul, li, p, input;
        for (var i = 0; i < c; i++) {
            p = document.createElement("p");
            p.innerHTML = Number(i+1)+ ".Вопрос " +this.questions[i];
            document.body.appendChild(p);
            p.style.marginLeft = "80px";
            ul = document.createElement("ul");
            p.appendChild(ul);
            for (var q = 0; q < c; q++) {
                li = document.createElement("li");
                li.style.listStyle = "none";
                input = document.createElement("input");
                input.setAttribute("type","checkbox");
                ul.appendChild(input);
                input.style.float = "left";
                input.style.paddingLeft = "100px";
                li.innerHTML = "Вариант ответа " + this.questions[q];
                ul.appendChild(li);

            }

        }

    },
    button: function() {
        var form, button;
        form = document.createElement("form");
        document.body.appendChild(form);
        form.style.textAlign = "center";
        button = document.createElement("button");
        button.innerHTML = this.text;
        button.style.width = "300px";
        button.style.height = "50px";
        button.style.fontSize = "14px";
        button.style.background = "#9fc1f3";
        button.style.border = "1px solid black";
        button.setAttribute("formaction", "#");
        form.appendChild(button);
    }
};

test.title();
test.counter();
test.button();