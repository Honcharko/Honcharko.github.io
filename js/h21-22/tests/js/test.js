var test = {

    pow: function pow(base, exp){
        var result = 1;
        for(var i = 0; i < exp; i++){
            result *=  base;
        }
        return result;
    },

    sayHello: function(name){
        return 'Hello, ' + name;
    }
};



    try {
        module.exports = test;
    }catch(e){}

