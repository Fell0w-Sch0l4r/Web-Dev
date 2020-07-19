var num = []
var numero = document.getElementById('n1')
var n1 = Number(numero.value)
let sele = document.querySelector('select#tab')


function numcerto(x){
    a = x.value
    if(a.length==0 || Number(a)>100 || Number(a)<0){
        return true
    }else{
        return false
    }
}

function ad(){
    if(numcerto(numero) || num.indexOf(n1)!=-1){
        alert('ERRO! Número inválido ou já existente.')
    }else{
        numero.value=''
        let opções = document.createElement('option')
        num.push(n1)
        opções.innerHTML = ``
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


