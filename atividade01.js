/*1)Crie uma variável chamada “fruta”. Esta variável deve receber uma string com o nome de uma fruta.
a)Se a fruta for maçã, retorne no console: “Não vendemos esta fruta aqui”.
b)Se for kiwi, retorne: “Estamos com escassez de kiwis”.
c)Se for melancia, retorne: “Aqui está, são 3 reais o quilo”.
d)Se não for nenhum dos valores, deverá retornar uma mensagem de erro no console: Procure o administrador do sistema! */

function comprarFruta(fruta){
    switch(fruta){
        case "maçã":
            return "Não vendemos essa fruta aqui";
            break;
        case "kiwi":
            return "Estamos com escassez de kiwis";
            break;
        case "melancia":
            return "Aqui está, são 3 reais o quilo";
            break;
        default :
            return "Procure o administrador do sistema!";
            break;
    }
}

console.log(comprarFruta("melancia"))