const readline = require('readline-sync');

let propriedades = [];
let aux = "";

while(aux != "sair" || aux != "SAIR" || aux != "Sair"){

    aux = readline.question("Digite sua propriedade do css: ");

    propriedades.push(aux);
    
    aux = readline.question("Para sair digite 'sair' , para continuar digite qualquer tecla: ");
    aux.toLowerCase();

    if(aux == 'sair'){
        console.log(propriedades.sort().join('\n'));
    }

}






