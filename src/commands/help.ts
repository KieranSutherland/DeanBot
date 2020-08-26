const helpMessage: string = '```'
                    + 'Need help do you, little bitch? Here are the current supported commands:'
                    + '\n\t!insult - send a random insult about Dean'
                    + '\n\t!pic - send a random pic of Dean'
                    + '\n\t!msgToChannel [channel name] [message] - sends your custom message to the specified channel'
                    + '\n\t!fart - play a random fart noise in the voice channel the member is currently in'
                    + '\n\t!exile [name] - exiles the specified user (use our irl names)'
                    + '\n\t!activity [activity] - sets an activity for the bot to be shown doing (specify no activity to reset it)'
                    + '```';

export const help = (message: any) => message.channel.send(helpMessage);