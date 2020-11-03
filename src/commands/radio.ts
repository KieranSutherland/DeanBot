import { Message, VoiceChannel, VoiceConnection } from 'discord.js'
import axios from 'axios'
import { response } from 'express'
import jsdom from 'jsdom'
import { connect } from 'http2'
import { playFartNoise } from './fart'
import BeautifulDom from 'beautiful-dom'
import Axios from 'axios'

const JSDOM = jsdom.JSDOM
const AxiosInstance = axios.create()
var currentStationUrl = ''

const stations: any = {
	'dave': [
		'http://uk6.internet-radio.com:8179/',
    ],
    'megaton': [
        'http://us2.internet-radio.com:8443/'
    ],
    'classical': [
		'http://uk2.internet-radio.com:31491/',
		'http://uk7.internet-radio.com:8000/',
		'http://uk3.internet-radio.com:8405/'
	],
     //christmas
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
        Radio Retd FM: 
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

const radioMetaData = async (stationUrl: string) => {

    var responseData: any;

    console.log('in HELP H ELP EHELP HELKP')
    console.log(stationUrl)

    try{
        responseData = await AxiosInstance.get(stationUrl)
    }catch(e){
        console.log(e)
    }

    responseData ? console.log("responseData: ", responseData) : console.log("none")
}


const getRandomStationUrl = (genre: string) => {
	if (!stations[genre]) {
		return
	}
    const selectedStations = stations[genre]
    let station = selectedStations[Math.floor(Math.random() * selectedStations.length)]
        
    radioMetaData(station)
    return station

}

export const playOtherSound = (connection: VoiceConnection) => {

    playFartNoise(connection)

    currentStationUrl 
        ? 
            setTimeout(() => {connection.play(currentStationUrl, { volume: 0.314159265359 }) }, 1000)
        : 
            connection.off

}

