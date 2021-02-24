import { Message, VoiceChannel } from 'discord.js';
import fs from 'fs';
import path from 'path';
import * as constants from '../constants.js';

const getListOfFartFilenames = () => fs.readdirSync(constants.fartNoisesDir);

const getRandomFartFilename = () => getListOfFartFilenames()[Math.floor(Math.random() * getListOfFartFilenames().length)];

export const fart = (message: Message) => {
    playFartNoise(message.member?.voice.channel);
}

export const playFartNoise = async (voiceChannel: VoiceChannel | null | undefined) => {
    if (!voiceChannel) return;

    const connection = await voiceChannel.join();
    const dispatcher = connection.play(path.join(constants.fartNoisesDir, getRandomFartFilename()));
    dispatcher.on("end", (end: any) => voiceChannel.leave());
}