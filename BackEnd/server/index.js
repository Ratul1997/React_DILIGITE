const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const axios = require('axios').create({
    baseUrl : "https://jsonplaceholder.typicode.com/"
})


///make it in FOlders///
const cors = require('cors')


///env file
const PORT = 9001
const app = express();

/// establishing connection



const db = mysql.createConnection({
    ///env file
    connectionLimit : 100,
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'dlgt_project_2'
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
app.post('/signup',(req , res) =>{
    const userHandleName = req.body.newUserDetails.userHandleName;
    const userPassword = req.body.newUserDetails.userPassword; 
    const userName = req.body.newUserDetails.userName;
    const userEmailAddress = req.body.newUserDetails.userEmailAddress;
    const userPhoneNumber = req.body.newUserDetails.userPhoneNumber;
    const userInsertedTime = req.body.newUserDetails.userInsertedTime;
    const userUpdatedTime = req.body.newUserDetails.userUpdatedTime;
    const sqlInstert = "INSERT INTO users ( userHandle, userPassword, userName, userPhoneNumber, userInsertedTime, userUpdatedTime , userEmailAddress) VALUES (?,?,?,?,?,?,?,?)";
    if(userHandleName){
        db.query(sqlInstert , [userHandleName,userPassword,userName,userPhoneNumber,userInsertedTime,userUpdatedTime,userEmailAddress] , (error,result)=>{
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
    
    
    ///Qurery Diffrent folder
    db.query(`SELECT * FROM users where userHandle = '${userHandleName}' and userEmailAddress = '${userEmailAddress}'
        and userPassword = '${userPassword}'`, (error,result) =>{
            if(error){
                console.log(error);
            } else {
                
                /// response status code///
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
    const sqlInstert = "INSERT INTO posts (userId, postDescription, postInsertedTime, postUpdatedTime, postUserName) VALUES (?, ?, ?, ?, ?,?)";
    const postData = [userId,postDescription,postInsertedTime,postUpdatedTime,postUserName.noOfLikes]
    if(userId){
        db.query(sqlInstert, postData ,(error,result) =>{
            if(error){
                /// response for error
                res.status(500).json({msg:error.message});
                console.log(error);
            } else {
                console.log(result);
                
                const jsonObject = {
                    total_post: result.length,
                    posts:[...result]
                }
                res.status(201).json(jsonObject)
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

{/**getting logged in user's posts */}
app.post("/userPosts",(req,res) =>{
    const userId = req.body.authorisedUserDetails.userId;
    db.query(`SELECT * FROM posts WHERE userId = '${userId}'`,(error,rows) =>{
        if(error){
            console.log(error);
        } else {
            res.send(rows)
            console.log(rows);
        }
    })
})

{/**getting user info */}
app.post("/userInfo",(req,res) =>{
    const userId = req.body.updateUserDetails.userId;
    db.query(`SELECT * FROM users WHERE userId = '${userId}'`,(error,rows) =>{
        if(error){
            console.log(error);
        } else {
            res.send(rows)
            console.log(rows);
        }
        // console.log('The data from beer table are: \n', rows)
    })
})

{/**updating user info  */}
app.post("/updateUserInfo",(req,res) =>{
    const userId = req.body.updateUserDetails.userId;
    
    if(userId === null) res.status(401).json({msg:'Unauthorized'})
    
    const currentTime = new Date()
    
    
    const {updateUserDetails }= req.body
    const userHandleName = updateUserDetails.userHandleName || null;
    const userName = updateUserDetails.userName || null ;
    const userEmailAddress = updateUserDetails.userEmailAddress;
    const userPhoneNumber = updateUserDetails.userPhoneNumber;
    const userPassword = updateUserDetails.userPassword;
    const userUpdatedTime = updateUserDetails.userUpdatedTime || currentTime;
    db.query(`UPDATE users SET userHandle='${userHandleName}', userPassword='${userPassword}', userName='${userName}', userPhoneNumber='${userPhoneNumber}', userUpdatedTime='${userUpdatedTime}', userEmailAddress='${userEmailAddress}' WHERE userId = '${userId}'`,(error,rows) =>{
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
