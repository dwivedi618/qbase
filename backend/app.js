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
        'GET,POST,DELETE,PATCH,PUT'   
    );
    next();
});
app.use(bodyParser.json({limit:'1024kb'}));
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

//------------------------------*Models*----------------------------------
const User = sequelize.define("user",{
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        len: { args: [5, 100], msg:"email can't be bigger than 100"},

    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        len: { args: [6, 100], msg:"email can't be bigger than 100"},

    } 
});


const Question = sequelize.define("question",{
    question: {
        type: Sequelize.STRING
    },
    type: {
        type: Sequelize.STRING
    },
    unit: Sequelize.STRING,
    subject: Sequelize.STRING,
    topic: Sequelize.STRING,
    // image: Sequelize.BLOB,
    difficultyLevel: Sequelize.STRING,
    courseOutcome: {
        type: Sequelize.STRING
    },
    answerType: {
        type: Sequelize.STRING
    }
    
});

const Template = sequelize.define("template",{
    name: {
        type: Sequelize.STRING
    },
    string: {
        type: Sequelize.TEXT
    },
    thumbnail: {
        type: Sequelize.TEXT
    }
    
});

//------------------------------*Models End Here*----------------------------------

sequelize.sync({alter: false});


app.use((req, res, next) => {
  res.set("Content-Type", "application/json");
  next();
});


//---------------------------------routes------------------------------------
app.post("/login", async (req,res) => {
    console.log(req.body.email);
    
    const  user = await User.findOne({
        where: {
            email: req.body.email
        },
        raw: true
    });
    if (!user) return res.status(401).json({message: "Email not found"})
    if (user.password == req.body.password) {
        res.status(200).json({
            message: "Logged in successfully!", 
            token:"33ejfdsjfkadsjfkajdsfk",
            name: user.name,
            email: user.email
        });
        
   } else {
        res.status(401).json({
            message:"Invalid Password"
        });
   }
});

app.post("/signup", async (req,res) => {
    console.log("inside sign up",req.body);
    if(!req.body.name || !req.body.email || !req.body.password) 
        return res.json({message: "Please use proper Data"});
    await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    res.status(200).json({
        message: "user created" ,
    });
});

app.post("/upload-question", async (req,res) => {
    console.log("inside sign up",req.body);
    let params = req.body;
    if(!req.body) 
        return res.json({message: "Please use proper Data"});
    await Question.create({
        question: params.question,
        type: params.type,
        subject: params.subject,
        unit: params.unit,
        topic: params.topic,
        answerType: params.answerType,
        courseOutcome: params.courseOutcome,
        difficultyLevel: params.difficultyLevel

    });
    res.status(200).json({
        message: "Questoin uploaded" ,
    });
});

app.get("/get-question", async (req,res) => {
    console.log("from backend question")
    let params = req.body;
    let query = {
        raw: true
    };
    if(params.subject) query.where.subject = params.subject;
    if(params.topic) query.where.topic = params.topic;
    if(params.unit) query.where.unit = params.unit;
    if(params.courseOutcome) query.where.courseOutcome = params.courseOutcome;
    if(params.answerType) query.where.answerType = params.answerType;
    if(params.type) query.where.type = params.type;
    if(params.difficultyLevel) query.where.difficultyLevel = params.difficultyLevel;

    let questions = await Question.findAll(query);
    res.status(200).json({
        message: "user created" ,
        questions: questions
    });
    console.log("questions",questions)
});

app.post("/upload-template", async (req,res) => {
    let params = req.body;
    console.log("editor data---",params.thumbnail);
    if(!req.body) 
        return res.json({message: "Please use proper Data"});
    await Template.create({
        name: params.name,
        string: params.editorData,
        thumbnail: params.thumbnail
    });
    res.status(200).json({
        message: "template created" ,
    });
});

app.get("/get-template", async (req,res) => {
    let params = req.query;
    let query = {
        where: {

        },
        raw: true

    };
    if(params.id) query.where.id = params.id;
    // if(params.name) query.where.subject = params.subject;

    let templates = await Template.findAll(query);
    res.status(200).json({
        message: "successful" ,
        templates: templates
    });
});


app.put("/update-template", async (req,res) => {
    let params = req.body;
    let query = {
        where: {

        },
        raw: true

    };
    if(params.id) query.where.id = params.id;
    // if(params.name) query.where.subject = params.subject;

    let result = await Template.update(params,query);
    res.status(200).json({
        message: "successful" ,
        result: result
    });
});

app.put("/update-question", async (req,res) => {
    let params = req.body;
    let query = {
        where: {

        },
        raw: true

    };
    if(params.id) query.where.id = params.id;
    // if(params.name) query.where.subject = params.subject;

    let result = await Question.update(params,query);
    res.status(200).json({
        message: "successful" ,
        result: result
    });
});

app.delete("/delete-template", async (req,res) => {
    let params = req.body;
    console.log("deeeeeeelletteee teamplae",req);

    if(!params.template_id) return res.status(412);
    let query = {
        where: {
            id: params.id
        },
        raw: true

    };

    // if(params.name) query.where.subject = params.subject;

    let result = await Template.destroy(query);
    res.status(200).json({
        message: "successful" ,
        result: result
    });
});

app.delete("/delete-question", async (req,res) => {
    let params = req.body;
    console.log("deeeeeeelletteee teamplae",params);
    if(!params.template_id) return res.status(412);
    let query = {
        where: {
            id: params.id
        },
        raw: true

    };
    if(params.id) ;
    // if(params.name) query.where.subject = params.subject;

    let result = await Template.destroy(query);
    res.status(200).json({
        message: "successful" ,
        result: result
    });
});

app.get('/get-section-question', async(req,res) => {
    let params = req.query;
    console.log("paramsmms",params);
    let query = {
        attributes: ['string'],
        where: {
            id: params.templateId
        },
        raw: true
    }
    let template = await Template.findOne(query);
    let questions = await Question.findAll({
        attributes: ['question'],
        where: {
            
        },
        raw:true,
        offset: 1,
        limit: Number(params.count)
    });
    let queString = '';
    console.log("fhasdfaiydsfgh",queString);
    for(let j = 0; j < questions.length; j++){
        queString = queString + `<li> ${questions[j].question} </li> \n`;
    }
    queString = `<ol> ${queString} </ol>`;
    //console.log(    queString,questions);
    let splittedSection = params.section.replace('/ /g','').split('-');
    let splittedTemplate = template.string.split(splittedSection[0]);
    //test = `<ol><li>dfgsadfgsdfgsdf</li>\tshfadgajkhs </ol>`
    //console.log( "------>>>> ",splittedTemplate[1].replace(/\n/g," ").replace(/<ol>.*<\/ol>/,queString));
    let a = 0;
    for(let i = 1; i < splittedTemplate.length; i++){
        console.log(splittedTemplate[i].trim().charAt(1),"---",splittedSection[1]);
        if(splittedTemplate[i].split('<')[0].replace(/ /g,'').charAt(1) == splittedSection[1]) {
            console.log("thsi is the section nane",splittedSection[0]+"-"+splittedSection[1])
            splittedTemplate[i] = splittedTemplate[i].replace(/\n/g," ").replace(/<ol>.*<\/ol>/,queString);
            a=i;
            break;
        }
    }
    //console.log("iiiiiiiiiiiiiii",splittedTemplate[a])
    template.string = splittedTemplate.join(splittedSection[0]);
    //console.log("team11111",template);
    await Template.update({string: template.string},{where: {id: params.templateId}});
    res.json({
        message : "success getting section A question",
        queList: questions,
        editedTemplate: template.string
    });
});





//------------------Routes End Here-------------------------
app.use((req,res)=>{
    res.send("backend ruuning well")
})
module.exports.app = app;

