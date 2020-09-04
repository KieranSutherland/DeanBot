import { Message, TextChannel, DMChannel, NewsChannel } from 'discord.js';
import fs from 'fs';
import path from 'path';
import * as constants from '../constants.js';

const getListOfImageFilenames = () => fs.readdirSync(constants.picDir);

const getRandomPicFilename = () => getListOfImageFilenames()[Math.floor(Math.random() * getListOfImageFilenames().length)];

export const picToChannel = (channel: TextChannel | DMChannel | NewsChannel) => channel.send('', {files: [path.join(constants.picDir, getRandomPicFilename())]});

export const pic = (message: Message) => picToChannel(message.channel);