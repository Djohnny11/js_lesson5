//объекты-делиться на два типа глобальные и литеральные
//струкрура создания объекта
//typeof делает проверку на тип данных
//оператор in делает проверку есть ли такой ключ в объекте если до то вернут true 

// let user = {
//     name:"Jakhongir",
//     age:19,
//     surname:'Shukurov'
// }
// user.city="Tashkent"
// user["gender"]='male'
// console.log(user.name);
// console.log("city" in user)

// for (let key in user) {
//     // console.log(key) //выводить все ключи от цикла
//     console.log(user[key]); // выводить значения всех ключеей
//     console.log(`ключ ${key} значение ключа ${user[key]}`); // интерполяция строк
// }

// let obj = {
//     name:"Jakhongir",
//     age: 22,
//     isMarried:false,
//     ageAdd() {
//         return obj.age*2;
//     }
// }

// console.log(obj);

//функция внутри объекта называется методом

let family = {
    mother:{
        name:"Aziza",
        age:40
    },
    father:{
        name:"Aziz",
        age:45 
    }
}

family.son={
    name:'Andrei',
    age:20
}

// for(let key in family) {
//     for(let newKey in family[key]){
//         console.log(family[key][newKey])
//     }
// }
family.mother="aziz"

console.log(family)