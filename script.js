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

//flash-drive
let flashSize = prompt('Size of the flash-drive is (in gb)')
let amountOfFiles = Math.floor((flashSize * 1000) / 820)
alert(`${amountOfFiles} can be downloaded on the flash-drive`)
