
// creating function
function carDetails()
{
    // Creating an object
     var cars = 
   { car :   [
               { name :'Ford',  models :"Fiesta", fuel:"Petrol",  color : 'Blue', mainMarkets : "India"},
              
               { name :'BMW',   models :"X3",     fuel:"Diesel",  color : 'Red', mainMarkets : "US"},
              
               { name :'Fiat',  models :"Panda",  fuel:"Petrol",  color : 'Black', mainMarkets : "Chinna"},
              
               { name :'Volvo', models :"XC40",   fuel:"Electric", color : 'White', mainMarkets : "Brazil"},
              
               { name :'Saab',  models :"Monstar", fuel:"Petrol",  color : 'Orange', mainMarkets : "Japan"},
              
               { name :'Toyota', models :"Avalon", fuel:"Electric",color : 'Pink', mainMarkets : "Europe"},
              
               { name :'Audi',  models :"A6",      fuel:"Diesel",  color : 'White', mainMarkets : "Australia"},
              
               { name :'Kia',   models :"Seltos",  fuel:"Petrol",  color : 'blue', mainMarkets : "India"}

            ]
        }  ;   
    return cars;
}
    module.exports ={carDetails:carDetails}



    // for(var i=0;i<cars.car.length;i++)
    // {
    //     // for(var j=0;j<=i;j++)
    //     // {
    //         return cars.car[i].models.length;  
    //     // }
    // }
//     let carInformation = "";
// for (var i=0; i<cars.car.length; i++ ) {
//   carInformation += cars.car[i].name + " " + cars.car[i].models+ " " +cars.car[i].colors +" " +cars.car[i].fuel;
// }
//     // for (var pqr in  abc.cars)
//     // {
//     //     var carName = carDetails('pqr');
//     //     cars.carDetails.push(carName);
//     // }
//     return carInformation;
// } 

// function makeEmployees(n) {
//     var employees = new Array(n)
//     for (var i = 0; i < n; ++i) {
//       employees[i] = new Employee()
//     }
//     return employees
//   }

  