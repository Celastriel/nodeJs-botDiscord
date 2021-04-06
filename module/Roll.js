const sortNumbers = require('sort-numbers');

module.exports = class Roll{

    static DICE = [10];
    static DICELIMITE = 50;
    datas = [];

    constructor(numberOfDice){
        this.numberOfDice = parseInt(numberOfDice);
        this.typeOfDice = 10;
    }

    rollDice(){
        this.datas = [];
        for(let i=0;i<this.numberOfDice;i++){
            let tmp = parseInt(Math.floor(Math.random() * Math.floor(this.typeOfDice))+1)
            this.datas.push(tmp);
        }
        sortNumbers(this.datas)
    }

    result(){
        return this.datas.reduce( (r,e) => {
            r += e;
            return r;
        },0);
    }
    
    mise(betValue = 10, rolls = [...this.datas]){
        
        let bet = 0;

        let addBet;
        (betValue==10)? addBet = 1 : addBet = 2;

        for(let i = 0; i < rolls.length; i++){ // 01
            if(rolls[i]){
                if(rolls[i] >= betValue){ //Sommation 01 dé
                    bet += addBet;
                    rolls[i] = null;
                }
            }
        }

        for(let i = 0; i < rolls.length; i++){ // 02
            if(rolls[i]){
                for(let j = i + 1; j < rolls.length; j++){
                    if(rolls[j]){
                        if(rolls[i]+rolls[j] >= betValue){ //Sommation 02 dés
                            bet += addBet;
                            rolls[i] = null;
                            rolls[j] = null;
                        }
                    }
                }
            }
        }

        for(let i = 0; i < rolls.length; i++){ // 03
            if(rolls[i]){
                for(let j = i + 1; j < rolls.length; j++){
                    if(rolls[j]){
                        for(let k = j + 1; k < rolls.length; k++){
                            if(rolls[k]){
                                if(rolls[i]+rolls[j]+rolls[k] >= betValue){ //Sommation 03 dés
                                    bet += addBet;
                                    rolls[i] = null;
                                    rolls[j] = null;
                                    rolls[k] = null;
                                    i = 0;
                                }
                            }
                        }
                    }
                }
            }
        }

        for(let i = 0; i < rolls.length; i++){ // 04
            if(rolls[i]){
                for(let j = i + 1; j < rolls.length; j++){
                    if(rolls[j]){
                        for(let k = j + 1; k < rolls.length; k++){
                            if(rolls[k]){
                                for(let l = k + 1; l < rolls.length; l++){
                                    if(rolls[l]){
                                        if(rolls[i]+rolls[j]+rolls[k]+rolls[l] >= betValue){ //Sommation 04 dés
                                            bet += addBet;
                                            rolls[i] = null;
                                            rolls[j] = null;
                                            rolls[k] = null;
                                            rolls[l] = null;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        for(let i = 0; i < rolls.length; i++){ // 05
            if(rolls[i]){
                for(let j = i + 1; j < rolls.length; j++){
                    if(rolls[j]){
                        for(let k = j + 1; k < rolls.length; k++){
                            if(rolls[k]){
                                for(let l = k + 1; l < rolls.length; l++){
                                    if(rolls[l]){
                                        for(let m = l + 1; m < rolls.length; m++){
                                            if(rolls[m]){
                                                if(rolls[i]+rolls[j]+rolls[k]+rolls[l]+rolls[m] >= betValue) { //Sommation 05 dés
                                                    bet += addBet;
                                                    rolls[i] = null;
                                                    rolls[j] = null;
                                                    rolls[k] = null;
                                                    rolls[l] = null;
                                                    rolls[m] = null;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        for(let i = 0; i < rolls.length; i++){ // 06
            if(rolls[i]){
                for(let j = i + 1; j < rolls.length; j++){
                    if(rolls[j]){
                        for(let k = j + 1; k < rolls.length; k++){
                            if(rolls[k]){
                                for(let l = k + 1; l < rolls.length; l++){
                                    if(rolls[l]){
                                        for(let m = l + 1; m < rolls.length; m++){
                                            if(rolls[m]){
                                                for(let n = m + 1; n < rolls.length; n++){
                                                    if(rolls[n]){
                                                        if(rolls[i]+rolls[j]+rolls[k]+rolls[l]+rolls[m]+rolls[n] >= betValue) { //Sommation 06 dés
                                                            bet += addBet;
                                                            rolls[i] = null;
                                                            rolls[j] = null;
                                                            rolls[k] = null;
                                                            rolls[l] = null;
                                                            rolls[m] = null;
                                                            rolls[n] = null;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        for(let i = 0; i < rolls.length; i++){ // 07
            if(rolls[i]){
                for(let j = i + 1; j < rolls.length; j++){
                    if(rolls[j]){
                        for(let k = j + 1; k < rolls.length; k++){
                            if(rolls[k]){
                                for(let l = k + 1; l < rolls.length; l++){
                                    if(rolls[l]){
                                        for(let m = l + 1; m < rolls.length; m++){
                                            if(rolls[m]){
                                                for(let n = m + 1; n < rolls.length; n++){
                                                    if(rolls[n]){
                                                        for(let o = n + 1; o < rolls.length; o++){
                                                            if(rolls[o]){
                                                                if(rolls[i]+rolls[j]+rolls[k]+rolls[l]+rolls[m]+rolls[n]+rolls[o] >= betValue) { //Sommation 07 dés
                                                                    bet += addBet;
                                                                    rolls[i] = null;
                                                                    rolls[j] = null;
                                                                    rolls[k] = null;
                                                                    rolls[l] = null;
                                                                    rolls[m] = null;
                                                                    rolls[n] = null;
                                                                    rolls[o] = null;
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        for(let i = 0; i < rolls.length; i++){ // 08
            if(rolls[i]){
                for(let j = i + 1; j < rolls.length; j++){
                    if(rolls[j]){
                        for(let k = j + 1; k < rolls.length; k++){
                            if(rolls[k]){
                                for(let l = k + 1; l < rolls.length; l++){
                                    if(rolls[l]){
                                        for(let m = l + 1; m < rolls.length; m++){
                                            if(rolls[m]){
                                                for(let n = m + 1; n < rolls.length; n++){
                                                    if(rolls[n]){
                                                        for(let o = n + 1; o < rolls.length; o++){
                                                            if(rolls[o]){
                                                                for(let p = o + 1; p < rolls.length; p++){
                                                                    if(rolls[p]){
                                                                        if(rolls[i]+rolls[j]+rolls[k]+rolls[l]+rolls[m]+rolls[n]+rolls[o]+rolls[p] >= betValue) { //Sommation 08 dés
                                                                            bet += addBet;
                                                                            rolls[i] = null;
                                                                            rolls[j] = null;
                                                                            rolls[k] = null;
                                                                            rolls[l] = null;
                                                                            rolls[m] = null;
                                                                            rolls[n] = null;
                                                                            rolls[o] = null;
                                                                            rolls[p] = null;
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        for(let i = 0; i < rolls.length; i++){ // 09
            if(rolls[i]){
                for(let j = i + 1; j < rolls.length; j++){
                    if(rolls[j]){
                        for(let k = j + 1; k < rolls.length; k++){
                            if(rolls[k]){
                                for(let l = k + 1; l < rolls.length; l++){
                                    if(rolls[l]){
                                        for(let m = l + 1; m < rolls.length; m++){
                                            if(rolls[m]){
                                                for(let n = m + 1; n < rolls.length; n++){
                                                    if(rolls[n]){
                                                        for(let o = n + 1; o < rolls.length; o++){
                                                            if(rolls[o]){
                                                                for(let p = o + 1; p < rolls.length; p++){
                                                                    if(rolls[p]){
                                                                        for(let q = p + 1; q < rolls.length; q++){
                                                                            if(rolls[q]){
                                                                                if(rolls[i]+rolls[j]+rolls[k]+rolls[l]+rolls[m]+rolls[n]+rolls[o]+rolls[p]+rolls[q] >= betValue) { //Sommation 09 dés
                                                                                    bet += addBet;
                                                                                    rolls[i] = null;
                                                                                    rolls[j] = null;
                                                                                    rolls[k] = null;
                                                                                    rolls[l] = null;
                                                                                    rolls[m] = null;
                                                                                    rolls[n] = null;
                                                                                    rolls[o] = null;
                                                                                    rolls[p] = null;
                                                                                    rolls[q] = null;
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        for(let i = 0; i < rolls.length; i++){ // 10
            if(rolls[i]){
                for(let j = i + 1; j < rolls.length; j++){
                    if(rolls[j]){
                        for(let k = j + 1; k < rolls.length; k++){
                            if(rolls[k]){
                                for(let l = k + 1; l < rolls.length; l++){
                                    if(rolls[l]){
                                        for(let m = l + 1; m < rolls.length; m++){
                                            if(rolls[m]){
                                                for(let n = m + 1; n < rolls.length; n++){
                                                    if(rolls[n]){
                                                        for(let o = n + 1; o < rolls.length; o++){
                                                            if(rolls[o]){
                                                                for(let p = o + 1; p < rolls.length; p++){
                                                                    if(rolls[p]){
                                                                        for(let q = p + 1; q < rolls.length; q++){
                                                                            if(rolls[q]){
                                                                                for(let r = q + 1; r < rolls.length; r++){
                                                                                    if(rolls[r]){
                                                                                        if(rolls[i]+rolls[j]+rolls[k]+rolls[l]+rolls[m]+rolls[n]+rolls[o]+rolls[p]+rolls[q]+rolls[r] >= betValue) { //Sommation 10 dés
                                                                                            bet += addBet;
                                                                                            rolls[i] = null;
                                                                                            rolls[j] = null;
                                                                                            rolls[k] = null;
                                                                                            rolls[l] = null;
                                                                                            rolls[m] = null;
                                                                                            rolls[n] = null;
                                                                                            rolls[o] = null;
                                                                                            rolls[p] = null;
                                                                                            rolls[q] = null;
                                                                                            rolls[r] = null;
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        if(betValue==15){

            for(let i = 0; i < rolls.length; i++){ // 11
                if(rolls[i]){
                    for(let j = i + 1; j < rolls.length; j++){
                        if(rolls[j]){
                            for(let k = j + 1; k < rolls.length; k++){
                                if(rolls[k]){
                                    for(let l = k + 1; l < rolls.length; l++){
                                        if(rolls[l]){
                                            for(let m = l + 1; m < rolls.length; m++){
                                                if(rolls[m]){
                                                    for(let n = m + 1; n < rolls.length; n++){
                                                        if(rolls[n]){
                                                            for(let o = n + 1; o < rolls.length; o++){
                                                                if(rolls[o]){
                                                                    for(let p = o + 1; p < rolls.length; p++){
                                                                        if(rolls[p]){
                                                                            for(let q = p + 1; q < rolls.length; q++){
                                                                                if(rolls[q]){
                                                                                    for(let r = q + 1; r < rolls.length; r++){
                                                                                        if(rolls[r]){
                                                                                            for(let s = r + 1; s < rolls.length; s++){
                                                                                                if(rolls[s]){
                                                                                                    if(rolls[i]+rolls[j]+rolls[k]+rolls[l]+rolls[m]+rolls[n]+rolls[o]+rolls[p]+rolls[q]+rolls[r]+rolls[s] >= betValue) { //Sommation 11 dés
                                                                                                        bet += addBet;
                                                                                                        rolls[i] = null;
                                                                                                        rolls[j] = null;
                                                                                                        rolls[k] = null;
                                                                                                        rolls[l] = null;
                                                                                                        rolls[m] = null;
                                                                                                        rolls[n] = null;
                                                                                                        rolls[o] = null;
                                                                                                        rolls[p] = null;
                                                                                                        rolls[q] = null;
                                                                                                        rolls[r] = null;
                                                                                                        rolls[s] = null;
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

            for(let i = 0; i < rolls.length; i++){ // 12
                if(rolls[i]){
                    for(let j = i + 1; j < rolls.length; j++){
                        if(rolls[j]){
                            for(let k = j + 1; k < rolls.length; k++){
                                if(rolls[k]){
                                    for(let l = k + 1; l < rolls.length; l++){
                                        if(rolls[l]){
                                            for(let m = l + 1; m < rolls.length; m++){
                                                if(rolls[m]){
                                                    for(let n = m + 1; n < rolls.length; n++){
                                                        if(rolls[n]){
                                                            for(let o = n + 1; o < rolls.length; o++){
                                                                if(rolls[o]){
                                                                    for(let p = o + 1; p < rolls.length; p++){
                                                                        if(rolls[p]){
                                                                            for(let q = p + 1; q < rolls.length; q++){
                                                                                if(rolls[q]){
                                                                                    for(let r = q + 1; r < rolls.length; r++){
                                                                                        if(rolls[r]){
                                                                                            for(let s = r + 1; s < rolls.length; s++){
                                                                                                if(rolls[s]){
                                                                                                    for(let t = s + 1; t < rolls.length; t++){
                                                                                                        if(rolls[t]){
                                                                                                            if(rolls[i]+rolls[j]+rolls[k]+rolls[l]+rolls[m]+rolls[n]+rolls[o]+rolls[p]+rolls[q]+rolls[r]+rolls[s]+rolls[t] >= betValue) { //Sommation 12 dés
                                                                                                                bet += addBet;
                                                                                                                rolls[i] = null;
                                                                                                                rolls[j] = null;
                                                                                                                rolls[k] = null;
                                                                                                                rolls[l] = null;
                                                                                                                rolls[m] = null;
                                                                                                                rolls[n] = null;
                                                                                                                rolls[o] = null;
                                                                                                                rolls[p] = null;
                                                                                                                rolls[q] = null;
                                                                                                                rolls[r] = null;
                                                                                                                rolls[s] = null;
                                                                                                                rolls[t] = null;
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

            for(let i = 0; i < rolls.length; i++){ // 13
                if(rolls[i]){
                    for(let j = i + 1; j < rolls.length; j++){
                        if(rolls[j]){
                            for(let k = j + 1; k < rolls.length; k++){
                                if(rolls[k]){
                                    for(let l = k + 1; l < rolls.length; l++){
                                        if(rolls[l]){
                                            for(let m = l + 1; m < rolls.length; m++){
                                                if(rolls[m]){
                                                    for(let n = m + 1; n < rolls.length; n++){
                                                        if(rolls[n]){
                                                            for(let o = n + 1; o < rolls.length; o++){
                                                                if(rolls[o]){
                                                                    for(let p = o + 1; p < rolls.length; p++){
                                                                        if(rolls[p]){
                                                                            for(let q = p + 1; q < rolls.length; q++){
                                                                                if(rolls[q]){
                                                                                    for(let r = q + 1; r < rolls.length; r++){
                                                                                        if(rolls[r]){
                                                                                            for(let s = r + 1; s < rolls.length; s++){
                                                                                                if(rolls[s]){
                                                                                                    for(let t = s + 1; t < rolls.length; t++){
                                                                                                        if(rolls[t]){
                                                                                                            for(let u = t + 1; u < rolls.length; u++){
                                                                                                                if(rolls[u]){
                                                                                                                    if(rolls[i]+rolls[j]+rolls[k]+rolls[l]+rolls[m]+rolls[n]+rolls[o]+rolls[p]+rolls[q]+rolls[r]+rolls[s]+rolls[t]+rolls[u] >= betValue) { //Sommation 13 dés
                                                                                                                        bet += addBet;
                                                                                                                        rolls[i] = null;
                                                                                                                        rolls[j] = null;
                                                                                                                        rolls[k] = null;
                                                                                                                        rolls[l] = null;
                                                                                                                        rolls[m] = null;
                                                                                                                        rolls[n] = null;
                                                                                                                        rolls[o] = null;
                                                                                                                        rolls[p] = null;
                                                                                                                        rolls[q] = null;
                                                                                                                        rolls[r] = null;
                                                                                                                        rolls[s] = null;
                                                                                                                        rolls[t] = null;
                                                                                                                        rolls[u] = null;
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

            for(let i = 0; i < rolls.length; i++){ // 14
                if(rolls[i]){
                    for(let j = i + 1; j < rolls.length; j++){
                        if(rolls[j]){
                            for(let k = j + 1; k < rolls.length; k++){
                                if(rolls[k]){
                                    for(let l = k + 1; l < rolls.length; l++){
                                        if(rolls[l]){
                                            for(let m = l + 1; m < rolls.length; m++){
                                                if(rolls[m]){
                                                    for(let n = m + 1; n < rolls.length; n++){
                                                        if(rolls[n]){
                                                            for(let o = n + 1; o < rolls.length; o++){
                                                                if(rolls[o]){
                                                                    for(let p = o + 1; p < rolls.length; p++){
                                                                        if(rolls[p]){
                                                                            for(let q = p + 1; q < rolls.length; q++){
                                                                                if(rolls[q]){
                                                                                    for(let r = q + 1; r < rolls.length; r++){
                                                                                        if(rolls[r]){
                                                                                            for(let s = r + 1; s < rolls.length; s++){
                                                                                                if(rolls[s]){
                                                                                                    for(let t = s + 1; t < rolls.length; t++){
                                                                                                        if(rolls[t]){
                                                                                                            for(let u = t + 1; u < rolls.length; u++){
                                                                                                                if(rolls[u]){
                                                                                                                    for(let v = u + 1; v < rolls.length; v++){
                                                                                                                        if(rolls[v]){
                                                                                                                            if(rolls[i]+rolls[j]+rolls[k]+rolls[l]+rolls[m]+rolls[n]+rolls[o]+rolls[p]+rolls[q]+rolls[r]+rolls[s]+rolls[t]+rolls[u]+rolls[v] >= betValue) { //Sommation 14 dés
                                                                                                                                bet += addBet;
                                                                                                                                rolls[i] = null;
                                                                                                                                rolls[j] = null;
                                                                                                                                rolls[k] = null;
                                                                                                                                rolls[l] = null;
                                                                                                                                rolls[m] = null;
                                                                                                                                rolls[n] = null;
                                                                                                                                rolls[o] = null;
                                                                                                                                rolls[p] = null;
                                                                                                                                rolls[q] = null;
                                                                                                                                rolls[r] = null;
                                                                                                                                rolls[s] = null;
                                                                                                                                rolls[t] = null;
                                                                                                                                rolls[u] = null;
                                                                                                                                rolls[v] = null;
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        
            for(let i = 0; i < rolls.length; i++){ // 15
                if(rolls[i]){
                    for(let j = i + 1; j < rolls.length; j++){
                        if(rolls[j]){
                            for(let k = j + 1; k < rolls.length; k++){
                                if(rolls[k]){
                                    for(let l = k + 1; l < rolls.length; l++){
                                        if(rolls[l]){
                                            for(let m = l + 1; m < rolls.length; m++){
                                                if(rolls[m]){
                                                    for(let n = m + 1; n < rolls.length; n++){
                                                        if(rolls[n]){
                                                            for(let o = n + 1; o < rolls.length; o++){
                                                                if(rolls[o]){
                                                                    for(let p = o + 1; p < rolls.length; p++){
                                                                        if(rolls[p]){
                                                                            for(let q = p + 1; q < rolls.length; q++){
                                                                                if(rolls[q]){
                                                                                    for(let r = q + 1; r < rolls.length; r++){
                                                                                        if(rolls[r]){
                                                                                            for(let s = r + 1; s < rolls.length; s++){
                                                                                                if(rolls[s]){
                                                                                                    for(let t = s + 1; t < rolls.length; t++){
                                                                                                        if(rolls[t]){
                                                                                                            for(let u = t + 1; u < rolls.length; u++){
                                                                                                                if(rolls[u]){
                                                                                                                    for(let v = u + 1; v < rolls.length; v++){
                                                                                                                        if(rolls[v]){
                                                                                                                            for(let w = v + 1; w < rolls.length; w++){
                                                                                                                                if(rolls[v]){
                                                                                                                                    if(rolls[i]+rolls[j]+rolls[k]+rolls[l]+rolls[m]+rolls[n]+rolls[o]+rolls[p]+rolls[q]+rolls[r]+rolls[s]+rolls[t]+rolls[u]+rolls[v]+rolls[w] >= betValue) { //Sommation 15 dés
                                                                                                                                        bet += addBet;
                                                                                                                                        rolls[i] = null;
                                                                                                                                        rolls[j] = null;
                                                                                                                                        rolls[k] = null;
                                                                                                                                        rolls[l] = null;
                                                                                                                                        rolls[m] = null;
                                                                                                                                        rolls[n] = null;
                                                                                                                                        rolls[o] = null;
                                                                                                                                        rolls[p] = null;
                                                                                                                                        rolls[q] = null;
                                                                                                                                        rolls[r] = null;
                                                                                                                                        rolls[s] = null;
                                                                                                                                        rolls[t] = null;
                                                                                                                                        rolls[u] = null;
                                                                                                                                        rolls[v] = null;
                                                                                                                                        rolls[w] = null;
                                                                                                                                    } 
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            
            bet += this.mise(10, rolls);
        }

        return bet;
    }
    
    rerollDice(){
        for(const arg in arguments){
            console.log(arguments[arg])
            if(parseInt(arguments[arg])>this.datas.length){return 0}
            else{this.datas[parseInt(arguments[arg])-1] = Math.floor(Math.random() * Math.floor(this.typeOfDice))+1;}
        }
        sortNumbers(this.datas)
        return 1;
    }
}