//Desafio classificador de nível de herói



let nomeHeroi = "Amora"
let qtdXp = 10008

if (qtdXp <= 1000) {
    console.log("O heroi de nome " + nomeHeroi + " esta no nível " + "Ferro")
} else if (qtdXp > 1000 && qtdXp <= 2000) {
    console.log("O heroi de nome " + nomeHeroi + " esta no nível " + "Bronze")
} else if (qtdXp > 2000 && qtdXp <= 5000) {
    console.log("O heroi de nome " + nomeHeroi + " esta no nível " + "Prata")
} else if (qtdXp > 5000 && qtdXp <= 7000) {
    console.log("O heroi de nome " + nomeHeroi + " esta no nível " + "Ouro")
} else if (qtdXp > 7000 && qtdXp <= 8000) {
    console.log("O heroi de nome " + nomeHeroi + " esta no nível " + "Platina")
} else if (qtdXp > 8000 && qtdXp <= 9000) {
    console.log("O heroi de nome " + nomeHeroi + " esta no nível " + "Ascendente")
} else if (qtdXp > 9000 && qtdXp <= 10000) {
    console.log("O heroi de nome " + nomeHeroi + " esta no nível " + "Imortal")
} else { (qtdXp >= 10001) 
    console.log("O heroi de nome " + nomeHeroi + " esta no nível " + "Radiante")
}
