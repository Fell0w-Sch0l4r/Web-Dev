agora = new Date().getDay()
agora = 'poi'

/*
domingo = 0
segunda = 1
terça = 2
quarta = 3
quinta = 4
sexta = 5
sábado = 6
*/
console.log(agora)

switch(agora){
    case 'poi':
        console.log("Domingo")
        break
    
    case 1:
        console.log("Segunda")
        break
    case 2:
        console.log("Terça")
        break
    case 3:
        console.log("Quarta")
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log("Sexta")
        break
    case 6:
        console.log("Sabado")
        break
    
    default:
        console.log('ERRO! Dia inválido')
}