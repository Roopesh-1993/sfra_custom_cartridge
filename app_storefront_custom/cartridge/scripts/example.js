// 'use strict';

//  function test(req, res, next) { 
//     var details={firstName : "Roopesh",
//     lastName  : "Rock",
//     age     : 28,
//     eyeColor  : "Red"

// };
//     res.setViewData(details);
    
    
// next();
// }
//     module.exports = {
//         test: test,
//      };

    'use strict';

    //printing customers details
function test() { 
var customer_details={
    firstName : "Roopesh",
     lastName  : "Rock",
     age     : 28,
    eyeColor  : "Red"
};
return customer_details;
}

//return the function
function roopesh(){
    return "roopesh";
}

//using array
function course(){
var course1 = [ "Java" , " SQL" , "Web" , "Python" , "Testing"]
return course1;
}

//using if condition
function condition(){
   var x = 10;
   var condition;
    if (x > 5) {
     condition=  true;
  }else{
   condition= false;
  }
  ​return condition;
}

//using forloop condition
function loop(){
    let text="";
    for(var i=20;i>10;i--){
        text+=" "+i+" ";
    }
    return text;
}

//adding two numbers
function addTwoNumbers(x, y) {
    let x = 2;
    let y =3;
    return x + y;
}

//printing multiple data
function jsonData(){
    var data = {
        fname: "John",
        age: 22,
        hobby: {
        "reading" : true,
        "gaming" : false,
        "sport" : "football"
        },
        class : ["JavaScript", "HTML", "CSS"]
    }
    return [data.fname, data.age, data.hobby.sport, data.class[0]];
}

//using dowhileLoop
function whileLoop(){
    let i = 1;
    var n=5;
    var value = "";

    // do...while loop from 1 to 5
    do {
        value += "  "+ i+"  ";
        i++;
    } while(i <= n);

 return value;

}


//using break point
function breakLoop(){
    var values = " ";
    
    for (let i = 1; i <= 5; i++) {
        values +=" " +i+" ";
       
        if (i == 3) {
           
            break;
        }
        
    }
    return values;
}
    module.exports = {
        test: test,
        roopesh:roopesh,
        course:course,
        condition:condition,
        loop:loop, 
        addTwoNumbers:addTwoNumbers, 
        jsonData:jsonData,
    whileLoop:whileLoop,
    breakLoop:breakLoop};