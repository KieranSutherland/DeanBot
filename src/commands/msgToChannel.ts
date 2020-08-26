import { Message, Channel, TextChannel } from 'discord.js';

export const msgToChannel = (message: Message) => {
    let args: string[] = message.content.split(' ');
    if(args.length < 3) {
        message.channel.send('```Error: gotta use two parameters dipshit\nUse !help for help```');
        return;
    }
    let channelParam: string = args[1];
    let messageParam: string = message.content.substr(args[0].length + channelParam.length + 2, message.content.length);
    const channel: Channel | undefined = message.client.channels.cache.find((channel: Channel) => channel.fetch.name === channelParam);
    
    if(channel === undefined) {
        message.channel.send('```Error: bro, a channel called \'' + channelParam + '\' doesn\'t exist bro\nUse !help for help```')
        return;
    }

    if(channel instanceof TextChannel) {
        channel.send(messageParam);
    } else {
        message.channel.send('```Error: bro, that channel isn\'t a text channel bro\nUse !help for help```')
    }
    
}