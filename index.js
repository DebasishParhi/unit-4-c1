const express =require("express")
 const a= express()

 a.get("/book",logger,(req,res)=>{
     return res.send({route:"/book"})
 })

 a.get("/libraries",logger,checkPermision("libraries"),(req,res)=>{
    return res.send({ route: "/libraries",Permission:true})
 })

 a.get ("/authors",logger,checkPermision("authors"),(req,res)=>{
     return res.send({ route: "/authors",Permission:true})
 })


 function logger(req,res,next){
     if(req.path=="/books"){
         console.log(req.path);
         next()
     }
     else if(req.path=="/libraries"){
         console.log(req.path);
         next()
     }
     else if(req.path=="/authors"){
        console.log(req.path);
        next()
    }
 }

 function checkPermision(Permission){
    return function logger(req,res,next){
        if(Permission=="libraries"){
            return next()
        }
        else if(Permission=="authors"){
            return next()
        }
        else{
            return false
        }
    }
 }

 a.listen(3000,()=>{
     console.log("listen in port 3000");
 })

 
