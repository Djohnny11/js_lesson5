let users={

}

for(let i=1;i<=3;i++) {
    console.log("Пользователь "+i);

    users[i]={
        name:prompt("вывести имя"),
        
        age:prompt("возрасть")
    }

    console.log(users[i])
}

console.log(users)
