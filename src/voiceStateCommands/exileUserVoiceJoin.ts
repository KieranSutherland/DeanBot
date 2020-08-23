import { usernameToAvoid } from '../commands/exileUser.js'
import * as constants from '../constants.js';

export const exileUserVoiceJoin = (oldMember: any, thingThatCanAccessGuild: any) => {
    let avoidedUsernameId = constants.nameToUserId[usernameToAvoid];
    let avoidedMember = thingThatCanAccessGuild.guild.members.cache.get(avoidedUsernameId);
    if(avoidedMember && avoidedMember.voice && avoidedMember.voice.channel !== thingThatCanAccessGuild.guild.channels.cache.get(constants.exile)) {
        avoidedMember.voice.setChannel(thingThatCanAccessGuild.guild.channels.cache.get(constants.exile));
    }
}
