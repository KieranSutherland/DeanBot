import { Message, VoiceChannel } from 'discord.js'
import { radioMetaData, stations } from '../radioUtils'

const play = async (message: Message) => {

    let VoiceChannel: VoiceChannel | null | undefined = message.member?.voice.channel;
    if (!VoiceChannel) return;

    let args = message.content.split(' ')
    let term: string = args[2]

    let stationUrl: string = stations[term]()

    console.log(stationUrl)

    radioMetaData(stationUrl)

    let vc = await VoiceChannel.join()
    vc.play(stationUrl, { volume: 0.314159265359 })

}

const pause = () => {

}

const who = () => {

}

const help = (message: Message) => {

    const helpMessage: string = '```'
        + 'Radio Retard FM: '
        + '\n\n !radio play (genre/radio name)  - play radio of genre/name'
        + '\n\n !pause - pause da radio'
        + '\n\n !who - who DA FUCK is playin right now??'
        + '```';

    message.channel.send(helpMessage)

}

export let commandMap: any = {
    'pause': pause,
    'who': who,
    'help': help
};

/**
 * Handle radio sub-commands
 *  play + searchTerm
 *  pause
 *  who?
 *  help
 * 
 */
export const radio = (message: Message) => {

    let args = message.content.split(' ')

    if (args.length < 2) {
        message.channel.send('```Error: cmon kid gimme something to spin here```')
        return;
    } else if (args.length > 1) {
        play(message)
    } else {
        let command: string = args[1]
        if (!commandMap[command]) {
            message.channel.send('That command doesn\'t exist, dickhead. Type !help to display list of commands');
            return;
        }
        commandMap[command](message)
    }
}



