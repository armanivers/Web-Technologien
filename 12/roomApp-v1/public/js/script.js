function getViewportWidth() {
    return window.innerWidth ||
        document.documentElement.clientWidth;
}

console.log(`Die Viewbreite betragt ${getViewportWidth()} pixel.`);

class Buchung {
    constructor(bezeichnung, startzeit, endzeit, gebuchtVon, anzahlTeilnehmer, beschreibung) {
        this.bezeichnung = bezeichnung;
        this.startzeit = startzeit;
        this.endzeit = endzeit;
        this.gebuchtVon = gebuchtVon;
        this.anzahlTeilnehmer = anzahlTeilnehmer;
        this.beschreibung = beschreibung;
    }
}

class Raum {
    constructor(nummer, bezeichnung, gebaude, kapazitat, austattung) {
        this.nummer = nummer;
        this.bezeichnung = bezeichnung;
        this.gebaude = gebaude;
        this.kapazitat = kapazitat;
        this.austattung = austattung;
        this.buchungen = new Array();
    }

    addBuchung(buchung){
        this.buchungen.push(buchung);

        this.buchungen.sort(function(a,b){
            return b.startzeit - a.startzeit;
        })
    }
}
let buchung1 = new Buchung("Webtech", new Date(new Date().setHours(12, 00)), new Date(new Date().setHours(14, 00)), "Preis", 42, "Vorlesung fur Webtech");
let buchung2 = new Buchung("PK2", new Date(new Date().setHours(14, 00)), new Date(new Date().setHours(16, 00)), "Wiessman", 34, "Vorlesung fur PK2");
let buchung3 = new Buchung("KI", new Date(new Date().setHours(16, 00)), new Date(new Date().setHours(17, 00)), "Bab", 50, "Vorlesung fur KI");


let raum1 = new Raum("AE01", "Seminarraum", "EF42", 42, new Array("1 Beamer", "2 Tafeln"));
raum1.addBuchung(buchung1);
raum1.addBuchung(buchung2);
raum1.addBuchung(buchung3);

let raum2 = new Raum("AE02", "Computerraum", "EF42", 23, new Array("32 Computer", "1 Tafel"));
raum2.addBuchung(new Buchung("PK2", new Date(new Date().setHours(16, 00)), new Date(new Date().setHours(18, 00)), "Wiessman", 10, "PK2 Praktikum"));

let raumliste = [];
raumliste.push(raum1);
raumliste.push(raum2);

for (let raum of raumliste) {
    console.log(raum);
}


let tbody = document.querySelector("table tbody");

for(let raum of raum1.buchungen){
    let tr = document.createElement("tr");

    let datum = document.createElement("td");
    let datum_text = document.createTextNode(raum.startzeit.toLocaleDateString());
    datum.append(datum_text);

    let startzeit = document.createElement("td");
    let startzeit_zeit = document.createTextNode(raum.startzeit.toLocaleTimeString());
    startzeit.append(startzeit_zeit);

    let endzeit = document.createElement("td");
    let endzeit_zeit = document.createTextNode(raum.endzeit.toLocaleTimeString());
    endzeit.append(endzeit_zeit);

    let bezeichnung = document.createElement("td");
    let bezeichnung_text = document.createTextNode(raum.bezeichnung);
    bezeichnung.append(bezeichnung_text);

    tr.append(datum,startzeit,endzeit,bezeichnung);
    tbody.append(tr);
}
