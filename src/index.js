const discordTools = require('discord.js');
const events = require('events');
const rollTools = require('../module/Roll');
const TOKEN = require('../module/Token');
const prefixeTools = require('../module/prefix')

const botEvent = new events.EventEmitter();
const client = new discordTools.Client();
let roll;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
});

client.on('message',msg=> {
    // /roll 1
    if(msg.toString().trim().slice(0,6)===prefixeTools.prefixRoll){
        let numberOfDice = parseInt(msg.toString().trim().slice(6))
        if(numberOfDice>rollTools.DICELIMITE){msg.reply(`Too many dice, inférieur à ${rollTools.DICELIMITE}`);}
        //else if(rollTools.DICE.find(e=>e===parseInt(typeOfDice))===undefined)msg.reply(`${typeOfDice} n'est pas initialisé comme dé valide`)
        else {
            roll = new rollTools(numberOfDice)
            roll.rollDice();
            msg.reply(`\n${roll.datas.reduce( (s,e,i) => {
                s+=`${i+1}) 🎲 ${e} \n`;
                return s;
                },"")}Résultat : ${roll.result()}\nMises : ${roll.mise()}`) 
        }
        
    }
    // /reroll arg
    if(msg.toString().trim().slice(0,8)===prefixeTools.prefixReRoll){
        if(roll === undefined){
            msg.reply("Lancer d'abord des dés")
        }
        else {
            if(roll.rerollDice(...msg.toString().trim().slice(8).split(" "))){
                msg.reply("NTM")
            }
            else {msg.reply(`\n${roll.datas.reduce( (s,e,i) => {
                s+=`${i+1}) 🎲 ${e} \n`;
                return s;
                },"")}Résultat : ${roll.result()}\nMises : ${roll.mise()}`) 
            }
        }
    }

    // /map
    if(msg.toString().trim()==="/map"){
        msg.channel.send("Theah :", {files: ["./img/theah.PNG"]});
    }
});

client.login(TOKEN)