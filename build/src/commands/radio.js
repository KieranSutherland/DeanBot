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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.playOtherSound = exports.radio = void 0;
const axios_1 = __importDefault(require("axios"));
const jsdom_1 = __importDefault(require("jsdom"));
const fart_1 = require("./fart");
const JSDOM = jsdom_1.default.JSDOM;
const AxiosInstance = axios_1.default.create();
var currentStationUrl = '';
const stations = {
    'jazz': [
        'http://us2.internet-radio.com:8443/',
        // 'http://us5.internet-radio.com:8096/',
        // 'http://us4.internet-radio.com:8266/',
        'http://uk6.internet-radio.com:8179/',
    ],
    'classical': [
        'http://uk2.internet-radio.com:31491/',
        'http://uk7.internet-radio.com:8000/',
        'http://uk3.internet-radio.com:8405/'
    ],
};
exports.radio = (message) => {
    const args = message.content.split(' ');
    if (args.length < 2) {
        message.channel.send('Error: cmon kid gimme something to spin here');
    }
    else {
        const command = args[1];
        if (!commandMap[command]) {
            message.channel.send('That command doesn\'t exist for radio, dickhead. Type !radio help to display list of commands');
            return;
        }
        commandMap[command](message);
    }
};
const play = (message) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const VoiceChannel = (_a = message.member) === null || _a === void 0 ? void 0 : _a.voice.channel;
    if (!VoiceChannel)
        return;
    const args = message.content.split(' ');
    if (args.length < 3) {
        message.channel.send('Pls specify what genre you wanties');
    }
    const genre = args[2];
    const stationUrl = getRandomStationUrl(genre);
    console.log(stationUrl);
    radioMetaData(stationUrl);
    const vc = yield VoiceChannel.join();
    vc.play(stationUrl, { volume: 0.314159265359 });
    currentStationUrl = stationUrl;
});
const pause = (message) => __awaiter(void 0, void 0, void 0, function* () {
});
const who = () => {
};
const help = (message) => {
    const helpMessage = `
        Radio Retard FM: 
        \n\n !radio play (genre/radio name)  - play radio of genre/name
        \n\n !radio pause - pause da radio
        \n\n !radio who - who DA FUCK is playin right now??
        `;
    message.channel.send(helpMessage);
};
const commandMap = {
    'play': play,
    'pause': pause,
    'who': who,
    'help': help
};
const radioMetaData = (stationUrl) => {
    console.log('in metdata');
    var responseData;
    AxiosInstance.get(stationUrl)
        .then(response => {
        //console.log(response.data)
        responseData = response.data;
    }).catch(console.error);
    const dom = new JSDOM(responseData);
    console.log(JSON.stringify(dom.window.JSON));
};
const getRandomStationUrl = (genre) => {
    if (!stations[genre]) {
        return;
    }
    const selectedStations = stations[genre];
    return selectedStations[Math.floor(Math.random() * selectedStations.length)];
};
exports.playOtherSound = (connection) => {
    fart_1.playFartNoise(connection);
    currentStationUrl ? connection.play(currentStationUrl, { volume: 0.314159265359 }) : connection.off;
};
