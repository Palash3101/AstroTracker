import express from "express"
import mysql2 from "mysql2"
import cors from "cors"
 
const app = express()
app.use(express.json())
app.use(cors())

const id = 1234;

const db = mysql2.createConnection({
  host:"localhost",
  user:"root",
  password:"root",
  database:"astro",
  port:"3307"
})

app.get("/", (req, res)=>{
  const q = "select blog_id, title, short_desc, author_id from blog";
  db.query(q, (err,data)=>{

    if (err) return res.json(err);
    return res.json(data);
  })
})

app.get("/calender", (req, res)=>{
  const q = "select * from calender where cur_date between '2024-12-01' and '2024-12-10'";
  db.query(q, (err,data)=>{

    if (err) return res.json(err);
    return res.json(data);
  })
})


app.post("/signup", (req, res)=>{
  const q ="INSERT INTO user_data (`username`, `email`, `user_name`, `pass`) values (?)"
  const val =  [req.body.username, req.body.email, req.body.Name, req.body.password];
  console.log(val);
  
  db.query(q, [val], (err, data)=>{
    if (err) return res.json(err);
    return res.json(data);
  })
  
})


app.post("/login", (req, res)=>{
  const q ="SELECT * FROM user_data WHERE `username`=? and `pass`=?"
  console.log(req.body.username, req.body.password);
  
  db.query(q, [req.body.username, req.body.password], (err, data)=>{
    if (err) return res.json(err);
    
    if (data.length>0){
      return res.json("Pass")
    }
    else{
      return res.json("Fail")
    }
    
  })
  
})


app.get("/user/:username", (req, res)=>{
  const q = "select * from `user_data` where username=? ";

  db.query(q,[req.params.username] ,(err,data)=>{

    if (err) return res.json(err);
    return res.json(data);
  })
})

app.post("/user/:username/new", (req, res)=>{
  const q ="insert into blog (`title`, `short_desc`, `long_desc`, `category`, `date_published`, `author_id`) values(?);"
  const val =  [req.body.title, req.body.desc, req.body.content, null, new Date(), req.params.username];
  console.log(val);
  
  db.query(q, [val], (err, data)=>{
    if (err) return res.json(err);
    return res.json(data);
  })
})

app.get("/user/:username/blog", (req, res)=>{
  const q = "select blog_id, title, short_desc, author_id from blog where author_id=? ";

  db.query(q,[req.params.username] ,(err,data)=>{

    if (err) return res.json(err);
    return res.json(data);
  })
})

app.get("/blog/:id", (req, res)=>{
  const q = "select * from blog where blog_id="+req.params.id ;
  db.query(q,(err,data)=>{

    if (err) return res.json(err);
    return res.json(data);
  })
})

app.get("/blog/category/:category", (req, res)=>{
  const q = "select * from blog where category='"+req.params.category+"'";
  db.query(q,(err,data)=>{

    if (err) return res.json(err);
    return res.json(data);
  })
})

app.listen(8800, ()=>{
  console.log("Backend good")
})