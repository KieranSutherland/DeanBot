"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.say = void 0;
const google_tts_api_1 = __importDefault(require("google-tts-api"));
exports.say = (message) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    let args = message.content.split(' ');
    if (args.length < 2) {
        message.channel.send('```Error: gotta specify a sentence to say, retard\nUse !help for help```');
        return;
    }
    let sentence = message.content.substr(args[0].length + 1, message.content.length);
    let voiceChannel = (_a = message.member) === null || _a === void 0 ? void 0 : _a.voice.channel;
    if (!voiceChannel)
        return;
    const connection = yield voiceChannel.join();
    // Go to for supported language codes: https://cloud.google.com/speech-to-text/docs/languages
    google_tts_api_1.default(sentence, 'en-GB', 1) // speed normal = 1
        .then(function (url) {
        connection.play(url);
    })
        .catch(function (err) {
        console.error(err.stack);
    });
});
