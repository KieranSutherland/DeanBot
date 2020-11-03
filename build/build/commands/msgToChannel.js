"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgToChannel = void 0;
const discord_js_1 = require("discord.js");
exports.msgToChannel = (message) => {
    let args = message.content.split(' ');
    if (args.length < 3) {
        message.channel.send('```Error: gotta use two parameters dipshit\nUse !help for help```');
        return;
    }
    let channelParam = args[1];
    let messageParam = message.content.substr(args[0].length + channelParam.length + 2, message.content.length);
    const channel = message.client.channels.cache
        .find((channel) => channel instanceof discord_js_1.TextChannel && channel.name === channelParam);
    if (!channel) {
        message.channel.send('```Error: bro, a text channel called \'' + channelParam + '\' doesn\'t exist bro\nUse !help for help```');
        return;
    }
    channel.send(messageParam);
};
