let amigo = {nome:'Angelo',peso:90,engordar(x){
    this.peso +=x
}}

console.log(amigo)

amigo.engordar(90)
console.log(amigo)

amigo['nana']=9

for(let c in amigo){
    console.log(c)
}

console.log(amigo)

console.log(amigo['nome'])