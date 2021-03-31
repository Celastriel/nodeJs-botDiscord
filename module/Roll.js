module.exports = class Roll{

    static DICE = [10];
    static PREFIX = "/roll ";
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
        return "Work in Progress"
        
    }
    rerollDice(){
        for(const arg in arguments){
            if(parseInt(arguments[arg])>this.datas.length){return 0}
            else{this.datas[parseInt(arguments[arg])-1] = Math.floor(Math.random() * Math.floor(this.typeOfDice))+1;}
        }
        return 1;
    }


}