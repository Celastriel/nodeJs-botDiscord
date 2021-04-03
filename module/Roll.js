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