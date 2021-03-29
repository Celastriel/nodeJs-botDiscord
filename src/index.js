const discordTools = require('discord.js');
const events = require('events');
const token = require('../module/Token')

const botEvent = new events.EventEmitter();
const client = new discordTools.Client();

const PREFIX = "-";
let numberOfDice;
let typeOfDice;
const DICE = [4,6,8,10,12,20];
const datas = [];

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
});

//2D10
client.on('message',msg=> {
    if(msg.toString().trim().toLowerCase().includes("d")&&msg.toString().trim().charAt(0)==="-"){
        [numberOfDice,typeOfDice] = msg.toString().trim().slice(1).split("d")
        if(parseInt(numberOfDice)>100)msg.reply("Too many dice, inférieur à 100 Connard");
        else if(DICE.find(e=>e===parseInt(typeOfDice))===undefined)msg.reply(`${typeOfDice} n'existe pas Enculé`)
        else {
            botEvent.emit("rand");
            msg.reply(`\n${datas.reduce( (s,e) => {
                s+=`🎲 ${e} \n`;
                return s;
            },"")}`) 
            console.log(datas)
            datas.splice(0,datas.length)
        }
    }
    
    
});

botEvent.on("rand",()=>{
    console.log("Bot")
    for(let i=0;i<parseInt(numberOfDice);i++){
        datas.push(Math.floor(Math.random() * Math.floor(typeOfDice))+1);
    }
})

client.login(token)