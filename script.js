// //min
// //0.1 + 0.2
// let a = 0.1
// let b = 0.2
// let c = (a + b).toFixed(1)
// alert(`${a} + ${b} = ${c}`)

// //"1" + 2
// let num1 = "1"
// let num2 = 2
// let num3 = Number(num1) + num2
// alert(`${num3}`)

// //flash-drive
// let flashSize = prompt('Size of the flash-drive is (in gb)')
// let amountOfFiles = Math.floor((flashSize * 1000) / 820)
// alert(`${amountOfFiles} can be downloaded on the flash-drive`)

// //normal
// //chocolate
// let amountOfMoney = prompt('How much money do you have?', '')
// let chocolatePrice = prompt('Price of the chocolate you want', '')
// let amountOfChocolate = Math.floor(amountOfMoney / chocolatePrice)
// let change = amountOfMoney % chocolatePrice
// alert(`You can buy ${amountOfChocolate} chocolate bars`)
// alert(`This is your change: ${change}`)

//triple
let tripleNum = prompt('Type in your tree-digit number', '')
let reverseNum1 = tripleNum % 10
num2 = parseInt(tripleNum / 10)
let reverseNum2 = num2 % 10
num3 = parseInt(num2 / 10)
let reverseNum3 = num3 % 10
alert(`Reverse number is ${reverseNum1}${reverseNum2}${reverseNum3}`)