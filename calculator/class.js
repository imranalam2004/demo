// var a = 10.9086;
// var b = 109086n;
// var c = BigInt(0xffff);
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// var d = "hello";
// var e = null;
// console.log(typeof d);
// console.log(typeof e);
// var s = Symbol();
// console.log(typeof s);
// var g = Symbol("H");
// var h = Symbol("H");
// console.log(g==h);

// let a = 21;
// let b = 33;
// let c = 44;

// if (a>b&&a>c) {
//         console.log("a");
        
// }
// else if (a<b&&b>c) {
//        console.log("b") ;
// } 
// else {
//         console.log("c");
// }

var event = require('events');
var obj= new event.EventEmitter;
obj.addListener("dancing",function(msg){
        console.log(msg)
}
)
obj.emit("dancing","lets dance");


