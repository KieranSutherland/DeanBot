import Discord, { TextChannel } from 'discord.js';
import * as constants from './constants.js';
import { picToChannel } from './commands/pic.js';

export const dailyPic = (client: Discord.Client) => {
    setTimeout( () => { 
        var dayMillseconds = 1000 * 60 * 60 * 24; // 24 hours;
        setInterval( () => { sendPic(client) }, dayMillseconds)
    }, leftToEight())
}

const leftToEight = () => {
    var d = new Date();
    return (-d + d.setHours(16,20,0,0)); // Sends at 16:20
}

const sendPic = (client: Discord.Client) => {
    var guild = client.guilds.cache.get(constants.guildId);
    if (guild && guild.channels.cache.get(constants.normies) instanceof TextChannel) {
        let textChannel: TextChannel = <TextChannel>guild.channels.cache.get(constants.normies);
        textChannel.send("DAILY DEAN PIC");
        picToChannel(textChannel);
    }
}