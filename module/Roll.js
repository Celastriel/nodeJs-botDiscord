module.exports = class Roll{

    static DICE = [10];
    static DICELIMITE = 50;
    datas = [];

    constructor(numberOfDice){
        this.numberOfDice = numberOfDice;
        this.typeOfDice = 10;
    }

    rollDice(){
        this.datas = [];
        for(let i=0;i<parseInt(this.numberOfDice);i++){
            this.datas.push(Math.floor(Math.random() * Math.floor(this.typeOfDice))+1);
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
        } */
        let mise = 0;
        let rolls = this.datas;
        rolls.sort((e1, e2) => {return e1>e2});
        for(let i = 0; i< rolls.length; i++){
            if(rolls[i]){
                for(let y = rolls.length-1; y>0; y--){
                    if(rolls[y]){
                        if(rolls[i]+rolls[y] >= 10){
                            ++mise;
                            rolls[i] = null;
                            rolls[y] = null;
                            break;
                        }
                    }
                }
            }
        }
        let tmp;
        rolls.forEach(e => {
            if(e){
                tmp+=e;
            }
        });

        if(tmp >= 10){
            ++mise;
        }

        return mise;
    }
    
    rerollDice(){
        for(const arg in arguments){
            if(parseInt(arguments[arg])>this.datas.length){return 0}
            else{this.datas[parseInt(arguments[arg])-1] = Math.floor(Math.random() * Math.floor(this.typeOfDice))+1;}
        }
        return 1;
    }
}