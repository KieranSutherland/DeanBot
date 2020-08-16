export const msgToChannel = (message) => {
    let args = message.content.split(' ');
    if(args.length < 3) {
        message.channel.send('```Error: gotta use two parameters dipshit\nUse !help for help```');
        return;
    }
    let channelParam = args[1];
    let messageParam = message.content.substr(args[0].length + channelParam.length + 2, message.content.length);
    const channel = message.client.channels.cache.find(channel => channel.name === channelParam);
    if(channel === undefined) {
        message.channel.send('```Error: bro, a channel called \'' + channelParam + '\' doesn\'t exist bro\nUse !help for help```')
        return;
    }
    channel.send(messageParam);
}