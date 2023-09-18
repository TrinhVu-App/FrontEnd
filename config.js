import { Dimensions } from "react-native";

const BASE_WIDTH = 683.4285714285714;
const BASE_HEIGHT = 411.42857142857144;

export const screenWidth = Dimensions.get("window").width;
export const screenHeight = Dimensions.get("window").height;

export const WIDTH_SCALE = screenWidth/BASE_WIDTH
export const HEIGHT_SCALE = screenHeight/BASE_HEIGHT

console.log("Screen width: " + screenWidth);
console.log("Screen height: " + screenHeight)

console.log("WIDTH SCALE: " + WIDTH_SCALE);
console.log("HEIGHT SCALE: "+ HEIGHT_SCALE);


export const BASE_URL = 'https://2a6a-222-252-17-100.ngrok-free.app'
export const RESOURCE_PATH = '../../resource/4057_1_4307_1688701526'
export const SourceSansPro = require("./assets/font/SourceSansPro-Regular.ttf")
