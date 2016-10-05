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
        let firstOpt = ['html', 'css', 'javascript', 'jquery', 'JSON'];
        let model = new Model(firstOpt);
        let view = new View(model);
        let controller = new Controller(model, view);
    }

);
