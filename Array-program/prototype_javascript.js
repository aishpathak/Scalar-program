/*whenever we create an object,function,array,variable or anything. Javascript puts those hidden 
properties to an object and attach that object to our created object thats how object is able to access all hidden properties and method.

ex. arr.__proto__ this is an object which javascript attaches.
ex: our object is able to access the properties we assign it but it is also able to access hidden properties also.
*/

// if we do arr.__proto__.__proto__.__proto__;
//o/p: null;

let arr = ["Aish","Aditya","Ani"];
let object = {
    name: "Aish",
    city: "Gorakhpur",
    getIntro: function(){
        console.log(this.name + "from" +this.city); 
    }
}
function fn(){

}
var p = 10;

// with this it has become function property now any method can access it as call,bind and apply.
Function.prototype.mybind = function(){
    console.log("Aishaaa");
}
function fn2(){

}
function fn(){

}

// if we set something in object.__proto__ that property will also be accessible through any other object2.name or object2.city because that has
//become prototype property as we have push,filter or something  