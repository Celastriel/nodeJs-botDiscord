const discordTools = require('discord.js');
const events = require('events');
const fsPromise = require("fs/promises");
const fs = require("fs");
const rollTools = require('../module/Roll');
const Profils = require('../module/Profils')
const TOKEN = require('../module/Token');
const prefixeTools = require('../module/prefix')
const deck = require('../module/deck');
const Roll = require('../module/Roll');

const jsonPath = "./json/users.json"
const botEvent = new events.EventEmitter();
const client = new discordTools.Client();

let cardMJBuffer = undefined;

let idUser;
let roll;

let players = [];
let inventory = [];
let quest = [];

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`)
    if(fs.existsSync(jsonPath)){
        const json = await fsPromise.readFile(jsonPath,'utf-8');
        //console.log(json)
        players = JSON.parse(json)
        players = players.map( e => {
            const a = new Profils(e.id,e.name,parseInt(e.health),parseInt(e.heroism),parseInt(e.wealth),parseInt(e.reputation));
            a.deck = e.deck;
            return a;
        })
    }else{
        await fsPromise.writeFile(jsonPath,JSON.stringify(players));
    }
});

client.on('message',async msg=> {
    idUser = msg.author.id
    const command = msg.toString().trim().charAt(0);
    const prefix = msg.toString().trim().split(" ")[0];
    if(command === '&'){
        switch(prefix){
            case prefixeTools.prefixHelp : help(msg);break;
            case prefixeTools.prefixDeck : showDeck(msg);break;
            case prefixeTools.prefixInit : init(msg);break;
            case prefixeTools.prefixInitDuelliste : initduelliste(msg);break;
            case prefixeTools.prefixInfo : info(msg);break;
            case prefixeTools.prefixRoll : rollDice(msg);break;
            case prefixeTools.prefixReRoll : reRollDice(msg);break;

            case prefixeTools.prefixDuel : duel(msg);break;
            case prefixeTools.prefixDuelPlay : duel(msg);break;
            case prefixeTools.prefixDuelEnd : duel(msg);break;

            case prefixeTools.prefixAddCard : addCard(msg);break;
            case prefixeTools.prefixMap : map(msg);break;

            case prefixeTools.prefixInventory : inventory(msg);break;
            case prefixeTools.prefixQuest : quest(msg);break;
            case prefixeTools.prefixSave : save(msg);break;
        }
    }
});

const help = msg => {
        msg.channel.send(`\`\`\`Command:\n&roll n: Lancer les dés\n&reroll ...n: Relancer les dés de votre choix\n&map : Afficher la carte\n&deck : vous envoye le deck en message privé\`\`\``)
}

const showDeck = msg => {
    const player = players.find(e=>e.id === idUser)
    if(msg.toString().trim().length>5){
        if(!deck[msg.toString().trim().split(" ")[1]])msg.channel.send("Cartes introuvable")
        else {
            msg.reply("La carte vous-on étais envoyer en message privé")
            msg.author.send({files: [deck[msg.toString().trim().split(" ")[1]]]})
        }
    }else{
        if(player === undefined){
            msg.reply("Les cartes vous-on étais envoyer en message privé")
            let tmpDeck = Object.keys(deck) 
            msg.author.send(`\`\`\`${tmpDeck.map(e=>`🎴 ${e}`).join("\n")}\`\`\``)
        }else{
            if(player.deck === {}){
                msg.channel.send(`\`Vous n'est pas duelliste, restez à vostre place\``)
        }else{
                msg.channel.send(`\`Votre deck vous a été livré en mp\``)
                msg.author.send({files : player.showDeck()})
            }
        }      
    } 
}

const init = msg => {
    if(msg.toString().trim().split(" ")[1]===undefined){
        msg.channel.send(`\`\`\`&init nom heroisme richesse reputation \`\`\``)
    }else{
        const info = [...msg.toString().trim().split(" ")]
        if(typeof info[1] != "string"||isNaN(Number(info[2]))||isNaN(Number(info[3]))||isNaN(Number(info[4]))||info.length>5){
            msg.channel.send(`\`\`\`Conception de personnage incorrect \`\`\``)
        }else if(players.find(e=>e.id === idUser)!==undefined){
            msg.channel.send(`\`\`\`Vous possédez déjà un personnage \`\`\``)
        }else{
            console.log(players.find(e=>e.id === idUser))
            let player = new Profils(msg.author.id,info[1],20,info[2],info[3],info[4])
            players.push(player)
            msg.channel.send(`\`\`\`Joueur créer : ${player.name}\`\`\``)
        }
        
    }
}

const initduelliste = msg => {
    const player = players.find(e=>e.id === idUser)
    if(player===undefined){
        msg.reply(`\`PTDR T KI ?\``)
    }else{
        msg.reply(`\`Bienvenue chez les dueillistes !\``)
        player.isDuellist = true;
        player.deck["riposte"] = deck.riposte;
        player.deck["parade"] = deck.parade;
        player.deck["feinte"] = deck.feinte;
        player.deck["fente"] = deck.fente;
        player.deck["frappe"] = deck.frappe;
         player.deck["taillade"] = deck.taillade;
    }
}

const addCard = msg => {  
    const player = players.find(e=>e.id === idUser)
    const card = msg.toString().trim().split(" ")[1];
    if(player===undefined){
        msg.reply(`\`PTDR T KI ?\``)
    }else if(player.isDuellist){
        msg.reply(`\`Vous n'êtes pas un duelliste\``)
    }else if(deck[card]===undefined){
        msg.reply(`\`La carte n'existe pas\``)
    }else{
        player.deck[card] = deck[card];
    }  
}

const info = msg => {
    const player = players.find(e=>e.id === idUser)
    if(player!==undefined){
        msg.reply(`\`${player.showInfos()}\n${player.showHealth()}\``)
    }else{
    }
}

const duel = msg => {
    if(msg.toString().trim().split(" ")[0]===prefixeTools.prefixDuel){
        player1 = players.find(e=>e.id === idUser);
        if(player1===undefined){
            msg.channel.send("Mais qui es-tu enfet")
        }else{
            msg.channel.send("C'est l'heure du du-du-du DUEL!")
            instanceDuel = [players.find(e=>e.id === idUser),true]
        }
        
    }
    if(msg.toString().trim().split(" ")[0]===prefixeTools.prefixDuelPlay){
        if(!instanceDuel[0]){
            msg.channel.send("Aucun Duel en cour")
        }else{
            if(instanceDuel[1].id != idUser){
                msg.channel.send("N'interrompé pas ce duel, malotrut ! !")
            }else{
                ////
            }
        }
    }
    if(msg.toString().trim().split(" ")[0]===prefixeTools.prefixDuelEnd){
        msg.channel.send("Duel terminer")
        instanceDuel = [undefined,false];
    }
}

const rollDice = msg => {
    let numberOfDice = parseInt(msg.toString().trim().slice(6))
    let user = players.find(e=>e.id === idUser);
    console.log(user)
    if(numberOfDice>rollTools.DICELIMITE){msg.reply(`\`\`\`Too many dice, inférieur à ${rollTools.DICELIMITE}\`\`\``);}
    //else if(rollTools.DICE.find(e=>e===parseInt(typeOfDice))===undefined)msg.reply(`${typeOfDice} n'est pas initialisé comme dé valide`)
    else if(user !== undefined){
        user.roll = new rollTools(numberOfDice)
        user.roll.rollDice();
        msg.channel.send(`\`\`\`${(user.name).toUpperCase()}:\n${user.roll.datas.reduce( (s,e,i) => {
            s+=`${("0"+(i+1).toString()).slice(-2)}) 🎲 ${e} \n`;
            return s;
            },"")}Résultat : ${user.roll.result()}\nMises : ${user.roll.mise()}\`\`\``)
    }
    else {
        roll = new rollTools(numberOfDice)
        roll.rollDice();
        msg.channel.send(`\`\`\`${roll.datas.reduce( (s,e,i) => {
            s+=`${("0"+(i+1).toString()).slice(-2)}) 🎲 ${e} \n`;
            return s;
            },"")}Résultat : ${roll.result()}\nMises : ${roll.mise()}\`\`\``) 
    }         
}
const reRollDice = async msg => {
    let user = players.find(e=>e.id === idUser);
    console.log(user)
    if(user === undefined){
        msg.channel.send(`\`\`\`Lancer d'abord des dés\`\`\``)
    }
    else if(roll === undefined&&user.roll === undefined){
        msg.channel.send(`\`\`\`Lancer d'abord des dés\`\`\``)
    }
    else {
        if(user !== undefined){
            if(!user.roll.rerollDice(...msg.toString().trim().slice(8).split(" "))){
                msg.channel.send(`\`\`\`L'un des dés souhaité n'exite pas\`\`\``)
            }else{
                msg.channel.send(`\`\`\`${(user.name).toUpperCase()}:\n${user.roll.datas.reduce( (s,e,i) => {
                    s+=`${("0"+(i+1).toString()).slice(-2)}) 🎲 ${e} \n`;
                    return s;
                    },"")}Résultat : ${user.roll.result()}\nMises : ${user.roll.mise()}\`\`\``)
                }
        }
        else if(!roll.rerollDice(...msg.toString().trim().slice(8).split(" "))){
             msg.channel.send(`\`\`\`L'un des dés souhaité n'exite pas\`\`\``)
        }
        else {
            msg.channel.send(`\`\`\`${roll.datas.reduce( (s,e,i) => {
            s+=`${("0"+(i+1).toString()).slice(-2)}) 🎲 ${e} \n`;
            return s;
            },"")}Résultat : ${roll.result()}\nMises : ${roll.mise()}\`\`\``) 
        }
    }
}

const map = async msg => {

}

const inventory = async msg => {

}

const quest = async msg => {

}

const save = async msg => {       
    players.forEach(e=> e.roll = undefined)
    await fsPromise.writeFile(jsonPath,JSON.stringify(players));
     msg.channel.send("Nouvelle ajout sauvegarder en local")
}

client.login(TOKEN)