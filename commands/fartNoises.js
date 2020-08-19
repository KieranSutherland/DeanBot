import fs from 'fs';
import path from 'path';
import * as constants from './../constants.js';

const getListOfFartFilenames = () => fs.readdirSync(constants.fartNoisesDir);

const getRandomFartFilename = () => getListOfFartFilenames()[Math.floor(Math.random() * getListOfFartFilenames().length)];

export const fartNoises = (message) => {
    playFartNoise(message.member.voice.channel);
}

export const playFartNoise = (voiceChannel) => {
    if(!voiceChannel) return;
    voiceChannel.join().then(connection => {
        // connection.on('speaking', handleVocalMessage);
        // connection.on('guildMemberSpeaking', handleVocalMessage);
        // connection.on('speaking', (user, speaking) => {
        //     console.log("speaking = " + speaking);
        //     if (speaking) {
        //         console.log(`I'm listening to ${user}`);
        //         connection.play(path.join(constants.fartNoisesDir, getRandomFartFilename()));
        //         // this creates a 16-bit signed PCM, stereo 48KHz PCM stream.
        //         // const audioStream = receiver.createPCMStream(user);
        //         // // create an output stream so we can dump our data in a file
        //         // const outputStream = generateOutputFile(voiceChannel, user);
        //         // // pipe our audio data into the file stream
        //         // audioStream.pipe(outputStream);
        //         // outputStream.on("data", console.log);
        //         // // when the stream ends (the user stopped talking) tell the user
        //         // audioStream.on('end', () => {
        //         //     console.log(`I'm no longer listening to ${user}`);
        //         // });
        //     }
        //   });
        const dispatcher = connection.play(path.join(constants.fartNoisesDir, getRandomFartFilename()));
        dispatcher.on("end", end => voiceChannel.leave());
    })
}
    });
}

const handleVocalMessage = (userOrMember, speaking) => {
    console.log(userOrMember.displayName || userOrMember.username, "is talking?", speaking);
  }
