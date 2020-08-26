import { Message, Channel, TextChannel, ChannelResolvable } from 'discord.js';

export const msgToChannel = (message: Message) => {
    let args: string[] = message.content.split(' ');
    if(args.length < 3) {
        message.channel.send('```Error: gotta use two parameters dipshit\nUse !help for help```');
        return;
    }
    let channelParam: string = args[1];
    let messageParam: string = message.content.substr(args[0].length + channelParam.length + 2, message.content.length);
    
    const channel: Channel | undefined = message.client.channels.cache
        .find((channel: Channel) => channel instanceof TextChannel && (<TextChannel>channel).name === channelParam); 

    if(!channel) {
        message.channel.send('```Error: bro, a text channel called \'' + channelParam + '\' doesn\'t exist bro\nUse !help for help```')
        return;
    }

    (<TextChannel>channel).send(messageParam);
    
}