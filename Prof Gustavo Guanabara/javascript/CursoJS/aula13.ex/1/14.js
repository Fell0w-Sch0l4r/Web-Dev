function contar(){
    var início = document.querySelector('input#in').value
    var fim = document.querySelector('input#fi').value
    var passo = document.querySelector('input#pa').value
    
    

    var resposta = document.querySelector('div#res')
    
    if(início.length === 0 || fim.length === 0 || passo.length === 0){
        resposta.innerHTML='Impossível contar!'
    }
    else
    {   resposta.innerHTML='Contando:<br>'
        início = Number(início)
        fim = Number(fim)
        passo = Number(passo)
        if(passo===0){
        window.alert('Passo inválido! Considerando PASSO 1')
        passo = 1
        }
        if(início<fim){
            for(início; início <= fim; início += passo){
                resposta.innerHTML+=` ${início} \u{1F449}`}
            resposta.innerHTML+=`\u{1F3C1}`
        } 
        else{
            for(início; início >= fim; início -= passo){
                resposta.innerHTML+=` ${início} \u{1F449}`}
            resposta.innerHTML+=`\u{1F3C1}`
        }
        
    }

    
}