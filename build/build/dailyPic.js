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
exports.dailyPic = void 0;
const discord_js_1 = require("discord.js");
const constants = __importStar(require("./constants.js"));
const pic_js_1 = require("./commands/pic.js");
exports.dailyPic = (client) => {
    setTimeout(() => {
        var dayMillseconds = 1000 * 60 * 60 * 24; // 24 hours;
        setInterval(() => { sendPic(client); }, dayMillseconds);
    }, leftToEight());
};
const leftToEight = () => {
    var d = new Date();
    return (-d + d.setHours(16, 20, 0, 0)); // Sends at 16:20
};
const sendPic = (client) => {
    var guild = client.guilds.cache.get(constants.guildId);
    if (guild && guild.channels.cache.get(constants.normies) instanceof discord_js_1.TextChannel) {
        let textChannel = guild.channels.cache.get(constants.normies);
        textChannel.send("DAILY DEAN PIC");
        pic_js_1.picToChannel(textChannel);
    }
};
