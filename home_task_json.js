var request = require("request");
request("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3",function(err, res, boby){
    var pb = JSON.parse(res.body);    
    console.log("курсы валют: \n ", pb);
});
