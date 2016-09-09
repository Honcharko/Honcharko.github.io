requirejs.config({
    paths: {
        'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min'
    },
    shim: {
        'jquery': {
            exports: 'jQuery'
        },
        'tmpl':{
            exports: 'template'
        }
    }

});

require (
    [
        'jquery',
        'tmpl',
        'model',
        'view',
        'controller'
    ],
    function($, tmpl, Model, View, Controller){
        var firstOpt = ['html', 'css', 'javascript', 'jquery', 'JSON'];
        var model = new Model(firstOpt);
        var view = new View(model);
        var controller = new Controller(model, view);
    }

);
