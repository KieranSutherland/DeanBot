import Discord from 'discord.js';
import * as constants from './constants.js';
import { runCommand } from './commandController.js';
import { fartNoiseVoiceJoin } from './voiceStateCommands/fartNoiseVoiceJoin.js';
import { exileUserVoiceJoin } from './voiceStateCommands/exileUserVoiceJoin.js';
import { dailyPic } from './dailyPic.js';

var client = new Discord.Client(); // The bot

client.on('voiceStateUpdate', (oldMember: Discord.VoiceState, newMember: Discord.VoiceState) => {

    // Tell Dean to get back to work when he enters a voice channel
    // backToWorkDeanVoiceJoin(oldMember, newMember); temporarily removed because it's annoying

    // Play fart noise whenever someone joins a channel
    fartNoiseVoiceJoin(oldMember, newMember);

    // Check if new user is the one to be avoided, if so, take him away
    exileUserVoiceJoin(newMember);
    
})

// Command handler and dean shutter-upper
client.on('message', (message: Discord.Message) => {
    
    if(message.author.id === constants.deanUserId && new Date().getDay() != 0) {
        if(message.content.startsWith(constants.prefix)) {
            message.channel.send('Fuck off Dean you\'re only allowed to use commands on Sundays because YOU STINK');
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

// Daily Dean pic
client.on('ready', () => {
    console.log("Bot online");
    
    dailyPic(client);
});

/*  TO FART ON DEAN
client.on('guildMemberSpeaking', (member, speaking) => {

    console.log('guildmemberspeaking')
    console.log("member:  ",  member.displayName)

    if(member.id === constants.botUserId && speaking){
        console.log('BOT IS TALKING')
    }

}) */


client.login(constants.loginKey);