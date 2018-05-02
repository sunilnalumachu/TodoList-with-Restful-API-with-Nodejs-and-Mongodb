var express= require('express'),
 app=express(),
port = process.env.PORT || 3000;

mongoose=require('mongoose'),
Task =require('./api/models/TodoListModels'),
bodyParser=require('body-parser');

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/TodoListRouters'); 
routes(app); 



app.listen(port);

console.log('todo list restful web services API started:'  +port);