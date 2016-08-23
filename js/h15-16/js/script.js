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
    this.name = 'Vova';
    this.age = 28;
    this.sex = 'men';
    this.height = 182;
    this.weight = 76;
}

function Worker(job, salary, work){
    this.job = job;
    this.salary = salary;
    this.work = function(){
        console.log('i am work');
    }
}

function Student(place, money, look){
    this.place = place;
    this.money = money;
    this.look = function(){
        console.log('I am looking TV');
    };
}

var worker = new Human();

Worker.prototype = worker;
var newHuman = new Worker();

var student = new Human();
Student.prototype = student;
 var newStudent = new Student();

//Result

var newWorker1 = new Worker();
console.log(newWorker1.name);
var newWorker2 = new Worker();
console.log(newWorker1.age);

var newStudent1 = new Student();
console.log(newStudent.weight);
var newStudent2 = new Student();
console.log(newStudent2.height);

