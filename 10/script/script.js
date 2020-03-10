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

let raum1 = new Raum("AE01", "Seminarraum", "EF42", 42, new Array("1 Beamer", "2 Tafeln"));
raum1.addBuchung(new Buchung("Webtech", new Date(new Date().setHours(12, 00)), new Date(new Date().setHours(14, 00)), "Preis", 42, "Vorlesung fur Webtech"));
raum1.addBuchung(new Buchung("PK2", new Date(new Date().setHours(14, 00)), new Date(new Date().setHours(16, 00)), "Wiessman", 34, "Vorlesung fur PK2"));
raum1.addBuchung(new Buchung("KI", new Date(new Date().setHours(16, 00)), new Date(new Date().setHours(17, 00)), "Bab", 50, "Vorlesung fur KI"));

let raum2 = new Raum("AE02", "Computerraum", "EF42", 23, new Array("32 Computer", "1 Tafel"));
raum2.addBuchung(new Buchung("PK2", new Date(new Date().setHours(16, 00)), new Date(new Date().setHours(18, 00)), "Wiessman", 10, "PK2 Praktikum"));

let raumliste = [];
raumliste.push(raum1);
raumliste.push(raum2);

for (let raum of raumliste) {
    console.log(raum);
}