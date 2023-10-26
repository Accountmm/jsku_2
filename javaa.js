// let son = +prompt("Misollar sonini kiriting !!!")
// function random(min, max) {
//     return Math.round(Math.random() * (max - min) + min)
// }
// while (isNaN(son) || son==0) {
//   son = +prompt("Son kiriting harf emas")
// }

// for (let i = 0; i < son; i++) {
//     let n1 = random(10, 20)
//     let n2 = random(0, 10)
//     let sym = random(1, 5)
//     let q
//     let answer
//     if (sym==1) {
//         q = +prompt(`${n1}+${n2}`)
//         answer=n1+n2
//     }
//     else if (sym==2) {
//         q = +prompt(`${n1}-${n2}`)
//         answer= n1-n2
//     }
//     else if (sym==3) {
//         q = +prompt(`${n1}/${n2}`)
//         answer= n1/n2
//     }
//     else if (sym==4) {
//         q = +prompt(`${n1}*${n2}`)
//         answer= n1*n2
//     }
//     else if (sym==5) {
//         q = +prompt(`${n1}%${n2}`)
//         answer= n1%n2
//     }
//     if (answer ==q ) {
//         console.log("Sizning javobingiz To'g'ri "+ q);
//     }
//     else {
//         console.log(`Sizning javobingiz noto'g'ri : ${q } . To'g'ri javob ${answer}`);
// //     }
// // }

// // alert ("Ohiri misollar ham tugadi 😅😅😅😅😅.Tashakkur 😊😊😊😊😊")

let box = ''
let a = + prompt(" Biror son  kiriting !!!")
while (isNaN(a) || a == 0) {
    a = +prompt("Biror son kiriting !!!")
}
if (a % 2 == 0 && a++) {

}
for (let i = 0; i < a; i++) {

    for (let j = 0; j < a; j++) {
        if (i + j == a - 1 || a == a + 1 || i == j || i == 0 || j == 0 || j == a - 1 || i == a - 1) {
            box += '⬛'
        }
        else if (j == i + a || i == j + a) {
            box += '⬛'

        }

        else {
            box += '⬜'
        }
    }

    console.log(box);
    box = ''

}

// let b = prompt("Ismingizni kiriting ")
// let n = +prompt("Yoshingizni kiriting ")
// for (let i = 0; i <= b; i++) {}
// for (let i = 0; i <= n; i++) {}
// const faceid = {
//     1: {
//         name: b,
//         age: n,
//         goo: function () {
//             return `Mening ismim ${this.name} va Mening yoshim ${this.age} da `
//         }
//     }
// }
//     for (const key in faceid) {     
//         console.log(faceid[key].goo());       
//         }



