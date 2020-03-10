let kacheln = document.getElementById("outside_container");

//Plus Kachel auf Dashboard erstellen statt mit HTML
let plus_kachel = document.createElement("div");
plus_kachel.setAttribute('class','kachel');

kacheln.append(plus_kachel);

let p = document.createElement("p");
let a = document.createElement("a");
a.setAttribute('class','fuelle_kachel');
a.textContent="+";
plus_kachel.append(p);
p.append(a);


plus_kachel.addEventListener("click", function(){

    var titel =prompt("Bitte geben Sie ein Titel ein!","Hier bitte Titel eingeben");
    var url =  "http://" + prompt("Bitte geben Sie eine URL ein!","Hier biite URL eingeben");
    
    //cancel returns null aber keine eingabe ist nicht null aber laenge == 0
    if(titel == null || titel.length == 0|| url == null || url.length == 0){
        window.alert("Titel oder URL Leer, keine Kachel wurde erstellt");
        return;
    }

    let div = document.createElement("div");
    div.setAttribute('class','kachel')
    plus_kachel.before(div);

    let p = document.createElement("p");
    let a = document.createElement("a");
    a.setAttribute('class','fuelle_kachel');

    //brauche ich nur href oder "https://" + url;
    a.setAttribute('href',url);
    a.textContent = titel;
    
    div.append(p);
    p.append(a);
});