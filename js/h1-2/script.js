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
    if(isNaN(num) || isNaN(ex)) {
        alert("Введите числовое значение!");
    }else if(Number.isInteger(num) && Number.isInteger(ex)){
        console.log("result: "+ pow(num,ex));
        }else{
            alert("Введите целое число");
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
        var nameArr = secondName;
    }
}
if(secondName  == nameArr){
    alert(nameArr + ", Вы успешно вошли!");
}else{
    alert("Увы, Такого имени нет!");
}
