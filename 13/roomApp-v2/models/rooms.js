
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
// let buchung1 = new Buchung("Vorlesung Webchtechnologien",startzeit,endzeit,"Preis",30,"asdjaoisdjaoisjdoijasoidj");
// let buchung2 = new Buchung("Vorlesung Pk2",new Date(new Date().setHours(12,00)),new Date(new Date().setHours(14,00)),"Wies",20,"asdjaoisdjaoisjdoijasoidj");
// let buchung3 = new Buchung("Vorlesung Pk1",new Date(new Date().setHours(10,20)),new Date(new Date().setHours(11,00)),"Kas",10,"asdjaoisdjaoisjdoijasoidj");

//Raumausstattungen erzugen
let raum1_austattung = ["1 Beamer", " 2 Tafeln"]
let raum2_austattung = ["2 Beamer", " 1 Tafel"]

//Raueme erzeugen
let raum1 = new Raum("A.E.01","Hoersaal","EF 42",150,raum1_austattung);
// raum1.addBuchung(buchung1);
// raum1.addBuchung(buchung2);
// raum1.addBuchung(buchung3);
let raum2 = new Raum("A.3.03","Ubungsraum","EF 42",20,raum2_austattung);
let raum3 = new Raum("A.3.04","Seminar","EF 42",20,raum2_austattung);

//Array damit wir die Raumobjekte speichern
const raeume_liste = [];

//Array mit den Raumobjekte fuellen
raeume_liste.push(raum1);
raeume_liste.push(raum2);
raeume_liste.push(raum3);

module.exports.raeume_liste = raeume_liste; 