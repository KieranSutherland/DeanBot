import Discord from 'discord.js';
import { runCommand } from './commandController.js';
import { backToWorkDeanVoiceJoin } from './voiceStateCommands/backToWorkDeanVoiceJoin.js';
import { fartNoiseVoiceJoin } from './voiceStateCommands/fartNoiseVoiceJoin.js';
import { exileUserVoiceJoin } from './voiceStateCommands/exileUserVoiceJoin.js';
import * as constants from './constants.js';

var client = new Discord.Client(); // The bot

client.on('voiceStateUpdate', (oldMember: Discord.VoiceState, newMember: Discord.VoiceState) => {

    // Tell Dean to get back to work when he enters a voice channel
    backToWorkDeanVoiceJoin(oldMember, newMember);

    // Play fart noise whenever someone joins a channel
    fartNoiseVoiceJoin(oldMember, newMember);

    // Check if new user is the one to be avoided, if so, take him away
    exileUserVoiceJoin(newMember);
    
})

// Command handler and dean shutter-upper
client.on('message', (message: Discord.Message) => {

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