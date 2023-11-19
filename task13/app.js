/*let name=prompt("zəhmət olmasa adinizi daxil edin")
if(name==="Ali"){
    console.log("siz xos gelmisiz");
}else if(name==="Sona"){
console.log("siz Sona xanimsiz");
}else if(name==="Gulu"){
    console.log("siz gulu xanimsiz");
}else{
    console.log("zehmet olmasa ad daxil edin");
}*/

/*let number=prompt("zəhmət olmasa ad daxil edin")
if(number%15===0){
    console.log("bu eded hem 3-e bolunur hemde 5-e");
}else if(number%3===0){
console.log("bu eded 3-e bolünür");
}else if(number%5===0){
    console.log("bu eded 5-e bolünür");
}else{
    console.log("bu eded hec birine bolünmür");
}*/

/*let number = +(prompt("zəhmət olmasa ad daxil edin"));
switch (true) {
  case number % 15 === 0:
    console.log("Fizbuzz");
    break;
  case number % 5 === 0:
    console.log("fizz");
    break;
  case number % 3 === 0:
    console.log("buzz");
    break;
    default:
        console.log("ededi duzgun  daxil et");
}*/

/*let i=0
if(i<5){ 
    console.log("bu doqrudur");
   
}*/
let CpuDakiEded=Math.floor(Math.random()*100)
let userEded=+prompt("ureyindeki ededi daxil et")
 
while(userEded!==CpuDakiEded){
    if(userEded>CpuDakiEded){
        userEded=+prompt("daha asaqi dus") 
    }else{
        userEded=+prompt("daha yuxari eded")
    }
}
console.log("siz ededi tapdiniz"+CpuDakiEded);
