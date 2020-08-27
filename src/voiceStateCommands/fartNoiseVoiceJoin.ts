import { VoiceState } from 'discord.js';
import { playFartNoise } from '../commands/fartNoises.js';

export const fartNoiseVoiceJoin = (oldMember: VoiceState, newMember: VoiceState) => {
    // Maybe change to oldMember.channel !== newMember.channel so it only plays when someone joins/leaves?
    if(newMember.channel) {
        playFartNoise(newMember.channel);
    }
}