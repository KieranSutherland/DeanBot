import * as constants from './../constants.js';

export const backToWorkDeanVoiceJoin = (oldMember, newMember) => {
    if(!oldMember.channel && newMember.channel && oldMember.id == constants.deanUserId) {

        if(commandsUtil.getUserIds(newMember.channel).includes(constants.deanUserId)){
            newMember.client.channels.cache.get(constants.normies).send('GET BACK TO WORK DEAN');
        }
    }
}