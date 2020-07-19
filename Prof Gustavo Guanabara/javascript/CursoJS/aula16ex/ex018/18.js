var num = []
var numero = document.getElementById('n1')

let sele = document.querySelector('select#tab')


function numcerto(x){
    a = x.value
    if(a.length==0 || Number(a)>100 || Number(a)<0){
        return true
    }else{
        return false
    }
}

function naLista(y,z){
    if(y.indexOf(z) != -1){
        return true
    }else{
        return false
    }
}

function ad(){
    var n1 = Number(numero.value)
    
    if(numcerto(numero) || naLista(num,n1)){
        alert('ERRO! Número inválido ou já existente.')
    }else{
        document.getElementById('res').innerHTML = ''

        num.push(n1)
        var opções = document.createElement('option')
        opções.innerHTML = `Valor ${n1} adicionado`
        sele.appendChild(opções)
        numero.focus
    }
    numero.value = ''
    numero.focus()
}




function fin(){

    if(num.length==0){
        alert('Adicione valores antes de finalizar.')
    }else{
        var resposta = document.querySelector('div#res')
        resposta.innerHTML+= `<p>Ao todo, temos ${num.length} números cadastrados.</p>`
        soma = 0
        
        let menor = num.sort()[0]
       
        let maior =  num.reverse()[0]
        
        for(let c in num){
            soma += num[c]
        }
        resposta.innerHTML+= `<p>O maior valor informado foi ${maior}</p>`
        resposta.innerHTML+= `<p>O menor valor informado foi ${menor}</p>`
        resposta.innerHTML+= `<p>Somando todos os valores temos ${soma}</p>`
        resposta.innerHTML+= `<p>A média dos valores digitados é ${soma/num.length}</p>`
    }

    

}


