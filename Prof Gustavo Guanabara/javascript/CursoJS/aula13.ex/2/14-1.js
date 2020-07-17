function tabuada(){
    

    let n1 = document.querySelector('input#n1').value  //let é para a variável ficar apenas no escopo da função enquanto que o var é global


    if(n1.length===0){
        window.alert('ERRO! Valor inválido')
    }
    else{
        n1 = Number(n1)
        let resposta = document.querySelector('select#tab')
        
        resposta.innerHTML = ''
        for(var c = 1;c<=12; c++){
            let item = document.createElement('option')
            item.value=`v${c}`
            item.text = `${c} x ${n1} = ${c*n1}`
            resposta.appendChild(item)
    }
    }

}