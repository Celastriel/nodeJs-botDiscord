module.exports = class Profils{

    roll;
    deck = {};
    bufferCard;

    constructor(id,name, health, heroism, wealth, reputation){
        this.id = id;
        this.name = name;
        this.health = health;
        this.heroism = heroism;
        this.wealth = wealth;
        this.reputation = reputation;
    }

    showInfos(){
        return "Bonjour "+ this.name +", vous avez " + this.health + "pv, " + heroism + "points d'héroisme, votre richesse est de " + this.wealth + ", et votre réputation de " + this.reputation; 
    }

    changeStats(type, number){
        switch(type){
            case "heroism":
                this.heroism += number;
                break;
            case "wealth":
                this.wealth += number;
                break;
            case "reputaion":
                this.reputation += number;
                break;
            default:
                return 0;
        }
    }
}