    //Task 1
function pow(base, exp){
    var result = 1;
    for(var i = 0; i < exp; i++){
        result *=  base;
    }
    return result;
}
var num = +prompt("Введите число :"," ");
var ex = +prompt("Введите степень :"," ");
    if(typeof (num) == "number" && typeof (ex) == "number"){
        if(Number.isInteger(num) && Number.isInteger(ex)){
        console.log(pow(num,ex));
        }else{
            alert("Не число");
        }
    }else{
        alert("Введите число!");
    }
    //Task 2
var arr =[];
for(var i = 0; i < 5; i++){
    var name = prompt("Введите имя","");
    arr.push(name);
    console.log(arr);
}
var secondName = prompt("Введите имя","");
for (var i = 0;i < arr.length; i++){
    if(secondName  == arr[i]){
        alert(secondName + ", Вы успешно вошли!");
    }else{
        alert("Такого имени нет!");
    }
}

