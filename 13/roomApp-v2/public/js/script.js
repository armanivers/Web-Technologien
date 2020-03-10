//Funktioniert nicht im Zusammenhand mit Node.js, weil Window under document. ... browserobjekte sind!
//deswegen klasse buchung/raum in server.js
//Funktion um viewportbreite auszugeben
function getViewportWidth(){
	return window.innerWidth || document.documentElement.clientWidth;
}
const ausgabe = `Die Viewport-Breite betragt ${getViewportWidth()} Pixel`;

console.log(ausgabe);

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
console.log(new Date("2010-01-01"));
console.log(startzeit);

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

//Raueme ausgeben
console.log(raum1);
console.log(raum2);

//Buchungen von raum1 anzeigen
for(let b of raum1.buchungen){
    console.log(b);
}


//Informationen zum Raum erstellen
let raumInfos=document.getElementById("rauminfos");

let nummer=document.createElement("li");
nummer.textContent="Nummer: "+ raum1.nummer;

let bezeichnung=document.createElement("li");
bezeichnung.textContent="Bezeichnung: "+ raum1.bezeichnung;

let kapazitaet=document.createElement("li");
kapazitaet.textContent="Kapazitaet: "+ raum1.kapazitaet;

let gebaude=document.createElement("li");
gebaude.textContent="Gebaeude: "+ raum1.gebaude;

let austattungsmerkmale=document.createElement("li");
austattungsmerkmale.textContent="Ausstattungsmerkmale: "+ raum1.austattungsmerkmale;

raumInfos.append(nummer,bezeichnung,kapazitaet,gebaude,austattungsmerkmale);

//Buchungen anzeigen
let buchungen = document.getElementById("buchungen");

for(let i=0;i<raum1.buchungen.length ; i++){

	let table_row = document.createElement("tr");

	//Frage, wann textContent = .. und wann createTextNode??? 
	//kommt es auf dem element an? (z.b. td vs li)

	//let datum = document.createElement("td");
	//datum.textContent = raum1.buchungen[i].startzeit.tolocaleDateString;
	//datum
	
	let datum=document.createElement("td");
	let datum_text=document.createTextNode(raum1.buchungen[i].startzeit.toLocaleDateString());
	datum.append(datum_text);
	
	//startzeit
	let startzeit=document.createElement("td");
	let startzeit_text=document.createTextNode(raum1.buchungen[i].startzeit.toLocaleTimeString());
	startzeit.append(startzeit_text);
	
	//eZeit
	let endzeit=document.createElement("td");
	let endzeit_text=document.createTextNode(raum1.buchungen[i].endzeit.toLocaleTimeString());
	endzeit.append(endzeit_text);
	
	//bezeichnungTD
	let bezeichnung=document.createElement("td");
	let bezeichnung_text=document.createTextNode(raum1.buchungen[i].bezeichnung);
	bezeichnung.append(bezeichnung_text);
	
	table_row.append(datum,startzeit,endzeit,bezeichnung);
	
	buchungen.append(table_row);
	
	}

	