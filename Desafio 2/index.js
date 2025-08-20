// Calculadora de partidas rankeadas 

let victories = 0

function resultBattle(victories, defeat) {
    let result = victories - defeat
    return result
}

victories = resultBattle(110, 5)

if (victories <= 10) {
    console.log("O Herói tem de saldo de " + victories + " está no nível de Ferro")
} else if (victories >= 11 && victories <= 20) {
    console.log("O Herói tem de saldo de " + victories + " está no nível de Bronze")
} else if (victories >= 21 && victories <= 50) {
    console.log("O Herói tem de saldo de " + victories + " está no nível de Prata")
} else if (victories >= 51 && victories <= 80) {
    console.log("O Herói tem de saldo de " + victories + " está no nível de Ouro")
} else if (victories >= 81 && victories <= 90) {
    console.log("O Herói tem de saldo de " + victories + " está no nível de Diamante")
} else if (victories >= 91 && victories <= 100) {
    console.log("O Herói tem de saldo de " + victories + " está no nível de Lendário")
} else { (victories >= 101) 
    console.log("O Herói tem de saldo de " + victories + " está no nível de Imortal")
}