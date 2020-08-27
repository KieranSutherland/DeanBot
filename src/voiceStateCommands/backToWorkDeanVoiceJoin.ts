import { VoiceState, TextChannel } from 'discord.js';
import * as constants from '../constants.js';
import * as commandsUtil from '../commandsUtil.js';

export const backToWorkDeanVoiceJoin = (oldMember: VoiceState, newMember: VoiceState) => {
    if(!oldMember.channel && newMember.channel && oldMember.id == constants.deanUserId) {

        if(commandsUtil.getUserIds(newMember.channel).includes(constants.deanUserId)){
            (<TextChannel>newMember.client.channels.cache.get(constants.normies))?.send('GET A JOB DEAN');
        }
    }
}