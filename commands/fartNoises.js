import fs from 'fs';

const getListOfFartFilenames = () => fs.readdirSync('./resources/fart_noises/');

const getRandomFartFilename = () => getListOfFartFilenames()[Math.floor(Math.random() * getListOfFartFilenames().length)];

export const fartNoises = (message) => {
    var voiceChannel = message.member.voice.channel;
    voiceChannel.join().then(connection => {
        const dispatcher = connection.play(getRandomFartFilename());
        dispatcher.on("end", end => voiceChannel.leave());
    })
}