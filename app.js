const express = require('express'),
app = express();
path = require('path');

//view engine : ejs
app.set("views",path.join(__dirname,'views'));
app.set("view engine","ejs");

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

const PORT = 3000;
let tasks= [];

app.get("/", (req,res) => {
  //  res.send("Now I'm working great")
  res.render('index',{
      'title':'To Do App',
      'tasks': tasks
  });
});



app.post('/',(req,res) => {
    tasks.push(req.body.task)
    res.redirect('/')
})

app.post("/delete/:taskName",(req,res) => {
    let taskName = req.params.taskName;
    tasks = tasks.filter((value)=>{
            if(value === taskName) return false
            else return true
  });
  res.redirect('/')
});




app.listen(PORT, () => {
       console.log("Server is listening");
});



