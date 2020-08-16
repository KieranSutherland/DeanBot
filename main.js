import Discord from 'discord.js';
import { runCommand } from './commandController.js';
import * as constants from './constants.js';

let client = new Discord.Client(); // The bot

client.on('message', message => {

    if(!message.content.startsWith(constants.prefix) || message.author.bot) {
        if(message.member.roles.cache.has(constants.deanRoleId)) {
            message.channel.send('> ' + message.content + '\nShut up Dean');
        }
        return;
    } 
    if(message.member.roles.cache.has(constants.deanRoleId)) {
        message.channel.send('Fuck off Dean you\'re not allowed to use this bot YOU STINK');
        return;
    }

    runCommand(message);
});

console.log("Bot online");
client.login('NzQ0MTc1ODUwODMxODcyMDgw.XzfZxA.x5EstcgbGmduhWrHinzC9EILSSA');