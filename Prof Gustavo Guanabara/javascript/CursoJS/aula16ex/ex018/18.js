var num = []

function ad(){
    document.querySelector('div#res').innerHTML = ''
    
    numero = document.querySelector('input#n1').value
    n1 = Number(document.querySelector('input#n1').value)
    if(numero.length===0 || n1<0 || n1>100 || num.indexOf(n1)!=-1){
        alert('ERRO! Valor inválido ou já encontrado na lista')
    }else{
        num.push(n1)
        var op = document.createElement('option')
        op.innerText = `Valor ${n1} adicionado`
        op.value = `v${num.indexOf(n1)}`

        document.getElementById('tab').appendChild(op)
    }
}




function fin(){

    if(num.length==0){
        alert('Adicione valores antes de finalizar.')
    }else{
        var resposta = document.querySelector('div#res')
    resposta.innerHTML+= `<p>Ao todo, temos ${num.length} números cadastrados.</p>`
    let maior = menor = soma = 0
    for(let c in num){
        if(c==='0'){
            maior=menor=num[c]
        }else{
            if(num[c]>maior){
                maior=num[c]
            }else if(num[c]<menor){
                menor=num[c]
        }
    }   soma += num[c]
    }
    resposta.innerHTML+= `<p>O maior valor informado foi ${maior}</p>`
    resposta.innerHTML+= `<p>O menor valor informado foi ${menor}</p>`
    resposta.innerHTML+= `<p>Somando todos os valores temos ${soma}</p>`
    resposta.innerHTML+= `<p>A média dos valores digitados é ${soma/num.length}</p>`
    }

    

}



let maior = menor = 0
for(let c in num){
    if(c==='0'){
        maior=menor=num[c]
    }else{
        if(num[c]>maior){
            maior=num[c]
        }else if(num[c]<menor){
            menor=num[c]
        }
    }
}
    
console.log(maior)
console.log(menor)
console.log(typeof(num[5]))
