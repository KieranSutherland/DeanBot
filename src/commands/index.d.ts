import { Message } from 'discord.js';

import { insult } from './insult.js';
import { pic } from './pic.js';
import { help } from './help.js';
import { msgToChannel } from './msgToChannel.js';
import { fart } from './fart.js';
import { activity } from './activity.js';
import { exileUser } from './exileUser.js';
import { say } from './say.js';

declare module Commands {
    export function insult(message: Message);
    export function pic(message: Message);
    export function help(message: Message);
    export function msgToChannel(message: Message);
    export function fart(message: Message);
    export function activity(message: Message);
    export function exileUser(message: Message);
    export function say(message: Message);
}

declare function insult(message: Message);
declare function pic(message: Message);
declare function help(message: Message);
declare function msgToChannel(message: Message);
declare function fart(message: Message);
declare function activity(message: Message);
declare function exileUser(message: Message);
declare function say(message: Message);

// export {
//     insult,
//     pic,
//     help,
//     msgToChannel,
//     fart,
//     activity,
//     exileUser,
//     say,
// }