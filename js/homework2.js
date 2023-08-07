let zakaz=receipt()
let sum=9000
let info1="Вы заказали "
for(let key in zakaz) {
    console.log(zakaz[key])
    sum=zakaz[key].price+sum
    info1=info1+key+" "+zakaz[key].info+", "
}
console.log(info1+"| Общая стоимость "+sum+" сумм с доставкой (9000 )")
