let info = []
var resposta = document.querySelector('div#res')
var ano = new Date().getFullYear()

function adcicionar(){
    let infor = []

    var nome = document.getElementById('nome')
    var anonas = document.querySelector('input#idade')
    var idade = ano - Number(anonas.value)

    if (nome.value == '' || anonas.value == '' || anonas.value>ano){
        window.alert('ERRO! Dados inválidos.')
        nome.value = ''
        anonas.value = ''
        nome.focus()
    }else{
        resposta.innerHTML = ``
        var sexo = (document.getElementById('mas').checked)? 'Masculino':'Feminino'
    
    

    infor.push(nome.value)
    infor.push(idade)
    infor.push(sexo)
    
    var opp = document.createElement('option')
    opp.value = `pessoa ${info.length}`

    opp.innerHTML = `${info.length+1} - ${infor[0]}, ${infor[1]} anos, sexo ${infor[2]}`

    document.getElementById('lista').appendChild(opp)
    info.push(infor)

    nome.value = ''
    nome.focus()
    }
    
    

    

}

/*info = [['Ana',18,'Feminino'],['Ângel',17,'Masculino'],['Joaquina',20,'Feminino']]*/


function fim(){

    if (info.length ==0){
        window.alert('ERRO! Cadastre pessoas para finalizar')
    }

    else if (resposta.innerHTML == ''){
    var mais_velho 
    var mais_novo 
    var média = 0

    var h_velho
    var h_novo
    var m_velha
    var m_nova

    

    for(let c in info){
    
        if (info[0]==info[c]){
            
            mais_velho = [info[c][0],info[c][1]]
            
            mais_novo = [info[c][0],info[c][1]]
        
        }else if(info[c][1]>mais_velho[1]){
            
            mais_velho = [info[c][0],info[c][1]]
       
        }else if (info[c][1]<mais_novo[1]){
            
            mais_novo = [info[c][0],info[c][1]]
        }
    
        média += info[c][1]
    }
    resposta.innerHTML += `<p>Foram cadastradas ${info.length} pessoas </p>`
    resposta.innerHTML += `<p>A pessoa mais velha é ${mais_velho[0]}, que possui ${mais_velho[1]} anos.</p>`
    resposta.innerHTML += `<p>A pessoa mais nova é ${mais_novo[0]}, que possui ${mais_novo[1]} anos.</p>`
    resposta.innerHTML += `<p>A média de idades das pessoas cadstradas é de ${média/info.length}.</p>`
    }
    
    
}

