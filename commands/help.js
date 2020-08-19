const helpMessage = '```' +
                    'Need help do you, little bitch? Here are the current supported commands:' +
                    '\n\t!insult - send a random insult about Dean' +
                    '\n\t!pic - send a random pic of Dean' +
                    '\n\t!msgToChannel [channel name] [message] - sends your custom message to the specified channel' +
                    '\n\t!fartNoises - play a random fart noise in the voice channel the member is currently in' +
                    '\n\t!exileUser - exiles the specified user (use our irl names)'
                    '```';

export const help = (message) => message.channel.send(helpMessage);