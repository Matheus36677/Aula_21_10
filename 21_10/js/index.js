function confirmar(){
    var numero = parseInt(document.getElementById('num').value);

    if(numero <= 9){
        alert("Valor correto!");
    }else{
        alert("Valor incorreto!");
    }
}

function Calcular(){
    var turno = document.getElementById('turno').value;
    var hrtra = parseFloat(document.getElementById('hrtra').value);
    var resul = 0;

    if(turno == "N"){
        resul = hrtra * 45.00;
    }else{
        resul = hrtra * 37.50;
    }

    document.getElementById('result').innerHTML = "Seu Salario é: "+ resul;

}