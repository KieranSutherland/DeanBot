import { playFartNoise } from '../commands/fartNoises.js';

export const fartNoiseVoiceJoin = (oldMember: any, newMember: any) => {
    // Maybe change to oldMember.channel !== newMember.channel so it only plays when someone joins/leaves?
    if(newMember.channel) {
        playFartNoise(newMember.channel);
    }
}