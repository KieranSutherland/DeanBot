const helpMessage = '```' +
                    'Need help do you, little bitch? Here are the current supported commands:' +
                    '\n\t!insult - send a random insult about Dean' +
                    '\n\t!pic - send a random pic of Dean' +
                    '\n\t!msgToChannel [channel name] [message] - sends your custom message to the specified channel' +
                    '```';

export const help = (message) => message.channel.send(helpMessage);