import { Dimensions, SafeAreaView, View } from 'react-native'
import React, { useState } from 'react'
import {Text as RNText } from 'react-native';
import { styles, white } from './styles'
import { RESOURCE_PATH } from '../../config'
import {
  Canvas,
  useImage,
  Image,
  Text,
  useFont,
  Paint,
  Rect,
  useTouchHandler,
  useValue,
  Circle,
  Glyphs,
  Skia,
  TextBlob,
} from "@shopify/react-native-skia";
import Spinner from 'react-native-loading-spinner-overlay';
import { Audio } from 'expo-av'
import { useEffect } from 'react';

const imgPath = '../../resource/4057_1_4307_1688701526/background/p/Lg4oU6Aq4DxsWdwLByyCax1672904703767_trong.png'
const saladAudioPath = '../../resource/4057_1_4307_1688701526/word/6kjszamnlooz6nxosg9rkcn5cwdnvk0g_234728/audio/VqWb5YYQqC3KKsTj8fIinD1672980038634.mp3'
//Static data
const saladAudio = require('../../resource/4057_1_4307_1688701526/word/6kjszamnlooz6nxosg9rkcn5cwdnvk0g_234728/audio/VqWb5YYQqC3KKsTj8fIinD1672980038634.mp3')
const boyAudio = require('../../resource/4057_1_4307_1688701526/word/tg06sxgrijviqyngf4gvpcdtw0zkfksb_234728/audio/9YfwFqjA1xNLPiqMHoJldE1672923516079.mp3')
const saladCord = [[355, 130], [450, 200], "salad bowl", saladAudio ]
const boy1Cord = [[275, 280], [345, 380], "boy", boyAudio ]
const boy2Cord = [[480, 280], [580, 380], "boy", boyAudio ]
const itemsCord = [saladCord, boy1Cord, boy2Cord]

//check if a touch is in hitbox of an item
const checkCord = (x, y, item) => {
  let result = [false, '', {} ]
  if (item[0][0] <= x && x <= item[1][0]) {
    if (item[0][1] <= y && y <= item[1][1]) {
      result = [true, item[2], item[3]]
    }
  }
  return result;
}

//iterate user's touch through list of items in the page
const itemsHitBoxCheck = (x, y, itemsCord) => {
  let result = [false, '', {}]
  itemsCord.map((item) => {
    const checkResult = checkCord(x, y, item);
    if (checkResult[0]) {
      result = checkResult
    }
  })
  return result
}

//Highlight words in the title if it is the same as current display lable
const titleHighlight = (lable, renderTitle) => {
  const result = renderTitle.map((word, index) => {
    if (word.props.id == lable) {
      return (
      <RNText
      id={word.props.id}
      style={styles.titleWordHightlight}
      key={index}
    >{word.props.children} </RNText>)
    } else {
      return word
    }
  })
  return result;
}

const PageViewScreen = () => {
  const [lableText, setLableText] = useState("")
  const [isShowingLable, setIsShowingLable] = useState(false)
  const [sound, setSound] = useState();

  
  

  const SourceSansPro = require("../../assets/font/SourceSansPro-Regular.ttf")
  const background = require('../../resource/4057_1_4307_1688701526/background/p/Lg4oU6Aq4DxsWdwLByyCax1672904703767_trong.png')
  
  const image = useImage(background);
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  async function playSound(audio) {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(audio);

    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);


  const pageTitle = "Hey, do you want to eat some salad?";
  const titleArray = pageTitle.split(" ");

  const renderTitle = titleArray.map((word, index) => 
    <RNText
      id={word.replace(/[^a-zA-Z0-9 ]/g, '')}
      style={styles.titleWord}
      key={index}
    >{word} </RNText>) 

  const [displayTitle, setDisplayTitle] = useState(renderTitle)

  const fontSize = 30;
  const font = useFont(SourceSansPro, fontSize);
  let textWidth = 12;


  if (font) { 
    textWidth = font.getTextWidth(pageTitle)
    lableWidth = font.getTextWidth(lableText)
  }

  const cx = useValue(0);
  const cy = useValue(0);

  let timeoutID;

  const touchHander = useTouchHandler({
    onStart: ({ x, y }) => {
     
      const pointerCheck = itemsHitBoxCheck(x, y, itemsCord)
      if (pointerCheck[0]) {
        clearTimeout(timeoutID)
        setLableText(pointerCheck[1])
        setIsShowingLable(true)
        // reRenderTitle = titleHighlight(pointerCheck[1], renderTitle)
        setDisplayTitle(titleHighlight(pointerCheck[1], renderTitle))
        playSound(pointerCheck[2])
        cx.current = x - lableWidth/2;
        cy.current = y - 40;
      }

    },
    onEnd: () => {
      timeoutID = setTimeout(() => {
        setIsShowingLable(false)
        setDisplayTitle(renderTitle)
      }, 2000)
    }
  });

  return (
  <SafeAreaView style={styles.container}>
     <View style={styles.pageTitle} >
      {displayTitle}
    </View>
   <Canvas style={styles.canvas} onTouch={touchHander}>
      <Image
        image={image}
        fit="fitHeight"
        x={0}
        y={40}
        width={screenWidth}
        height={screenHeight}
      />

      {isShowingLable && (
        <Text text={lableText} x={cx} y={cy} font={font} color="Black" />
      )
      }


    </Canvas>
   
    
  </SafeAreaView>
   
  )
}

export default PageViewScreen