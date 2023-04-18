const express=require('express');
const app=express();
const bodyParser = require('body-parser');
const mysql=require('mysql');
const cors=require("cors");


const db=mysql.createPool(
    {
        host: "localhost",
        user: "root",
        password: "",
        database: "crud"
    
    }
)



app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(express.json());

app.get("/api/get",(req,res)=>{
    const sqlInsert="SELECT * FROM student_details";
    db.query(sqlInsert,(err,result)=>{
        res.send(result);
    })
})


app.post("/api/post",(req,res)=>{
    const {f_name,l_name,location,email,dob,education,about,id}=req.body;
    const sqlInsert="INSERT INTO student_details(f_name,l_name,location,email,dob,education,about) VALUE(?,?,?,?,?,?,?)"; 
    db.query(sqlInsert,[f_name,l_name,location,email,dob,education,about,id],(err,result)=>{
        if(err){
            console.log('error',err)
        }
        else{
            console.log(result)
        }
    })
})

app.delete("/api/remove/:id",(req,res)=>{
    const { id }=req.params;
    const sqlRemove="DELETE FROM student_details WHERE id = ?"; 
    db.query(sqlRemove,id,(err,result)=>{
        if(err){
            console.log('error',err)
        }
        else{
            console.log(result)
        }
    })
})

app.get("/api/get/:id",(req,res)=>{
    const { id }=req.params;
    const sqlGet="SELECT * FROM student_details WHERE id= ?";
    db.query(sqlGet,id,(err,result)=>{
        if(err){
            console.log('error',err)
        }
        res.send(result);
    })
})

app.put("/api/update/:id",(req,res)=>{
    const { id }=req.params;
    const {f_name,l_name,location,email,dob,education,about}=req.body;
    const sqlUpdate="UPDATE student_details SET f_name=?,l_name=?,location=?,email=?,dob=?,education=?,about=? WHERE id=?";
    db.query(sqlUpdate,[f_name,l_name,location,email,dob,education,about,id],(err,result)=>{
        if(err){
            console.log('error',err)
        }
        res.send(result);
    })
})
   

app.listen(3000,()=>{
})


