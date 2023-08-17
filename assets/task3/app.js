let name=prompt('adinizi daxil edin')
let surename=prompt('soyadinizi daxil edin')
let netice=`${name} ${surename}`
console.log(netice)


let a1=+prompt('duzbucaqlinin uzunluqun daxil et')
let a2=+prompt('duzbucaqlininqarsi uz uzunluqunu daxil et')
let b3=+prompt('duzbucaqlinin enin daxil et')
let b4=+prompt('duzbucaqlinin qarsi teref enin daxil et')
let Perimetr=`${a1}+${a2}+${b3}+${b4}=${a1+a2+b3+b4}`
console.log(Perimetr)



let quvvet1=prompt('birinci ededi daxil edin')
let quvvet2=prompt("ikinci ededi daxil edin")
let theend=(`${quvvet1}**${quvvet2}=${quvvet1**quvvet2}`)
console.log(theend)





let C1=prompt('selsi deyerin daxil edin')
let Fahrenheit=(`${C1}*${1.8}+${32}=${C1*1.8+32}`)
console.log(Fahrenheit)




let eded=prompt('eded daxil edin')
if(eded%15===0){
    console.log('fizzbuzz')
}
else if(eded % 3===0){
console.log("fizz")
}
else if(eded % 5===0){
    console.log('buzz')
}







let user=prompt('soz daxil edin')
if(user){
    console.log('xos geldin istifadeci')
}
let admin=prompt('soz daxil edin')
if(admin){
    console.log('xos geldin cenab admin')
}
let guest=prompt('soz daxil edin')
if(guest){
    console.log('xos geldin qonaq')}



