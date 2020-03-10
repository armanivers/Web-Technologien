//express Modul einbinden
const express = require("express");

//express initialisierung
const app = express();

//Ejs als template-engine konfigurieren
app.set("view engine","ejs");
//Verzeichnis in welchem sich die ejs templates befinden
app.set("views","views");

//Routerlogik Modul einbinden
const router = require('./routes/routes.js');
//app sagen, dass es auch durch andere ordner suchen soll, sonst guckt es nur im root verzeichnis des dokumentes
app.use(express.static("public"));

//Router registrieren, Router verwaltet Routinen die mit "/app" beginnen
//mit "/" funktioniert aber mit "/app" nicht!
app.use("/",router);

app.listen(8040,function(){
    console.log("Server laeuft auf localhost:8040");
});
