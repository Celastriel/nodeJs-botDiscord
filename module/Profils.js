module.exports = class Profils{

    roll;
    deck = {};
    constructor(id,name, health, heroism, wealth, reputation){
        this.id = id;
        this.name = name;
        this.health = health;
        this.heroism = heroism;
        this.wealth = wealth;
        this.reputation = reputation;
    }

    showInfos(){
        return `\`\`\`
        Bonjour ${this.name} 
        vous avez  ${this.heroism} points d'héroisme
        votre richesse est de ${this.wealth}
        votre réputation de ${this.reputation}\`\`\``; 
    }
    showHealth(){
        const spiral = ["","","","",1,"","","","",2,"","","","",3,"","","","",4]
        return `Spiral de la mort :\n${spiral.map((e,i)=>{
            if(i===(19-this.health)){
                return `[ ${e}x ]`
            }else{
                return `[ ${e} ]`
            }
        })}`
    }

    showDeck(){
            return Object.values(this.deck);
    }

    changeStats(type, number){
        number = parseInt(number)
        if(type === "hero"){
            this.heroism += number;
            if(this.heroism <= 0){this.heroism = 0; return 1}
            return 1;
        }
        if(type === "w"){
            this.wealth += number;
            if(this.wealth <= 0){this.wealth = 0; return 1}  
            return 1;
        }
        if(type === "rep"){
            this.reputation += number;
            if(this.reputation <= 0){this.reputation = 0;return 1}
            return 1;
        }         
        if(type === "heal"){
            this.health += number;
            if(this.health <= 0){this.health = 0;return 1}
            if(this.health >= 20){this.health = 20;return 1}
            return 1;
        }    
        return 0;
    }
}