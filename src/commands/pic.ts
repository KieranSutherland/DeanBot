import fs from 'fs';
import path from 'path';
import * as constants from '../constants.js';

const getListOfImageFilenames = () => fs.readdirSync(constants.picDir);

const getRandomPicFilename = () => getListOfImageFilenames()[Math.floor(Math.random() * getListOfImageFilenames().length)];

export const pic = (message: any) => message.channel.send('', {files: [path.join(constants.picDir, getRandomPicFilename())]});