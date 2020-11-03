"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.playFartNoise = exports.fart = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const constants = __importStar(require("../constants.js"));
const radio_js_1 = require("./radio.js");
const getListOfFartFilenames = () => fs_1.default.readdirSync(constants.fartNoisesDir);
const getRandomFartFilename = () => getListOfFartFilenames()[Math.floor(Math.random() * getListOfFartFilenames().length)];
exports.fart = (message) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    let voiceChannel = (_a = message.member) === null || _a === void 0 ? void 0 : _a.voice.channel;
    if (!voiceChannel)
        return;
    const connection = yield voiceChannel.join();
    radio_js_1.playOtherSound(connection);
});
exports.playFartNoise = (voiceConnection) => __awaiter(void 0, void 0, void 0, function* () {
    const dispatcher = voiceConnection === null || voiceConnection === void 0 ? void 0 : voiceConnection.play(path_1.default.join(constants.fartNoisesDir, getRandomFartFilename()));
});
