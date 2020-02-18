const path = require("path");
const express = require('express');
const bodyParser = require("body-parser");
const Sequelize = require("sequelize");
const cors = require("cors");

const env = process.env.NODE_ENV || "development";
const conf = require(path.resolve(__dirname, "conf", env));
const Op = Sequelize.Op;

const app = express();

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET,POST'   
    );
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


let sequelize = undefined;
if (env === "production") {
    sequelize = new Sequelize(conf.db.uri);
} else {
    sequelize = new Sequelize(
      conf.db.database,
      conf.db.username,
      conf.db.password,
      conf.db.sequelize
    );
}

if (sequelize) {
    console.log("Database connected");
}

//models
const User = sequelize.define("user",{
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING
    } 
});


const Question = sequelize.define("question",{
    question: {
        type: Sequelize.STRING
    },
    type: {
        type: Sequelize.TINYINT
    },
    unit: Sequelize.TINYINT,
    subject: Sequelize.STRING,
    topic: Sequelize.STRING,
    image: Sequelize.BLOB,
    difficultyLevel: Sequelize.ENUM('LOW','MEDIUM','HIGH'),
});

sequelize.sync({alter:true});


app.use((req, res, next) => {
  res.set("Content-Type", "application/json");
  next();
});


//routes
app.post("/login", async (req,res) => {
    
    const  user = await User.findOne({
        where: {
            email: req.body.email
        },
        raw: true
    });
    if (!user) return res.send("Email could not found!");
    if (user.password == req.body.password) {
        console.log(req.body.name);
        res.json({
            message: "Logged in successfully!", 
            token:"33ejfdsjfkadsjfkajdsfk",
            name: user.name,
            email: user.email
        });
        
   } else {
        res.json({
            message:"Invalid Password"
        });
   }
});

app.post("/signup", async (req,res) => {
    console.log("inside sign up",req.body);
    await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    res.json({
        message: 'user created..' 
    });
});

app.use((req,res,next) => {
    res.send('hello t')
});


module.exports.app = app;

