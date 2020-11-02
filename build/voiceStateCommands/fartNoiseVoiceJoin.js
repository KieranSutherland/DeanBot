"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fartNoiseVoiceJoin = void 0;
const fart_js_1 = require("../commands/fart.js");
exports.fartNoiseVoiceJoin = (oldMember, newMember) => {
    // Maybe change to oldMember.channel !== newMember.channel so it only plays when someone joins/leaves?
    if (newMember.channel) {
        fart_js_1.playFartNoise(newMember.channel);
    }
};
