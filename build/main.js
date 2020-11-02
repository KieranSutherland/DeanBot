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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const constants = __importStar(require("./constants.js"));
const commandController_js_1 = require("./commandController.js");
const fartNoiseVoiceJoin_js_1 = require("./voiceStateCommands/fartNoiseVoiceJoin.js");
const exileUserVoiceJoin_js_1 = require("./voiceStateCommands/exileUserVoiceJoin.js");
const dailyPic_js_1 = require("./dailyPic.js");
var client = new discord_js_1.default.Client(); // The bot
client.on('voiceStateUpdate', (oldMember, newMember) => {
    // Tell Dean to get back to work when he enters a voice channel
    // backToWorkDeanVoiceJoin(oldMember, newMember); temporarily removed because it's annoying
    // Play fart noise whenever someone joins a channel
    fartNoiseVoiceJoin_js_1.fartNoiseVoiceJoin(oldMember, newMember);
    // Check if new user is the one to be avoided, if so, take him away
    exileUserVoiceJoin_js_1.exileUserVoiceJoin(newMember);
});
// Command handler and dean shutter-upper
client.on('message', (message) => {
    if (message.author.id === constants.deanUserId && new Date().getDay() != 0) {
        if (message.content.startsWith(constants.prefix)) {
            message.channel.send('Fuck off Dean you\'re only allowed to use commands on Sundays because YOU STINK');
        }
        else {
            message.channel.send('> ' + message.content + '\nShut up Dean');
        }
        return;
    }
    if (message.author.bot || !message.content.startsWith("!")) {
        return;
    }
    commandController_js_1.runCommand(message);
});
// Daily Dean pic
client.on('ready', () => {
    console.log("Bot online");
    dailyPic_js_1.dailyPic(client);
});
/*  TO FART ON DEAN
client.on('guildMemberSpeaking', (member, speaking) => {

    console.log('guildmemberspeaking')
    console.log("member:  ",  member.displayName)

    if(member.id === constants.botUserId && speaking){
        console.log('BOT IS TALKING')
    }

}) */
client.login(constants.loginKey);
