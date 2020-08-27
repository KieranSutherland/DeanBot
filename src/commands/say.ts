import GoogleTTS from 'google-tts-api';
import { Message, VoiceChannel } from 'discord.js';

export const say = async (message: Message) => {
    let args = message.content.split(' ');
    if(args.length < 2) {
        message.channel.send('```Error: gotta specify a sentence to say, retard\nUse !help for help```');
        return;
    }
    
    let sentence: string = message.content.substr(args[0].length + 1, message.content.length);

    let voiceChannel: VoiceChannel | null | undefined = message.member?.voice.channel;
    if(!voiceChannel) return;

    const connection = await voiceChannel.join();
    GoogleTTS(sentence, 'en-UK', 1) // speed normal = 1
        .then(function (url: any) {
            connection.play(url);
        })
        .catch(function (err: any) {
            console.error(err.stack);
        });
}