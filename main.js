import Discord, { User, VoiceChannel } from 'discord.js';
import { runCommand } from './commandController.js';
import * as constants from './constants.js';

let client = new Discord.Client(); // The bot

// Tell Dean to get back to work when he enters a voice channel
 client.on('voiceStateUpdate', (oldMember, newMember) => {

    if(!oldMember.channel && newMember.channel){

        let channelMembers = newMember.channel.members;
        let userIds = [];

        for (let [ snowflake, guildMember ] of channelMembers) { userIds.push(guildMember.user.id) }

        if(userIds.includes(constants.deanUserId)){
            client.channels.cache.get('257622197420556288').send('GET BACK TO WORK DEAN');
        }
    }
}) 

// Command handler and dean shutter-upper
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
client.login(constants.loginKey);