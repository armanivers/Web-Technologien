//Server Module
const http = require("http");

//Dateizugriff Module
const fs = require("fs");



const server = http.createServer(function(request,response){

    const filename = 'public'+request.url; //request.url wurde als etwas anderes returned? fs.existsSync(filename) wurde nicht erkannt auch mit substring nicht
    
    const method = request.method;

    console.log("Filepath = " +filename); //filename.substring(1,filename.length) und hier statt filename eigentlich request1

    //Favicon Anfrage ignorieren
    if(filename.substring(6,filename.length) === '/favicon.ico'){
        //do nothing
        response.end;
        return;
    }

    //Antwort html, am Afang leer
    var html = null;

    if(method === "GET"){

        //falls "/"
        if(filename.substring(6,filename.length) === "/"){
          fs.readFile("public/dashboard.html",
                function(err,file){
                html = file;
                response.writeHead(200);
                response.end(html);
                });
  }

        //falls raumliste angezeigt werden soll (davor "public/WT_PR03_1.html")
        if(filename.substring(6,filename.length) === "/raumliste.html"){
                //funktion aufrufen welche die HTML seite dynamisch erzeugt mit parameter das Array welche die Raueme enthaelt
                html = raeume_liste_response(erstelleRaumString());
                response.writeHead(200);
                response.end(html);
        }

        //falls name leer -> dashboard anzeigen
        else if(filename.substring(6,filename.length).length === 0){
            fs.readFile("public/dashboard.html",
                function(err,file){
                html = file;
                response.writeHead(200);
                response.end(html);
                });
        }


        else{
          
            //Gucke ob file existiert und offne es sofort
            fs.readFile(filename,
                function(err,file){
                  if(err){
                    fs.readFile('public/404.html',
                    function(err,file){
                    console.log("KEINE DATEI VORHANDEN,PAGE 404 OFFNEN RESSOURCE= " +filename);
                    html = file;
                    response.writeHead(404);
                    response.end(html);
                });
                  }
                  else{               
                 //console.log(filename+" GEOFFNET");
                //console.log("File existiert "+filename);
                html = file;
                response.writeHead(200);
                response.end(html);
                  }
                
            });

            //falls oben file nicht existiert dann einfahc 404 html nutzen
            

        }
        }
});

server.listen(8020,function(){
    console.log("Server laeuft auf http://localhost:8020");
});


//Klasse fuer Buchungen
class Buchung{
	
	constructor(bezeichnung,startzeit,endzeit,gebuchtVon,anzahlTeilnehmer,beschreibung){
		this.bezeichnung = bezeichnung;
		this.startzeit = startzeit;
		this.endzeit = endzeit;
		this.gebuchtVon = gebuchtVon;
		this.anzahlTeilnehmer =anzahlTeilnehmer;
		this.beschreibung = beschreibung;
	}
}

//ein Weg Date Variable zu erzeugen
const startzeit = new Date();
startzeit.setHours(13,20);
const endzeit = new Date();
endzeit.setHours(15,20);
//anderen Weg
//console.log(new Date("2010-01-01"));
//console.log(startzeit);

//Klasse fuer Raueme
class Raum{

	constructor(nummer,bezeichnung,gebaude,kapazitaet,austattungsmerkmale){
		this.nummer = nummer;
		this.bezeichnung = bezeichnung;
		this.gebaude = gebaude;
		this.kapazitaet = kapazitaet;
		this.austattungsmerkmale = austattungsmerkmale;
		this.buchungen = [];
	}

	addBuchung(buchung){
		this.buchungen.push(buchung);
		this.buchungen.sort(function(a,b){
			return b.startzeit - a.startzeit;
		})

	}
}

//Buchungen erstellen
let buchung1 = new Buchung("Vorlesung Webchtechnologien",startzeit,endzeit,"Preis",30,"asdjaoisdjaoisjdoijasoidj");
let buchung2 = new Buchung("Vorlesung Pk2",new Date(new Date().setHours(12,00)),new Date(new Date().setHours(14,00)),"Wies",20,"asdjaoisdjaoisjdoijasoidj");
let buchung3 = new Buchung("Vorlesung Pk1",new Date(new Date().setHours(10,20)),new Date(new Date().setHours(11,00)),"Kas",10,"asdjaoisdjaoisjdoijasoidj");

//Raumausstattungen erzugen
let raum1_austattung = ["1 Beamer", " 2 Tafeln"]
let raum2_austattung = ["2 Beamer", " 1 Tafel"]

//Raueme erzeugen
let raum1 = new Raum("A.E.01","Hoersaal","EF 42",150,raum1_austattung);
raum1.addBuchung(buchung1);
raum1.addBuchung(buchung2);
raum1.addBuchung(buchung3);
let raum2 = new Raum("A.3.03","Ubungsraum","EF 42",20,raum2_austattung);
let raum3 = new Raum("A.3.04","Seminar","EF 42",20,raum2_austattung);

//Array damit wir die Raumobjekte speichern
const raeume_liste = [];

//Array mit den Raumobjekte fuellen
raeume_liste.push(raum1);
raeume_liste.push(raum2);
raeume_liste.push(raum3);

function erstelleRaumString(){

  var string = "";
  var anzahl = 1;

  for(let raueme of raeume_liste){
    string +=
    `
    <li>
    <b>Raum ${anzahl} </b>
    <ul>
      <li>Nummer: <a href="${raueme.nummer}.html">${raueme.nummer}</a></li>
      <li>Bezeichnung: ${raueme.bezeichnung}</li>
      <li>Gebäudebezeichnung: ${raueme.gebaude}</li>
    </ul>
  </li>
  `
  anzahl++;
  }
  return string;
}

function raeume_liste_response(liste){
    return `<!DOCTYPE html>
    <html lang="de">
      <head>
        <meta charset="utf-8" />
        <title>Raumliste</title>
        <link rel="stylesheet" type="text/css" href="css/style.css" />
        <link rel="stylesheet" type="text/css" href="css/flexbox.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
      </head>
      <body>
        <script src = "js/script.js"></script>
        <!--Header für die Navigation und die Raumsuche-->
        <div id="container_rot">
          <!--Roter Container-->
          <header>
            <h1>Raumapp</h1>
            <a href="dashboard.html">
              <img
                src="img/Logo.jpg"
                alt="Logo"
                id="logo_image"
                height="80"
                width="80"
              />
            </a>
          </header>
    
          <nav>
            <b>Navigation:</b>
            <ul>
              <li><a href="A.E.01.html">Raumdetails</a></li>
              <li>|</li>
              <li><a href="WT_PR03_3_Buchungen1.html">Buchungsdetails</a></li>
              <li>|</li>
              <li><a href="WT_PR03_A4_Seminar1.html">Buchungsformular</a></li>
            </ul>
          </nav>
    
          <!--Main für die Raumliste-->
          <div id="gruen">
            <main id="schwarz">
              <h2>Raum Suchen:</h2>
              <form
                action="https://labs.inf.fh-dortmund.de/roomReservationService/testRoomSearch.php"
                method="GET"
              >
                <label for="roomno">Raumnummer suchen</label>
                <input
                  type="text"
                  name="roomno"
                  id="roomno"
                  list="raumvorschläge"
                  pattern="[A-Z][\.][E123][\.][0-9]{2}"
                  placeholder="Raumnummer"
                  required
                /><br />
                <datalist id="raumvorschläge">
                  <option value="A.E.01"> </option>
                  <option value="A.3.03"> </option>
                  <option value="A.2.23"> </option>
                </datalist>
    
                <button type="submit" id="raumnummer_button">Finden</button>
              </form>
              <h3>Raumliste:</h3>
              <ul>
               ${liste}
              </ul>
            </main>
            <!--Aside für die Meldungen-->
            <aside>
              <h4>Aktuelle Meldungen:</h4>
              <ul>
                <li>
                  <b>Handy verloren</b>
                  <ul>
                    <li>06.10.2019</li>
                    <li>
                      Gestern wurde auf den Parkplätz ein schwarzes Smartphone der
                      Marke Sony gefunden.<br />
                      Wir bitten den/die Besitzer/in dieses im Sekretäriat
                      abzuholen.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Autoschlüssel verloren</b>
                  <ul>
                    <li>29.09.2019</li>
                    <li>
                      Gestern wurde vor dem Parkplätz ein Autoschlüssel eines BMW
                      gefunden.<br />
                      Wir bitten den/die Besitzer/in diesen im Sekretäriat
                      abzuholen.
                    </li>
                  </ul>
                </li>
              </ul>
            </aside>
          </div>
          <!--Footer für das Copyright-->
          <footer>
            Copyright--© 2019 Arman Iliev & Dustin Cziurlok
          </footer>
        </div>
        <!--Roter Container-->
      </body>
    </html>
    `;
}

module.exports.raeume_liste = raeume_liste;