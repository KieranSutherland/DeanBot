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
Object.defineProperty(exports, "__esModule", { value: true });
exports.runCommand = exports.commandMap = void 0;
// import { insult, pic, help, msgToChannel, fart, activity, exileUser, say } from './commands/Commands';
const insult_js_1 = require("./commands/insult.js");
const pic_js_1 = require("./commands/pic.js");
const help_js_1 = require("./commands/help.js");
const msgToChannel_js_1 = require("./commands/msgToChannel.js");
const fart_js_1 = require("./commands/fart.js");
const activity_js_1 = require("./commands/activity.js");
const exileUser_js_1 = require("./commands/exileUser.js");
const say_js_1 = require("./commands/say.js");
const constants = __importStar(require("./constants.js"));
const radio_js_1 = require("./commands/radio.js");
exports.commandMap = {
    'insult': insult_js_1.insult,
    'pic': pic_js_1.pic,
    'msgtochannel': msgToChannel_js_1.msgToChannel,
    'fart': fart_js_1.fart,
    'exile': exileUser_js_1.exileUser,
    'activity': activity_js_1.activity,
    'say': say_js_1.say,
    'help': help_js_1.help,
    'radio': radio_js_1.radio
};
exports.runCommand = (message) => {
    let arg = message.content.substr(constants.prefix.length);
    let command = arg.substr(0, arg.includes(' ') ? arg.indexOf(' ') : arg.length).toLowerCase();
    if (!exports.commandMap[command]) {
        message.channel.send('That command doesn\'t exist, dickhead. Type !help to display list of commands');
        return;
    }
    exports.commandMap[command](message);
};
