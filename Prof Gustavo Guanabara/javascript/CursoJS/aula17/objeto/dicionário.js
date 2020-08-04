let amigo = {nome:'Angelo',peso:90,engordar(x){
    this.peso +=x
}}

console.log(amigo)

amigo.engordar(90)
console.log(amigo)

for(let c in amigo){
    console.log(c)
}