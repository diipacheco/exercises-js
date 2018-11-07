// Switch = Estrutura de controle com opções pré-definidas \\ 

let titulo = "mundial";

switch (titulo) {
 
  // Case = Condição \\ 
    case "1951":
      console.log("Palmeiras tem Mundial");
    break;

    case "fax":
       console.log("1951 é pinga!");
       break;

    case "mundial":
        console.log("Palmeiras não tem Mundial");
        break;
  // Default = Caso as outras condições não estejam certas, default define uma ação caso as outras opções não executem \\
    default:
        console.log("Não sei");

}