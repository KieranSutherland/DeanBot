"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activity = void 0;
exports.activity = (message) => {
    var _a, _b;
    let args = message.content.split(' ');
    if (args.length < 2) {
        (_a = message.client.user) === null || _a === void 0 ? void 0 : _a.setActivity(undefined);
        return;
    }
    let activity = message.content.substr(args[0].length + 1, message.content.length);
    (_b = message.client.user) === null || _b === void 0 ? void 0 : _b.setActivity(activity);
};
