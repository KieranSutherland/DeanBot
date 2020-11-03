"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stations = exports.radioMetaData = void 0;
const axios_1 = __importDefault(require("axios"));
const jsdom_1 = __importDefault(require("jsdom"));
const JSDOM = jsdom_1.default.JSDOM;
const AxiosInstance = axios_1.default.create();
const classicStation = () => {
    let stations = [
        'http://uk2.internet-radio.com:31491/',
        'http://uk7.internet-radio.com:8000/',
        'http://uk3.internet-radio.com:8405/live'
    ];
    return stations[Math.floor(Math.random() * stations.length)];
};
const jazzStation = () => {
    let stations = [
        'http://us2.internet-radio.com:8443/',
        'http://us5.internet-radio.com:8096/',
        'http://us4.internet-radio.com:8266/',
        'http://uk6.internet-radio.com:8179/',
        'http://us3.internet-radio.com:8485/',
        'http://us5.internet-radio.com:8022/',
        'http://uk3.internet-radio.com:8048/'
    ];
    let station = stations[Math.floor(Math.random() * stations.length)];
    console.log("utils: ", station);
    return station;
};
exports.radioMetaData = (stationUrl) => {
    console.log('in metdata');
    let responseData;
    AxiosInstance.get(stationUrl)
        .then(response => {
        //console.log(response.data)
        responseData = response.data;
    }).catch(console.error);
    const dom = new JSDOM(responseData);
    console.log(dom.serialize());
};
exports.stations = {
    'jazz': jazzStation,
    'classical': classicStation,
};
