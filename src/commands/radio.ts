import { Message, VoiceChannel, VoiceConnection } from 'discord.js'
import axios from 'axios'
import { response } from 'express'
import jsdom from 'jsdom'

const JSDOM = jsdom.JSDOM
const AxiosInstance = axios.create()
var currentStationUrl = ''

const stations: any = {
	'jazz': [
		'http://us2.internet-radio.com:8443/',
		// 'http://us5.internet-radio.com:8096/',
		// 'http://us4.internet-radio.com:8266/',
		'http://uk6.internet-radio.com:8179/',
		// 'http://us3.internet-radio.com:8485/',
		// 'http://us5.internet-radio.com:8022/',
		// 'http://uk3.internet-radio.com:8048/'
	],
    'classical': [
		'http://uk2.internet-radio.com:31491/',
		'http://uk7.internet-radio.com:8000/',
		'http://uk3.internet-radio.com:8405/'
	],
    //'christmas' : christmasStation 
}

export const radio = (message: Message) => {
	const args: string[] = message.content.split(' ')
	
	if (args.length < 2) {
		message.channel.send('Error: cmon kid gimme something to spin here')
	} else {
		const command: string = args[1]
        if (!commandMap[command]) {
            message.channel.send('That command doesn\'t exist for radio, dickhead. Type !radio help to display list of commands')
            return
        }
        commandMap[command](message)
	}
}

const play = async (message: Message) => {
    const VoiceChannel: VoiceChannel | null | undefined = message.member?.voice.channel
    if (!VoiceChannel) return

	const args: string[] = message.content.split(' ')
	if (args.length < 3) {
		message.channel.send('Pls specify what genre you wanties')
	}
    const genre: string = args[2]
    const stationUrl: string = getRandomStationUrl(genre)

    console.log(stationUrl)

    radioMetaData(stationUrl)

    const vc = await VoiceChannel.join()
	vc.play(stationUrl, { volume: 0.314159265359 })
	currentStationUrl = stationUrl
}

const pause = async (message: Message) => {

}

const who = () => {

}

const help = (message: Message) => {
    const helpMessage: string = `
        Radio Retard FM: 
        \n\n !radio play (genre/radio name)  - play radio of genre/name
        \n\n !radio pause - pause da radio
        \n\n !radio who - who DA FUCK is playin right now??
        `;
    message.channel.send(helpMessage)
}

const commandMap: any = {
	'play': play,
    'pause': pause,
    'who': who,
    'help': help
}

const radioMetaData = (stationUrl: string) => {
    console.log('in metdata')
    var responseData: any;

    AxiosInstance.get(stationUrl)
        .then(
            response => {
                //console.log(response.data)
                responseData = response.data
            }
        ).catch(console.error)

    const dom = new JSDOM(responseData)
    console.log(JSON.stringify(dom.window.JSON))
}

const getRandomStationUrl = (genre: string) => {
	if (!stations[genre]) {
		return
	}
	const selectedStations = stations[genre]
	return selectedStations[Math.floor(Math.random() * selectedStations.length)]
}

export const playOtherSound = (connection: VoiceConnection, soundUrl: string) => {
	const dispatcher = connection.play(soundUrl)
	dispatcher.on("end", (end: any) => connection.play(currentStationUrl))
}

