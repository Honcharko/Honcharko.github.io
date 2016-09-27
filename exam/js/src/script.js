$(function () {

        //slider
        $('.bxslider').bxSlider({
            auto: true,
            minSlides: 1,
            maxSlides: 1,
            slideMargin: 10
        });


    //masonry + ajax

    function box (){
        let $grid = $('.grid');

        $grid.imagesLoaded(function () {

            $grid.masonry({

            itemSelector: '.grid__item',
                columnWidth: 235,
                gutter: 20
        });

        });
    }

    function find() {
        $('.holiday').find('div').remove();
        let search = $('.search__text').val();
        $.ajax({
            url: 'https://pixabay.com/api/?key=3142717-b3a5d4dc1e97faa042535919f&q=' + search + '&image_type=photo',
            method: 'GET',
            dataType: 'jsonp',
            success: function (data) {
                let $html = $('#pictures').html();
                let $content = tmpl($html, data);
                $('.holiday').append($content);
                box();
            },
            error: function () {
                alert('ajax query doesnt work');
            }

        });
    }
    find();

    $('.search_click').on('click', function (e) {
        e.preventDefault();
        find();
    })

});