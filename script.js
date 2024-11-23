

function contar (){
    const inicio = parseInt(document.getElementById('inicio').value);
    const fim = parseInt(document.getElementById('fim').value);
    const passo = parseInt(document.getElementById('passo').value);
    const resultado = document.getElementById('resultado');
   
    if(isNaN(inicio) || isNaN(fim) || isNaN(passo)){
        alert("Faltam dados!");
    } else {
        resultado.innerHTML = 'Contando: '
        for (let i = inicio; i <= fim; i += passo){
            resultado.innerHTML += ` ${i} |`;
        }
    }    
}