"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserIds = void 0;
exports.getUserIds = (channel) => {
    let userIds = [];
    if (!channel)
        return userIds;
    for (let [snowflake, guildMember] of channel.members) {
        userIds.push(guildMember.user.id);
    }
    return userIds;
};
