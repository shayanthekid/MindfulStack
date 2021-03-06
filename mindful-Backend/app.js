 const express = require('express');
 const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const app=express().use('*', cors());
const Blog = require('./models/blog');
const User = require('./models/user');
//Database connection

 const dbURI = 'mongodb+srv://sajid:test123@mindful.vc3gm.mongodb.net/mindful?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result)=>{
   app.listen(3000);
}).catch((err) =>{
   console.log(err);
})

//register view engine
app.set('view engine' , 'ejs');



app.use(express.static('/public'));
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));
app.use(cors());
app.options('*', cors());

const allowlist = ['http://localhost:3000/all-events', 'http://localhost:3001']
 const corsOptionsDelegate = function (req, callback) {
    let corsOptions;
    if (allowlist.indexOf(req.header('Origin')) !== -1) corsOptions = { origin: true, credentials: true }
    else corsOptions = { origin: false } // disable CORS for this request
    callback(null, corsOptions) // callback expects two parameters: error and options
}

app.use(cors(corsOptionsDelegate));

var corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// //Sandbox

//Adding test blogs
app.get('/add-blog',(req,res)=>{

   const blog = new Blog({
      title : "Really new blog",
      date: "<2021-04-03>",
      venueStart: 3,
      venueEnd:6,
      seats: 4,
      price: 3000,
      image:"image1"
   });

   blog.save()
   .then((results)=>{
res.send(results);
   })
   .catch((err)=>{
      console.log(err);
   })
});
// app.get('/add-user',(req,res)=>{

//    const user = new User({
//       username : "Sajid",
//       password: "123"
//    });

//    user.save()
//    .then((results)=>{
// res.send(results);
//    })
//    .catch((err)=>{
//       console.log(err);
//    })
// });




app.get('/all-events', (req,res)=>{
Blog.find()
.then((result)=>{
   res.send(result)
}).
catch((err)=>{
   console.log(err);
})
});



app.post('/single-user',(req,res)=>{
   // console.log(req.body);
   // const blog = new Blog(req.body);

  const params = req.headers
 
   User.find({"username": params.username,"password":params.password})
   .then((result)=>{
      res.send(result)
   }).
   catch((err)=>{
      console.log(err);
   })
})





 app.get('/',(req,res) =>{
    res.redirect('/events');
 });

  app.get('/about',(req,res) =>{

   res.render('about');
 });


app.get('/events', (req,res)=>{
   Blog.find()
   .then((result)=>{
res.render('index',{title:'All blogs', blogs:result })
   })
   .catch((err)=>{
      console.log(err);
   })
})

app.post('/events',(req,res)=>{
const blog = new Blog(req.body);
blog.save()
.then((result)=>{
res.redirect('/events');
})
.catch((err)=>{
   console.log(err);
})
});

 app.get('/blogs/create', (req,res) =>{
     res.render('create');
 })

 app.use((req,res)=>{
    res.render('404');
 });