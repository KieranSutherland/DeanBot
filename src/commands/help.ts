import { Message } from 'discord.js';

const helpMessage: string = '```'
                    + 'Need help do you, little bitch? Here are the current supported commands:'
                    + '\n\n!insult - send a random insult about Dean'
                    + '\n\n!pic - send a random pic of Dean'
                    + '\n\n!msgToChannel [channel name] [message] - sends your custom message to the specified channel (must be text channel)'
                    + '\n\n!fart - play a random fart noise in the voice channel the member is currently in'
                    + '\n\n!exile [name] - exiles the specified user (use our irl names)'
                    + '\n\n!activity [activity] - sets an activity for the bot to be shown doing (specify no activity to reset it)'
                    + '\n\n!say [sentence] - play text to speech of specified sentence'
                    + '```';

export const help = (message: Message) => message.channel.send(helpMessage);