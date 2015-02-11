angular.module('sourceConstant', [])

.constant('constant1', [4, 5, 6, "hello",
{
    "1": 4,
    a: 2,
    b: 3,
    "if": 5,
    yes: true,
    no: false,
    nan: NaN,
    infinity: Infinity,
    "undefined": undefined,
    "null": null,
    foo: function (bar) {

    }
}, /we$/gi, new Date(807926400000)])

;;