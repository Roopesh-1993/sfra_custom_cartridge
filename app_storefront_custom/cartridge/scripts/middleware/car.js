function carDetails(req, res, next)
{
    // Create an object
     var cars =
   { car :   [
                {name:"Ford", models:["Fiesta", "Focus", "Mustang"], colors:["Black","Blue","White"],fuel:["Petrol","Diesel"], mainMarkets:["India","Europe","Brazil"]},
            
                {name:"BMW", models:["320", "X3", "X5"],colors:["Blue","Black","White"],fuel:["Diesel","Petrol"] , mainMarkets:["Europe","US","India"]},
            
                {name:"Fiat", models:["500", "Panda"],colors:["Black","white","Blue"],fuel:["Electric","Petrol","Diesel"] , mainMarkets:["Japan","Brazil"]}
            
            ]
        } ; 
        res.setViewData(cars);  
        
    next();
    
}


function carDetail(req, res, next)
 { 
        var car = { 
            name : "BMW",
           color  : "Black",
           model     : "Panda",
           
        };
        res.setViewData(car);
        next();
 }


 module.exports = {
                carDetail: carDetail,
                carDetails:carDetails
                };
  