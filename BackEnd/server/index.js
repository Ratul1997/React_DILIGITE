const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const axios = require('axios').create({
    baseUrl : "https://jsonplaceholder.typicode.com/"
})
const cors = require('cors')

const PORT = 9001
const app = express();

/// establishing connection

const db = mysql.createConnection({
    connectionLimit : 100,
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'dlgt_project_1'
})

db.connect(function(error){
    if(error){
        console.log(error);
    }else{
        console.log('connected as ' + db.threadId);
    }
})

app.use(express.urlencoded({extended : true}));
app.use(cors())
app.use(express.json());


//// test run begins
app.get("/api" , (req, res) =>{
    const name = "amir";
    db.query(`SELECT * FROM test where name = '${name}'` ,(error , rows) =>{
        if(error){
            console.log(error);
        } else {
            res.send(rows)
        }
        console.log('The data from beer table are: \n', rows)
    })
})
////  test run ends
app.post('/signup' , (req , res) =>{
    const userHandleName = req.body.newUserDetails.userHandleName;
    const userPassword = req.body.newUserDetails.userPassword; 
    const userName = req.body.newUserDetails.userName;
    const userEmailAddress = req.body.newUserDetails.userEmailAddress;
    const userPhoneNumber = req.body.newUserDetails.userPhoneNumber;
    const userInsertedTime = req.body.newUserDetails.userInsertedTime;
    const userUpdatedTime = req.body.newUserDetails.userUpdatedTime;
    const sqlInstert = "INSERT INTO users (userId, userHandle, userPassword, userName, userPhoneNumber, userInsertedTime, userUpdatedTime , userEmailAddress) VALUES (?,?,?,?,?,?,?,?)";
    if(userHandleName){
        db.query(sqlInstert , ["NULL",userHandleName,userPassword,userName,userPhoneNumber,userInsertedTime,userUpdatedTime,userEmailAddress] , (error,result)=>{
            if(error){
                console.log(error);
            }else{
                console.log(result);
            }
        })
    }
    res.send("hey")
})

app.post('/login',(req,res) =>{
    const userHandleName = req.body.tempUserDetails.tempUserHandleName;
    const userEmailAddress = req.body.tempUserDetails.tempUserEmail;
    const userPassword = req.body.tempUserDetails.tempUserPassword;
    
    db.query(`SELECT * FROM users where userHandle = '${userHandleName}' and userEmailAddress = '${userEmailAddress}'
        and userPassword = '${userPassword}'`, (error,result) =>{
            if(error){
                console.log(error);
            } else {
                res.send(result);
                console.log(result);
            }
        }) 
})

app.post('/postNewElements',(req,res) =>{
    const userId = req.body.tempNewPost.postUserId;
    const postDescription = req.body.tempNewPost.postDescription;
    const postInsertedTime = req.body.tempNewPost.postInsertedTime;
    const postUpdatedTime = req.body.tempNewPost.postUpdatedTime;
    const postUserName = req.body.tempNewPost.postUserName;
    console.log(req.body.tempNewPost);
    const sqlInstert = "INSERT INTO posts (postId, userId, postDescription, postInsertedTime, postUpdatedTime,postUserName) VALUES (?, ?, ?, ?, ?,?)";
    if(userId){
        db.query(sqlInstert, ["NULL" , userId,postDescription,postInsertedTime,postUpdatedTime,postUserName],(error,result) =>{
            if(error){
                console.log(error);
            } else {
                console.log(result);
                res.send(result)
            }
        })
    }
})

app.get("/postListItems",(req,res) =>{
    db.query(`SELECT * FROM posts`,(error,rows) =>{
        if(error){
            console.log(error);
        } else {
            res.send(rows)
            console.log(rows);
        }
        // console.log('The data from beer table are: \n', rows)
    })
})
app.listen(PORT , () =>{
    // console.log(PORT);
    console.log(`Server listening on ${PORT}`);
});