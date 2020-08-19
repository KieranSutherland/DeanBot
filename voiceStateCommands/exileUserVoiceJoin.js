import * as commandsUtil from './../commandsUtil.js';
import { usernameToAvoid } from './../commands/exileUser.js'
import * as constants from './../constants.js';

export const exileUserVoiceJoin = (oldMember, thingThatCanAccessGuild) => {
    // let userIds = commandsUtil.getUserIds(newMember.channel);
    let avoidedUsernameId = constants.nameToUserId[usernameToAvoid];
    let avoidedMember = thingThatCanAccessGuild.guild.members.cache.get(avoidedUsernameId);
    if(avoidedMember && avoidedMember.voice && avoidedMember.voice.channel !== thingThatCanAccessGuild.guild.channels.cache.get(constants.exile)) {
        avoidedMember.voice.setChannel(thingThatCanAccessGuild.guild.channels.cache.get(constants.exile));
    }
    // if(userIds.includes(usernameId) && userIds.length > 1) {
    //     newMember.channel.members.get(usernameId).voice.setChannel(newMember.client.channels.cache.get(constants.exile));
    // }
}
