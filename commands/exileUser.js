import { exileUserVoiceJoin } from './../voiceStateCommands/exileUserVoiceJoin.js';
import * as constants from './../constants.js';

export var usernameToAvoid = null;

export const exileUser = (message) => {
    let args = message.content.split(' ');
    if(args.length < 2) {
        message.channel.send('```Error: gotta specify a user to avoid as a parameter, retard\nUse !help for help```');
        return;
    }
    let userParam = args[1].toLowerCase();
    if(userParam === 'reset') {
        message.channel.send('Exile for ' + usernameToAvoid + ' has now been reset');
        usernameToAvoid = null;
        return;
    }
    if(!constants.nameToUserId[userParam]) {
        message.channel.send('```Error: user specified in the parameter does not exist, retard\nUse !help for help```');
        return;
    }
    usernameToAvoid = userParam;
    message.channel.send('Everyone is now avoiding ' + usernameToAvoid + ' (any previous exile has been removed)');

    // Move user to exile if they're already in a channel
    exileUserVoiceJoin(undefined, message);
}