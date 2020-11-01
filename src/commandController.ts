import { Message } from 'discord.js';
// import { insult, pic, help, msgToChannel, fart, activity, exileUser, say } from './commands/Commands';
import { insult } from './commands/insult.js';
import { pic } from './commands/pic.js';
import { help } from './commands/help.js';
import { msgToChannel } from './commands/msgToChannel.js';
import { fart } from './commands/fart.js';
import { activity } from './commands/activity.js';
import { exileUser } from './commands/exileUser.js';
import { say } from './commands/say.js'
import * as constants from './constants.js';
import { radio } from './commands/radio.js';

export let commandMap: any = {
    'insult' : insult,
    'pic' : pic,
    'msgtochannel' : msgToChannel,
    'fart' : fart,
    'exile' : exileUser,
    'activity' : activity,
    'say' : say,
    'help' : help,
    'radio' : radio
};

export const runCommand = (message: Message) => {
    let arg: string = message.content.substr(constants.prefix.length);
    let command: string = arg.substr(0, arg.includes(' ') ? arg.indexOf(' ') : arg.length).toLowerCase();

    if(!commandMap[command]) {
        message.channel.send('That command doesn\'t exist, dickhead. Type !help to display list of commands');
        return;
    }
    
    commandMap[command](message);
}