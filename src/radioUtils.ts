import axios from 'axios'
import { response } from 'express'
import jsdom from 'jsdom'

const JSDOM = jsdom.JSDOM
const AxiosInstance = axios.create()

const classicStation = (): string => {

    let stations = [
        'http://uk2.internet-radio.com:31491/',
        'http://uk7.internet-radio.com:8000/',
        'http://uk3.internet-radio.com:8405/live'
    ]

    return stations[Math.floor(Math.random() * stations.length)]
}

const jazzStation = (): string => {

    let stations = [
        'http://us2.internet-radio.com:8443/',
        'http://us5.internet-radio.com:8096/',
        'http://us4.internet-radio.com:8266/',
        'http://uk6.internet-radio.com:8179/',
        'http://us3.internet-radio.com:8485/',
        'http://us5.internet-radio.com:8022/',
        'http://uk3.internet-radio.com:8048/'
    ]

    let station = stations[Math.floor(Math.random() * stations.length)]
    console.log("utils: ", station)

    return station
}

export const radioMetaData = (stationUrl: string) => {
    console.log('in metdata')
    let responseData: any;

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

export const stations: any = {
    'jazz': jazzStation,
    'classical': classicStation,
    //'christmas' : christmasStation 
}

