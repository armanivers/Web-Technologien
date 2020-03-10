let ausgabe = "";
for(let i = 1 ; i <= 100 ; i++){
    if( (i%3 == 0) && (i%5 == 0)){
        ausgabe+= "TicTac ";
        //console.log("TicTac ");
    }
    else if(i % 3 == 0){
        ausgabe+= "Tic ";
        //console.log("Tic ");
    }
    else if( i % 5 == 0){
        ausgabe+= "Tac ";
        //console.log("Tac ");
    }
    else{
        ausgabe+= i+ " ";
        //console.log( i + " ");
    }
}
console.log(ausgabe);