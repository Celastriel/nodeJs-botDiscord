module.exports = class Roll{

    static DICE = [10];
    static PREFIX = "/roll ";
    datas = [];
    objectData = {};

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
    rerollDice(){
        console.log(arguments)
        for(const arg in arguments){
            this.datas[arguments[arg]] = Math.floor(Math.random() * Math.floor(this.typeOfDice))+1;
        }
    }


}