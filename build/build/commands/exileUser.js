"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
    if (k2 === undefined)
        k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
}) : (function (o, m, k, k2) {
    if (k2 === undefined)
        k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function (o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function (o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule)
        return mod;
    var result = {};
    if (mod != null)
        for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exileUser = exports.usernameToAvoid = void 0;
const exileUserVoiceJoin_js_1 = require("../voiceStateCommands/exileUserVoiceJoin.js");
const constants = __importStar(require("../constants.js"));
exports.usernameToAvoid = "";
exports.exileUser = (message) => {
    let args = message.content.split(' ');
    if (args.length < 2) {
        message.channel.send('```Error: gotta specify a user to avoid as a parameter, retard\nUse !help for help```');
        return;
    }
    let userParam = args[1].toLowerCase();
    if (userParam === 'reset') {
        message.channel.send('Exile for ' + exports.usernameToAvoid + ' has now been reset');
        exports.usernameToAvoid = "";
        return;
    }
    if (!constants.nameToUserId[userParam]) {
        message.channel.send('```Error: user specified in the parameter does not exist, retard\nUse !help for help```');
        return;
    }
    exports.usernameToAvoid = userParam;
    message.channel.send('Everyone is now avoiding ' + exports.usernameToAvoid + ' (any previous exile has been removed)');
    // Move user to exile if they're already in a channel
    exileUserVoiceJoin_js_1.exileUserVoiceJoin(message);
};
