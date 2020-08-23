import { insult } from './commands/insult.js';
import { pic } from './commands/pic.js';
import { help } from './commands/help.js';
import { msgToChannel } from './commands/msgToChannel.js';
import { fartNoises } from './commands/fartNoises.js';
import { exileUser } from './commands/exileUser.js';
import * as constants from './constants.js';

export let commandMap: any = {
    'insult' : insult,
    'pic' : pic,
    'msgtochannel' : msgToChannel,
    'fart' : fartNoises,
    'exile' : exileUser,
    'help' : help
};

export const runCommand = (message: any) => {
    let arg: string = message.content.substr(constants.prefix.length);
    let command: string = arg.substr(0, arg.includes(' ') ? arg.indexOf(' ') : arg.length).toLowerCase();

    if(!commandMap[command]) {
        message.channel.send('That command doesn\'t exist, dickhead. Type !help to display list of commands');
        return;
    }
    commandMap[command](message);
}