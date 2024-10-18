
const express = require('express');
const  app = express();

app.use((req,res,next)=>{
   console.log('Requete recue!');
   next();
});
app.use((req,res,next)=>{
   res.status(201);
   next();
});
app.use((req,res,next)=>{
    res.json({message:'votre requete a bien ete recue'})
    next();
});
app.use((req,res)=>{
    console.log('Requete envoyee avec succes!');
});
module.exports = app;