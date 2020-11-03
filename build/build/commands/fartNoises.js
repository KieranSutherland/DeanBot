"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
    if (k2 === undefined)
        k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
}) : (function (o, m, k, k2) {
    if (k2 === undefined)
        k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function (o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function (o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule)
        return mod;
    var result = {};
    if (mod != null)
        for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.playFartNoise = exports.fartNoises = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const constants = __importStar(require("../constants.js"));
const getListOfFartFilenames = () => fs_1.default.readdirSync(constants.fartNoisesDir);
const getRandomFartFilename = () => getListOfFartFilenames()[Math.floor(Math.random() * getListOfFartFilenames().length)];
exports.fartNoises = (message) => {
    exports.playFartNoise(message.member.voice.channel);
};
exports.playFartNoise = (voiceChannel) => {
    if (!voiceChannel)
        return;
    voiceChannel.join().then((connection) => {
        // connection.on('speaking', handleVocalMessage);
        // connection.on('guildMemberSpeaking', handleVocalMessage);
        // connection.on('speaking', (user, speaking) => {
        //     console.log("speaking = " + speaking);
        //     if (speaking) {
        //         console.log(`I'm listening to ${user}`);
        //         connection.play(path.join(constants.fartNoisesDir, getRandomFartFilename()));
        //         // this creates a 16-bit signed PCM, stereo 48KHz PCM stream.
        //         // const audioStream = receiver.createPCMStream(user);
        //         // // create an output stream so we can dump our data in a file
        //         // const outputStream = generateOutputFile(voiceChannel, user);
        //         // // pipe our audio data into the file stream
        //         // audioStream.pipe(outputStream);
        //         // outputStream.on("data", console.log);
        //         // // when the stream ends (the user stopped talking) tell the user
        //         // audioStream.on('end', () => {
        //         //     console.log(`I'm no longer listening to ${user}`);
        //         // });
        //     }
        //   });
        const dispatcher = connection.play(path_1.default.join(constants.fartNoisesDir, getRandomFartFilename()));
        dispatcher.on("end", (end) => voiceChannel.leave());
    });
};
const handleVocalMessage = (userOrMember, speaking) => {
    console.log(userOrMember.displayName || userOrMember.username, "is talking?", speaking);
};
