import * as googleTTS from 'google-tts-api';
import { Message, VoiceChannel } from 'discord.js';

export const say = async (message: Message) => {
    let args = message.content.split(' ');
    if (args.length < 2) {
        message.channel.send('```Error: gotta specify a sentence to say, retard\nUse !help for help```');
        return;
    }

    let sentence: string = message.content.substr(args[0].length + 1, message.content.length);

    let voiceChannel: VoiceChannel | null | undefined = message.member?.voice.channel;
    if (!voiceChannel) return;

    const connection = await voiceChannel.join();
    // Go to for supported language codes: https://cloud.google.com/speech-to-text/docs/languages
    try {
        const url = googleTTS.getAudioUrl(sentence, {
            lang: 'en-GB',
            slow: false,
            host: 'https://translate.google.com',
        });
        connection.play(url);
    } catch (err: any) {
        console.error(err.stack);
    }
}