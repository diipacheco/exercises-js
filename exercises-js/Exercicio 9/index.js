// Arrays \\

let soccerpositions = ["Goalkeeper", "Leftback", "rightback", "Centerback", "DefensiveMidfielder", "LefMidfielder", "RightMidfielder", "Forward", "Striker", new Date, function(){}];
 
// Mostra os parâmetros enfileirados 
console.log(soccerpositions);
// Mostra o total de parâmetros na array
console.log(soccerpositions.length);
// Escolher um determiado parâmetro para ser visualizado 
console.log(soccerpositions[9].getFullYear());

// Percorrer elementos através do forEach
soccerpositions.forEach(function(value, index){
    
    console.log(index, value,);

});
 