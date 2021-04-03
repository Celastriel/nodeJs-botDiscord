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

let instanceDuel = [undefined,false];
let cardMJBuffer = undefined;
let arrayDuel = [undefined,""]

let idUser;
let roll;
let players = [];

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
    help(msg); 
    init(msg);
    initduelliste(msg);
    info(msg);
    rollDice(msg);
    duel(msg);
    addCard(msg);
    // /map
    if(msg.toString().trim()===prefixeTools.prefixMap){
        msg.channel.send(`Theah :`, {files: ["./img/theah.PNG"]});
    }
    // DECK
    showDeck(msg)
    save(msg)
});

const help = msg => {
    if(msg.toString().trim() === prefixeTools.prefixHelp){
        msg.channel.send(`\`\`\`Command:\n&roll n: Lancer les dés\n&reroll ...n: Relancer les dés de votre choix\n&map : Afficher la carte\n&deck : vous envoye le deck en message privé\`\`\``)
    }
}

const showDeck = msg => {
    if(msg.toString().trim().split(" ")[0]===prefixeTools.prefixDeck){
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
                if(player.isDuellist){
                    msg.channel.send(`\`Vous n'est pas duelliste, restez à vostre place\``)
                }else{
                    msg.channel.send(`\`Votre deck vous a été livré en mp\``)
                    msg.author.send({files : player.showDeck()})
                }
            }
            
        }
    }
}

const init = msg => {
    if(msg.toString().trim().split(" ")[0]===prefixeTools.prefixInit&&msg.toString().trim().split(" ")[1]===undefined){
        msg.channel.send(`\`\`\`&init nom heroisme richesse reputation \`\`\``)
    }

    if(msg.toString().trim().split(" ")[0]===prefixeTools.prefixInit&&msg.toString().trim().split(" ")[1]!==undefined){
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
    if(msg.toString().trim() === prefixeTools.prefixInitDuelliste){
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
}

const addCard = msg => {
    if(msg.toString().trim().split(" ")[0] === prefixeTools.prefixAddCard){
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
}

const info = msg => {
    if(msg.toString().trim() === prefixeTools.prefixInfo){
        const player = players.find(e=>e.id === idUser)
        if(player!==undefined){
            msg.reply(`\`${player.showInfos()}\n${player.showHealth()}\``)
        }else{

        }
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
    // roll
    if(msg.toString().trim().slice(0,6)===prefixeTools.prefixRoll){
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
    // reroll arg
    if(msg.toString().trim().slice(0,8)===prefixeTools.prefixReRoll){
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
}

const save = async msg => {
    if(msg.toString().trim()===prefixeTools.prefixSave){
        
        players.forEach(e=> e.roll = undefined)
        await fsPromise.writeFile(jsonPath,JSON.stringify(players));
        msg.channel.send("Nouvelle ajout sauvegarder en local")
        
    }
}

client.login(TOKEN)