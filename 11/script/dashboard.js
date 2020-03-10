let main = document.querySelector("main");

let plus_div = document.createElement("div");
plus_div.setAttribute('class','kachel');

main.append(plus_div);

let p = document.createElement("p");
let a = document.createElement("a");
a.setAttribute('class','fuelle_kachel');

plus_div.append(p);
p.append(a);
a.append(document.createTextNode("+"));

main.append(plus_div);


plus_div.addEventListener("click",function(){
    let name = prompt("Bitte geben Sie Ihren Namen ein!");
    let url = prompt("Bitte geben Sie Ihren Namen ein!");

    let div = document.createElement("div");
    div.setAttribute('class','kachel');

    plus_div.before(div);

    let p = document.createElement("p");
    let a = document.createElement("a");
    a.setAttribute('class','fuelle_kachel');

    a.setAttribute('href',url);
    a.textContent=name;

    div.append(p);
    p.append(a);

});