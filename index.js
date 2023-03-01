const express = require('express');
const app = express()
const port = 5000;
const config = require('./config/key')

const { User } = require("./models/User");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI)
.then(()=>{console.log('MongoDB Connected..')})
.catch(err=>{console.log(err)})


app.get('/', (req,res) => {res.send('Hello world!')});

app.post('/register',(req,res)=>{
  //회원 가입 할 떄 필요한 정보들을 client에서 가져오면
  //그것들을 데이터 베이스에 넣어준다.

  const user = new User(req.body);
  console.log(user);
  user.save();
});



app.listen(port,()=>{console.log(`Example app listening on part ${port}`)});