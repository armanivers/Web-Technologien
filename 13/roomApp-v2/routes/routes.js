const express = require("express");
const router = express.Router();

//Raeuem Modul einbinden
const rooms = require('../models/rooms.js');

//Routen auf der Router-Instanz definieren

router.get("/",function(req,res,next){
    console.log("Dashboard");
    res.render("Dashboard");
});

router.get("/dashboard",function(req,res,next){
    console.log("Dashboard");
    res.render("Dashboard");
});

router.get("/raumliste",function(req,res,next){
    console.log("raumliste");
    res.render("raumliste",{raumListe:rooms.raeume_liste});
});

router.get("/raumdetail",function(req,res,next){
    console.log("raumdetail");
    //davor war res.render("A.E.01");
    res.render("raumdetail");
});

router.get("/buchungsdetail",function(req,res,next){
    console.log("buchungsdetail");
    res.render("buchungsdetail");
});

router.get("/neuebuchung",function(req,res,next){
    console.log("neuebuchung");
    res.render("neuebuchung");
});

router.get("/*",function(req,res,next){
    console.log("404");
    res.render("404");
});
//Router zugreifbar machen
module.exports = router;