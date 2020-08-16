import fs from 'fs';
import path from 'path';
import * as constants from './../constants.js';

const getListOfFartFilenames = () => fs.readdirSync(constants.fartNoisesDir);

const getRandomFartFilename = () => getListOfFartFilenames()[Math.floor(Math.random() * getListOfFartFilenames().length)];

export const fartNoises = (message) => {
    var voiceChannel = message.member.voice.channel;
    voiceChannel.join().then(connection => {
        const dispatcher = connection.play(path.join(constants.fartNoisesDir, getRandomFartFilename()));
        dispatcher.on("end", end => voiceChannel.leave());
    })
}