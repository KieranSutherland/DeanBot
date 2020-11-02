"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.radio = exports.commandMap = void 0;
const radioUtils_1 = require("../radioUtils");
const play = (message) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    let VoiceChannel = (_a = message.member) === null || _a === void 0 ? void 0 : _a.voice.channel;
    if (!VoiceChannel)
        return;
    let args = message.content.split(' ');
    let term = args[2];
    let stationUrl = radioUtils_1.stations[term]();
    console.log(stationUrl);
    radioUtils_1.radioMetaData(stationUrl);
    let vc = yield VoiceChannel.join();
    vc.play(stationUrl, { volume: 0.314159265359 });
});
const pause = () => {
};
const who = () => {
};
const help = (message) => {
    const helpMessage = '```'
        + 'Radio Retard FM: '
        + '\n\n !radio play (genre/radio name)  - play radio of genre/name'
        + '\n\n !pause - pause da radio'
        + '\n\n !who - who DA FUCK is playin right now??'
        + '```';
    message.channel.send(helpMessage);
};
exports.commandMap = {
    'pause': pause,
    'who': who,
    'help': help
};
/**
 * Handle radio sub-commands
 *  play + searchTerm
 *  pause
 *  who?
 *  help
 *
 */
exports.radio = (message) => {
    let args = message.content.split(' ');
    if (args.length < 2) {
        message.channel.send('```Error: cmon kid gimme something to spin here```');
        return;
    }
    else if (args.length > 1) {
        play(message);
    }
    else {
        let command = args[1];
        if (!exports.commandMap[command]) {
            message.channel.send('That command doesn\'t exist, dickhead. Type !help to display list of commands');
            return;
        }
        exports.commandMap[command](message);
    }
};
