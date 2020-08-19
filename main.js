import Discord, {
	User,
	VoiceChannel
} from 'discord.js';
import {
	runCommand
} from './commandController.js';
import Discord from 'discord.js';
import { runCommand } from './commandController.js';
import { backToWorkDeanVoiceJoin } from './voiceStateCommands/backToWorkDeanVoiceJoin.js';
import { fartNoiseVoiceJoin } from './voiceStateCommands/fartNoiseVoiceJoin.js';
import { exileUserVoiceJoin } from './voiceStateCommands/exileUserVoiceJoin.js';
import * as constants from './constants.js';
import {
joinMessages
} from './resources/joinMessages.js';

var client = new Discord.Client(); // The bot

// Tell Dean to get back to work when he enters a voice channel
client.on('voiceStateUpdate', (oldMember, newMember) => {

	if (!oldMember.channel && newMember.channel && oldMember.id == constants.deanUserId) {

		let newChannelMembers = newMember.channel.members;
		let newUserIds = [];

		for (let [snowflake, guildMember] of newChannelMembers) { newUserIds.push(guildMember.user.id)}

		if (newUserIds.includes(constants.deanUserId)) {
			client.channels.cache.get(constants.normies).send(joinMessages[Math.floor(Math.random() * joinMessages.length)])
		}
	}

client.on('voiceStateUpdate', (oldMember, newMember) => {

    // Tell Dean to get back to work when he enters a voice channel
    backToWorkDeanVoiceJoin(oldMember, newMember);

    // Play fart noise whenever someone joins a channel
    fartNoiseVoiceJoin(oldMember, newMember);

    // Check if new user is the one to be avoided, if so, take him away
    exileUserVoiceJoin(oldMember, newMember);
    
})

// Command handler and dean shutter-upper
client.on('message', message => {

	if (!message.content.startsWith(constants.prefix) || message.author.bot) {
		if (message.member.roles.cache.has(constants.deanRoleId)) {
			message.channel.send('> ' + message.content + '\nShut up Dean');
		}
		return;
	}
	if (message.member.roles.cache.has(constants.deanRoleId)) {
		message.channel.send('Fuck off Dean you\'re not allowed to use this bot YOU STINK');
		return;
	}

	runCommand(message);
    if(message.author.id === constants.deanUserId) {
        if(message.content.startsWith(constants.prefix)) {
            message.channel.send('Fuck off Dean you\'re not allowed to use this bot YOU STINK');
        } else {
            message.channel.send('> ' + message.content + '\nShut up Dean');
        }
        return;
    }

    if(message.author.bot || !message.content.startsWith("!")) {
        return;
    }

    runCommand(message);
});

console.log("Bot online");
client.login(constants.loginKey);