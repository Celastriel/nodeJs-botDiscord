const discordTools = require('discord.js');
const events = require('events');
const rollTools = require('../module/Roll');
const Profils = require('../module/Profils')
const TOKEN = require('../module/Token');
const prefixeTools = require('../module/prefix')
const deck = require('../module/deck');
const { profile } = require('console');

const botEvent = new events.EventEmitter();
const client = new discordTools.Client();
let roll;
const players = [];

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
});

client.on('message',msg=> {
    if(msg.toString().trim() === prefixeTools.prefixHelp){
        msg.channel.send(`\`\`\`Command:\n&roll n: Lancer les dés\n&reroll ...n: Relancer les dés de votre choix\n&map : Afficher la carte\n&deck : vous envoye le deck en message privé\`\`\``)
    }
    if(msg.toString().trim().split(" ")[0]===prefixeTools.prefixInit&&msg.toString().trim().split(" ")[1]===undefined){
        msg.channel.send(`\`\`\`&init nom heroisme richesse reputation \`\`\``)
    }

    if(msg.toString().trim().split(" ")[0]===prefixeTools.prefixInit&&msg.toString().trim().split(" ")[1]!==undefined){
        const info = [...msg.toString().trim().split(" ")]
        let player = new Profils(msg.author.id,info[1],20,info[2],info[3],info[4])
        players.push(player)
        msg.channel.send(`\`\`\`Joueur créer : ${player.name}\`\`\``)
    }

    // /roll 1
    if(msg.toString().trim().slice(0,6)===prefixeTools.prefixRoll){
        let numberOfDice = parseInt(msg.toString().trim().slice(6))
        if(numberOfDice>rollTools.DICELIMITE){msg.reply(`\`\`\`Too many dice, inférieur à ${rollTools.DICELIMITE}\`\`\``);}
        //else if(rollTools.DICE.find(e=>e===parseInt(typeOfDice))===undefined)msg.reply(`${typeOfDice} n'est pas initialisé comme dé valide`)
        else {
            roll = new rollTools(numberOfDice)
            roll.rollDice();
            msg.channel.send(`\`\`\`${roll.datas.reduce( (s,e,i) => {
                s+=`${i+1}) 🎲 ${e} \n`;
                return s;
                },"")}Résultat : ${roll.result()}\nMises : ${roll.mise()}\`\`\``) 
        }
        
    }
    // /reroll arg
    if(msg.toString().trim().slice(0,8)===prefixeTools.prefixReRoll){
        if(roll === undefined){
            msg.channel.send(`\`\`\`Lancer d'abord des dés\`\`\``)
        }
        else {
            if(!roll.rerollDice(...msg.toString().trim().slice(8).split(" "))){
                msg.channel.send(`\`\`\`L'un des dés souhaité n'exite pas\`\`\``)
            }
            else {msg.channel.send(`\`\`\`${roll.datas.reduce( (s,e,i) => {
                s+=`${i+1}) 🎲 ${e} \n`;
                return s;
                },"")}Résultat : ${roll.result()}\nMises : ${roll.mise()}\`\`\``) 
            }
        }
    }

    // /map
    if(msg.toString().trim()===prefixeTools.prefixMap){
        msg.channel.send(`Theah :`, {files: ["./img/theah.PNG"]});
    }

    // DECK
    if(msg.toString().trim().split(" ")[0]===prefixeTools.prefixDeck){
        if(msg.toString().trim().length>5){
            if(!deck[msg.toString().trim().split(" ")[1]])msg.channel.send("Cartes introuvable")
            else {
                msg.reply("La carte vous-on étais envoyer en message privé")
                msg.author.send({files: [deck[msg.toString().trim().split(" ")[1]]]})}
        }else{
            msg.reply("Les cartes vous-on étais envoyer en message privé")
            let tmpDeck = Object.keys(deck) 
            msg.author.send(`\`\`\`${tmpDeck.map(e=>`🎴 ${e}`).join("\n")}\`\`\``)
        }
    }
});

client.login(TOKEN)