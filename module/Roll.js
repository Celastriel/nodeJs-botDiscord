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
        
        //rolls.reverse(); //tri par ordre decroissant pour maximiser les paires

        for(let i = 0; i < rolls.length; i++){
            if(rolls[i]){
                if(rolls[i] >= betValue){ //Sommation 01 dé
                    bet += addBet;
                    rolls[i] = null;
                    i = 0;
                } else {
                    for(let j = i + 1; j < rolls.length; j++){
                        if(rolls[j]){
                            if(rolls[i]+rolls[j] >= betValue){ //Sommation 02 dés
                                bet += addBet;
                                rolls[i] = null;
                                rolls[j] = null;
                                i = 0;
                            } else {
                                for(let k = j + 1; k < rolls.length; k++){
                                    if(rolls[k]){
                                        if(rolls[i]+rolls[j]+rolls[k] >= betValue){ //Sommation 03 dés
                                            bet += addBet;
                                            rolls[i] = null;
                                            rolls[j] = null;
                                            rolls[k] = null;
                                            i = 0;
                                        } else {
                                            for(let l = k + 1; l < rolls.length; l++){
                                                if(rolls[l]){
                                                    if(rolls[i]+rolls[j]+rolls[k]+rolls[l] >= betValue){ //Sommation 04 dés
                                                        bet += addBet;
                                                        rolls[i] = null;
                                                        rolls[j] = null;
                                                        rolls[k] = null;
                                                        rolls[l] = null;
                                                        i = 0;
                                                    } else {
                                                        for(let m = l + 1; m < rolls.length; m++){
                                                            if(rolls[m]){
                                                                if(rolls[i]+rolls[j]+rolls[k]+rolls[l]+rolls[m] >= betValue) { //Sommation 05 dés
                                                                    bet += addBet;
                                                                    rolls[i] = null;
                                                                    rolls[j] = null;
                                                                    rolls[k] = null;
                                                                    rolls[l] = null;
                                                                    rolls[m] = null;
                                                                    i = 0;
                                                                } else {
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
                                                                                i = 0;
                                                                            } else {
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
                                                                                            i = 0;
                                                                                        } else {
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
                                                                                                        i = 0;
                                                                                                    } else {
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
                                                                                                                    i = 0;
                                                                                                                } else {
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
                                                                                                                                i = 0;
                                                                                                                            } else {
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
                                                                                                                                            i = 0;
                                                                                                                                        } else {
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
                                                                                                                                                        i = 0;
                                                                                                                                                    } else {
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
                                                                                                                                                                    i = 0;
                                                                                                                                                                } else {
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
                                                                                                                                                                                i = 0;
                                                                                                                                                                            } else {
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
                                                                                                                                                                                            i = 0;
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