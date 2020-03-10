const http = require("http");
const fs = require("fs");

const server = http.createServer(function(req,res){
    const url = req.url;
    
    if(url === "/"){
        fs.readFile("public/dashboard.html",function(err,file){
            let html = file;
            res.writeHead(200);
            res.end(html);
        });
    }
    else if(url === "/raumlist.html"){
        fs.readFile("public/raumliste.html",function(err,file){
            let html = raumlist_response(erstelleRaumString());
            res.writeHead(200);
            res.end(html);
        })
    }
    else if(url === "/dashboard.html"){
        fs.readFile("public/dashboard.html",function(err,file){
            let html = file;
            res.writeHead(200);
            res.end(html);
        })
    }
    else{
        fs.readFile(("public/"+url),function(err,file){
            if(err){
                fs.readFile("/public/404.html",function(err,file){
                    let html = file;
                    res.writeHead(404);
                    res.end(html);
                })
            }
            else{
                let html = file;
                res.writeHead(200);
                res.end(html);
            }
        })
    }
});

server.listen(8020,function(){
    console.log("Sever gestartet");
});

function erstelleRaumString(raumlistearray){
    array = "";
    let anzahl = 1;

    for(let i = 0; i < raumlistearray.length(); i++){
        array = anzahl + " " +
    }
}

function raumlist_response(liste){
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