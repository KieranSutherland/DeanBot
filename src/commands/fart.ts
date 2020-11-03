import { Message, VoiceChannel, VoiceConnection } from 'discord.js';
import fs from 'fs';
import path from 'path';
import * as constants from '../constants.js';
import { playOtherSound } from './radio.js';

const getListOfFartFilenames = () => fs.readdirSync(constants.fartNoisesDir);

const getRandomFartFilename = () => getListOfFartFilenames()[Math.floor(Math.random() * getListOfFartFilenames().length)];

export const fart = async (message: Message) => {

    let voiceChannel = message.member?.voice.channel

    if(!voiceChannel) return;

    const connection = await voiceChannel.join();

    playOtherSound(connection);
}

export const playFartNoise = async (voiceConnection: VoiceConnection | null | undefined) => {
    voiceConnection?.play(path.join(constants.fartNoisesDir, getRandomFartFilename()))
}