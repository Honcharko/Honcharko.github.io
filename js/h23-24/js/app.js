requirejs.config({
    paths: {
        'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery'
    },
    shim: {
        'jquery': {
            exports: 'jQuery'
        }
    }

});

require (
    [
        'model',
        'jquery'
    ],
    function(model, $){
        console.log('model', model);
        console.log('$', $);
        model.sayHello();
    }

);
