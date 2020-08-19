import { playFartNoise } from './../commands/fartNoises.js';

export const fartNoiseVoiceJoin = (oldMember, newMember) => {
    // Maybe change to oldMember.channel !== newMember.channel so it only plays when someone joins/leaves?
    if(newMember.channel) {
        playFartNoise(newMember.channel);
    }
}