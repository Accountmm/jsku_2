let alif = 1;
let alfa = +prompt("Biror son kiriting  ")
for (let i = 1; i < alfa; i++) {
    alif = alif * i;
}
console.log(alif);

let a = + prompt("Son kiriting !!!")
while (isNaN(a) || a == 0) {
    a = +prompt(" Iltimos Son kiriting ")
}
if (a % 2 == 0) {
    alert("Siz kiritgan son Juft ")
}
else {
    alert("Siz kiritgan son Toq")
}
let b = + prompt("Biror son kiriting va Szga darajasini aniqlab beramiz ")
while (isNaN(b) || b == 0) {
    b = +prompt(" Iltimos Son kiriting ")
}
for (let k = 1; k <= b;  k++) {
  alert (k*b)
}
console.log(b);

alert("SHu bn oldingi darsdagi uy ishidan  qutuldim 😅😅😅uraaaa" )