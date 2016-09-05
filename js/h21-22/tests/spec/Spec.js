
var test = require('../js/test.js');

describe("test", function() {
    xit("sayHello()", function() {
        var result;

        result = test.sayHello('Vova');


        expect(result).toEqual('Hello, Vova');
    });

    it("pow()", function() {
        var result;

        result = test.pow(2, 2);


        expect(result).toEqual(4);
    });

    it("pow()", function() {
        var result;

        result = test.pow(0, 0);


        expect(result).not.toBeUndefined();
    });

    it("pow()", function() {
        var result;

        result = test.pow(1, 1);


        expect(result).not.toBeNull();
    });

    it("pow()", function() {
        var result;

        result = test.pow('error', 5);


        expect(result).toBeNaN();
    });
});


