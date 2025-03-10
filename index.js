let nomeHeroi = "Pedro"

let quantidadeXp = 10200

if (quantidadeXp < 1000) {

    console.log ("O Herói de nome " + nomeHeroi + " está no nível Ferro")
    
} else if ((quantidadeXp >= 1001) && (quantidadeXp <= 2000) ) {

    console.log ("O Herói de nome " + nomeHeroi + " está no nível Bronze")
    
} else if ((quantidadeXp >= 2001) && (quantidadeXp <= 5000)) {
    
    console.log ("O Herói de nome " + nomeHeroi + " está no nível Prata")

} else if ((quantidadeXp >= 5001) && (quantidadeXp <= 7000)) {
    
    console.log ("O Herói de nome " + nomeHeroi + " está no nível Ouro")
} else if ((quantidadeXp >= 7001) && (quantidadeXp <= 8000)) {

   console.log ("O herói de nome " + nomeHeroi + " está no nível Platina") 

} else if ((quantidadeXp >= 8001) && (quantidadeXp <= 9000)) {

    console.log ("O herói de nome " + nomeHeroi + " está no nível Ascendente")
    
} else if ((quantidadeXp >= 9001) && (quantidadeXp <= 10000)) {

    console.log ("O herói de nome " + nomeHeroi + " está no nível Imortal")
    
} else if ((quantidadeXp >= 1001)) {

    console.log ("O herói de nome " + nomeHeroi + " está no nível Radiante")
    
}