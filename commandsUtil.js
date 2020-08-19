export const getUserIds = (channel) => {
    let userIds = [];
    if(!channel) return userIds;

    for (let [ snowflake, guildMember ] of channel.members) { 
        userIds.push(guildMember.user.id) 
    }
    return userIds;
}