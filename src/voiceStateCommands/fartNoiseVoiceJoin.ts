import { VoiceState } from 'discord.js';
import { playFartNoise } from '../commands/fart.js';
import { playOtherSound } from '../commands/radio.js';

export const fartNoiseVoiceJoin = async (oldMember: VoiceState, newMember: VoiceState) => {
    // Maybe change to oldMember.channel !== newMember.channel so it only plays when someone joins/leaves?
    if(newMember.channel) {
        let channel = newMember.channel
        let vc = await channel.join()
        playOtherSound(vc);
    }
}