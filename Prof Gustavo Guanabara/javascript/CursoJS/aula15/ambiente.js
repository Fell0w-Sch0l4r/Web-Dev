/*let num = [1,2,3]
console.log(num)
num[3]=0
console.log(num)
num[2]=9
console.log(num)
num.push(1)
console.log(num)
console.log(num.length)
num.sort()
console.log(num)

for(let p=0; p<num.length;p++){
    console.log(num[p])
}

for(let c in num){
    console.log(num[c])
}*/


function fat(n){
    let valor=n
    let fato = `${n}! = ${n}`
    for(let c=n-1; c>=1; c--){
        fato+=` x ${c}`
        valor*=c
    }
    fato+=` = ${valor}`
    console.log(fato)
}  


fat(5)