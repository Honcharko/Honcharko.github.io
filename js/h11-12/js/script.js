$(function(){
   $('.carousel').carousel();
   //Task 2
   var html = $('.template').html();
   var dev ={
      name: 'Frontend developer'
   };
   var ed ={
      learn: 'Хочу учить фронтенд,&nbsp;&nbsp;потому что:'
   };
   var info = [
      {
         content: 'Прогрессирующая сфера деятельности'
      },
      {
         content: 'Интересная работа'
      },
      {
         content: 'Увлекательная работа'
      }
   ];
   var content = tmpl(html, {
      data: info,
      dataSecond: dev,
      dataThird: ed
   });

   $('body').append(content);
});