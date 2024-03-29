import { Message } from 'discord.js';

export const activity = (message: Message) => {
    let args: string[] = message.content.split(' ');
    if(args.length < 2) {
        message.client.user?.setActivity(undefined);
        return;
    }
    let activity: string = message.content.substr(args[0].length + 1, message.content.length);
    message.client.user?.setActivity(activity);
}