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
    
    mise(betValue = 10){
        
        let mise = 0;

        const addBet = betValue==10?1:2;

        let rolls = [...this.datas]; 
        rolls.reverse(); //tri par ordre decroissant pour maximiser les paires

        for(let i = 0; i < rolls.length; i++){
            if(rolls[i]){
                if(rolls[i] >= betValue){ //Sommation 01 dé
                    mise += addBet;
                    rolls[i] = null;
                } else {
                    for(let j = i + 1; j < rolls.length; i++){
                        if(rolls[j]){
                            if(rolls[i]+rolls[j] >= betValue){ //Sommation 02 dés
                                mise += addBet;
                                rolls[i] = null;
                                rolls[j] = null;
                            } else {
                                for(let k = j + 1; k < rolls.length; k++){
                                    if(rolls[k]){
                                        if(rolls[i]+rolls[j]+rolls[k] >= betValue){ //Sommation 03 dés
                                            mise += addBet;
                                            rolls[i] = null;
                                            rolls[j] = null;
                                            rolls[k] = null;
                                        } else {
                                            for(let l = k + 1; l < rolls.length; l++){
                                                if(rolls[l]){
                                                    if(rolls[i]+rolls[j]+rolls[k]+rolls[l] >= betValue){ //Sommation 04 dés
                                                        mise += addBet;
                                                        rolls[i] = null;
                                                        rolls[j] = null;
                                                        rolls[k] = null;
                                                        rolls[l] = null;
                                                    } else {
                                                        for(let m = l + 1; m < rolls.length; m++){
                                                            if(rolls[m]){
                                                                if(rolls[i]+rolls[j]+rolls[k]+rolls[l]+rolls[m] >= betValue) { //Sommation 05 dés
                                                                    mise += addBet;
                                                                    rolls[i] = null;
                                                                    rolls[j] = null;
                                                                    rolls[k] = null;
                                                                    rolls[l] = null;
                                                                    rolls[m] = null;
                                                                } else {
                                                                    for(let n = m + 1; n < rolls.length; n++){
                                                                        if(rolls[n]){
                                                                            if(rolls[i]+rolls[j]+rolls[k]+rolls[l]+rolls[m]+rolls[n] >= betValue) { //Sommation 06 dés
                                                                                mise += addBet;
                                                                                rolls[i] = null;
                                                                                rolls[j] = null;
                                                                                rolls[k] = null;
                                                                                rolls[l] = null;
                                                                                rolls[m] = null;
                                                                                rolls[n] = null;
                                                                            } else {
                                                                                for(let o = n + 1; o < rolls.length; o++){
                                                                                    if(rolls[o]){
                                                                                        if(rolls[i]+rolls[j]+rolls[k]+rolls[l]+rolls[m]+rolls[n]+rolls[o] >= betValue) { //Sommation 07 dés
                                                                                            mise += addBet;
                                                                                            rolls[i] = null;
                                                                                            rolls[j] = null;
                                                                                            rolls[k] = null;
                                                                                            rolls[l] = null;
                                                                                            rolls[m] = null;
                                                                                            rolls[n] = null;
                                                                                            rolls[o] = null;
                                                                                        } else {
                                                                                            for(let p = o + 1; p < rolls.length; p++){
                                                                                                if(rolls[p]){
                                                                                                    if(rolls[i]+rolls[j]+rolls[k]+rolls[l]+rolls[m]+rolls[n]+rolls[o]+rolls[p] >= betValue) { //Sommation 08 dés
                                                                                                        mise += addBet;
                                                                                                        rolls[i] = null;
                                                                                                        rolls[j] = null;
                                                                                                        rolls[k] = null;
                                                                                                        rolls[l] = null;
                                                                                                        rolls[m] = null;
                                                                                                        rolls[n] = null;
                                                                                                        rolls[o] = null;
                                                                                                        rolls[p] = null;
                                                                                                    } else {
                                                                                                        for(let q = p + 1; q < rolls.length; q++){
                                                                                                            if(rolls[q]){
                                                                                                                if(rolls[i]+rolls[j]+rolls[k]+rolls[l]+rolls[m]+rolls[n]+rolls[o]+rolls[p]+rolls[q] >= betValue) { //Sommation 09 dés
                                                                                                                    mise += addBet;
                                                                                                                    rolls[i] = null;
                                                                                                                    rolls[j] = null;
                                                                                                                    rolls[k] = null;
                                                                                                                    rolls[l] = null;
                                                                                                                    rolls[m] = null;
                                                                                                                    rolls[n] = null;
                                                                                                                    rolls[o] = null;
                                                                                                                    rolls[p] = null;
                                                                                                                    rolls[q] = null;
                                                                                                                } else {
                                                                                                                    for(let r = q + 1; r < rolls.length; r++){
                                                                                                                        if(rolls[r]){
                                                                                                                            if(rolls[i]+rolls[j]+rolls[k]+rolls[l]+rolls[m]+rolls[n]+rolls[o]+rolls[p]+rolls[q]+rolls[r] >= betValue) { //Sommation 10 dés
                                                                                                                                mise += addBet;
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
                                                                                                                            } else {
                                                                                                                                
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

        return mise;
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