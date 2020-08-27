import Discord from 'discord.js';

export const getUserIds = (channel: any) => {
    let userIds: any = [];
    if(!channel) return userIds;

    for (let [ snowflake, guildMember ] of channel.members) { 
        userIds.push(guildMember.user.id) 
    }
    return userIds;
}