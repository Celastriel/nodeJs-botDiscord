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
    }

    result(){
        return this.datas.reduce( (r,e) => {
            r += e;
            return r;
        },0);
    }

    mise(){
       /* if(this.datas.reduce( (a,e) => {
            if(e>4)a++;
            return a;
        },0)===this.datas.length-1&&this.result().toString().charAt(1)<5){
            return Math.floor(this.result()/10)-1
        }else{
            return Math.floor(this.result()/10)
        }*/
        let mise = 0;
        let rolls = this.datas; 
        rolls.sort().reverse(); //tri par ordre decroissant pour maximiser les paires
        
        console.log(rolls);

        for(let i = 0; i < rolls.length; i++){ //on boucle sur le tableau
            if(rolls[i]){ // si x null on passe
                if(rolls[i] == 10){ // si c'est 10, c'est une mise à lui seul
                    ++mise;
                    rolls[i] = null;
                    console.log(i);
                } else {
                    for(let y = rolls.length-1; y >=0 ; y--){ // on boucle sur l'inverse du tableau
                        if(rolls[y]){ //si y null on passe
                            if(i !== y){ 
                                if(rolls[i]+rolls[y] >= 10){
                                    ++mise;
                                    rolls[i] = null;
                                    rolls[y] = null;
                                    console.log(i + " & " + y);
                                    break;
                                }
                            }
                        }
                    }
                }
            }
        }

        let tmp = 0;
        for(let i = 0; i < rolls.length; i++){
            if(rolls[i]){
                tmp+=rolls[i];
            }
        };

        console.log(tmp);
        if(tmp >= 10){
            ++mise;
        }

        return mise;
    }
    
    rerollDice(){
        for(const arg in arguments){
            console.log(arguments[arg])
            if(parseInt(arguments[arg])>this.datas.length){return 0}
            else{this.datas[parseInt(arguments[arg])-1] = Math.floor(Math.random() * Math.floor(this.typeOfDice))+1;}
        }
        return 1;
    }
}