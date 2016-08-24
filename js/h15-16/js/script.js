$(function(){
    $('.find').on('click', function(e){
        e.preventDefault();
    var search = $('.search').val();
        $.ajax({
            url: 'https://pixabay.com/api/?key=3142717-b3a5d4dc1e97faa042535919f&q='+ search +'&image_type=photo',
            method: 'GET',
            dataType: 'jsonp',
            success: function(data){
                $.each(data.hits, function(i, hits){
                    $('<img>').attr('src', hits.previewURL).appendTo('.result');
                    if(i == 10){return  false}
                });
            },
            error: function(){alert('ajax query doesnt work')}
        })
    });
});


// Task 2

function Human(name, age, sex, height, weight){
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.height = height;
    this.weight = weight;
}

function Worker(name, age, sex, height, weight, job, salary){
    Human.apply(this, arguments);
    this.job = job;
    this.salary = salary;
}
Human.prototype.work = function(){
    console.log(
        'My name is', this.name,
        'age:', this.age,
        'sex:', this.sex,
        'height:', this.height,
        'weight:' ,this.weight,
        'job:' ,this.job,
        'salary:' ,this.salary
    );
};


function Student(name, age, sex, height, weight, place, money){
    Human.apply(this, arguments);
    this.place = place;
    this.money = money;
}


Human.prototype.look = function(){
    console.log(
        'My name is', this.name,
        'age:', this.age,
        'sex:', this.sex,
        'height:', this.height,
        'weight:' ,this.weight,
        'place:' ,this.place,
        'money:' ,this.money
    );
};

var worker = new Human();
Worker.prototype = worker;


var student = new Human();
Student.prototype = student;

//Result

var newWorker1 = new Worker('Vova', 28, 'men', 182, 78, 'Builder', 1000);
console.log(newWorker1.work());

var newWorker2 = new Worker('Vasya', 30, 'men', 170, 70, 'Developer', 2500);
console.log(newWorker2.work());

var newStudent1 = new Student('Galina', 21, 'women', 150, 51, 'Politech', 700);
console.log(newStudent1.look());

var newStudent2 = new Student('Natalia', 20, 'women', 155, 53, 'Academia', 900);
console.log(newStudent2.look());

