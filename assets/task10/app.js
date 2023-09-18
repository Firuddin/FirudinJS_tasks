// A: live legend 🐱‍💻
//task.1 Poçt kodu 50000-dən az və ya ona bərabər olan bütün istifadəçiləri əldə edin. 
/*let users=[
{
    name:'ali',
    poctpasword:7000
},
{
    name:'Firi',
    poctpasword:14000
},
{
    name:'Eziz',
    poctpasword:28000
},
{
    name:'Gulbadam',
    poctpasword:60000
}
];
let netice=users.filter((user) => user.poctpasword <= 50000);
console.log(netice);*/






//task.2 E-poçtu '.net' ilə bitən bütün istifadəçiləri əldə edin.
/*let massiv=[
{
    name: 'ali',
    email:'Ali.gmail.net',
},
{
    name:'zara',
    email:'Zara.gmail.com',
},
{
    name:'Leyla',
    email:'leyla.gmail.net',
}
]
let common= massiv.filter((poct)=>poct.email.endsWith('.net'))
console.log(common)
*/







//task.3 Yalnız adı 'C' ilə başlayan istifadəçilərin adını və e-poçtunu ehtiva edən obyektlər massivini əldə edin
/*let arr=[
{
    name:'Celil',
    mail:'Celil.@gmail.com',
},
{
    name:'Ali',
    mail:'ali.@gmail.com',
},
{
    name:'Cavid',
    mail:'Cavid.@gmail.com'
}
]
let total=arr.filter((name)=>name.name[0]==='C')
console.log(total)*/




//task.4 Böyük hərflə yazılmış bütün istifadəçi adlarından ibarət massiv alın.
/*let arr = ['Ali','sada','Cavid','Huseyn','ləman']
let total=arr.filter((name) =>name[0] === name[0].toUpperCase());
console.log(total)*/





//taks.5 Massivdəki istifadəçilərin ümumi sayını əldə edin.
/*let number=['Ali','Nazim','Samir','Mirze','cavid']
let total=number.length
console.log( `umumi istifadeci sayi ${total}`)*/






//task.6 Bütün istifadəçi identifikatorlarının cəmini əldə edin
/*let arr=[
{
id:45,
name:'Firi',
},
{
    id:85,
    name:'Sada',
},
{
    id:74,
    name:'Gulbadam',
},
]
let sum=0
let total= arr.forEach((namber)=>{
sum=sum + namber.id

})
console.log(sum)*/






