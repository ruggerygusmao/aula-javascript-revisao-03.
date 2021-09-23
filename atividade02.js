/*2) As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores. 
Criar variáveis que tenham o salário do colaborador e o reajuste segundo o seguinte critério, 
baseado no salário atual:
a)       Salários até R$ 280,00 (incluindo) : aumento de 20%
b)      Salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
c)       Salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
d)      Salários de R$ 1500,00 em diante : aumento de 5%

Após o aumento ser realizado, informe no console:

●        O salário antes do reajuste;
●        O percentual de aumento aplicado;
●        O valor do aumento;
●        O novo salário, após o aumento.
 */

function teste(salario_atual){
    let salario_atualizado;

    if(salario_atual < 280){
        salario_atualizado = (salario_atual*0.15) + salario_atual;
        return "Salário: R$ "+salario_atual+"\nAumento de 20%: R$ "+(salario_atual*0.20)+"\nSalário atualizado: R$ "+salario_atualizado;
    }else if((salario_atual > 280)&&(salario_atual < 700)){
        salario_atualizado = (salario_atual*0.15) + salario_atual;
        return "Salário: R$ "+salario_atual+"\nAumento de 15%: R$ "+(salario_atual*0.15)+"\nSalário atualizado: R$ "+salario_atualizado;
    }else if((salario_atual>700)&&(salario_atual <1500)){
        salario_atualizado = (salario_atual*0.10) + salario_atual;
        return "Salário: R$ "+salario_atual+"\nAumento de 10%: R$ "+(salario_atual*0.10)+"\nSalário atualizado: R$ "+salario_atualizado;
    }else{
        salario_atualizado = (salario_atual*0.05) + salario_atual;
        return "Salário: R$ "+salario_atual+"\nAumento de 5%: R$ "+(salario_atual*0.05)+"\nSalário atualizado: R$ "+salario_atualizado;
    }
}

console.log(teste(800));