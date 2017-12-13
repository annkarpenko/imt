var Event=require("events").EventEmitter;
var emt=new Event();
var userName="Adam";

emt.on("logIn", function(userName){
	console.log(new Date().toLocaleString() + userName + " вошел в чат");
})

emt.on("someAction", function(){
	console.log(new Date().toLocaleString() + userName + " изменил статус");
})

emt.on("logout", function(){
	console.log(new Date().toLocaleString() + userName + " вышел из чата");
})


emt.emit("logIn", userName);
emt.emit("someAction", userName);
emt.emit("logout", userName);
