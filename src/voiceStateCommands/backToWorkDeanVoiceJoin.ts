import * as constants from '../constants.js';
import * as commandsUtil from '../commandsUtil.js';

export const backToWorkDeanVoiceJoin = (oldMember: any, newMember: any) => {
    if(!oldMember.channel && newMember.channel && oldMember.id == constants.deanUserId) {

        if(commandsUtil.getUserIds(newMember.channel).includes(constants.deanUserId)){
            newMember.client.channels.cache.get(constants.normies).send('GET BACK TO WORK DEAN');
        }
    }
}