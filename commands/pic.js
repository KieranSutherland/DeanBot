import fs from 'fs';

const getListOfImageFilenames = () => fs.readdirSync('./resources/dean_pics/');

const getRandomPicFilename = () => getListOfImageFilenames()[Math.floor(Math.random() * getListOfImageFilenames().length)];

export const pic = (message) => message.channel.send('', {files: ['./resources/dean_pics/' + getRandomPicFilename()]});