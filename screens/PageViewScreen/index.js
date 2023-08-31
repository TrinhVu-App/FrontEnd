import { Dimensions } from 'react-native'
import React, { useState } from 'react'
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
} from "@shopify/react-native-skia";
import TouchHandling from '../../components/TouchHandling';

const imgPath = '../../resource/4057_1_4307_1688701526/background/p/Lg4oU6Aq4DxsWdwLByyCax1672904703767_trong.png'

const PageViewScreen = () => {
  const [pointerText, setPointerText] = useState("")
  const [pointerWidth, setPointerWidth] = useState(20)
  const [isShowingLable, setIsShowingLable] = useState(false)
  const image = useImage(require('../../resource/4057_1_4307_1688701526/background/p/Lg4oU6Aq4DxsWdwLByyCax1672904703767_trong.png'));
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  const text = "Hey, do you want to eat some salad?"
  const fontSize = 30;
  const font = useFont(require("../../assets/font/SourceSansPro-Regular.ttf"), fontSize);
  let textWidth = 10;
  if (font){
  textWidth = font.getTextWidth(text);
  }
 

  const cx = useValue(0);
  const cy = useValue(0);

  const itemsHitBoxCheck = (x, y) => {
    if ((275 <= x && x <= 345) || (480 <= x && x <= 580)) {
      if (280 <= y && y <= 380) {
        setPointerText('BOY');
        if(font) {
          setPointerWidth(font.getTextWidth('dsfgdvc'))
          console.log("Pointer width set to: " + font.getTextWidth('dsfgdvc'))
        }
        return true
      } else {
        return false
      }
    } 
    else {
      return false
    }
  }

  const touchHander = useTouchHandler({
    onActive: ({ x, y }) => {
      if (itemsHitBoxCheck(x, y)) {
          setIsShowingLable(false)
          setIsShowingLable(true)
      }
      cx.current = x - pointerWidth/2;
      cy.current = y - 40;
      console.log(x, y)
    },
    onEnd: ({ x, y }) => {
      setTimeout(() => {
        setIsShowingLable(false)
        }, 2000)
    }
  });







  return (
    <Canvas style={styles.container} onTouch={touchHander}>
      <Image
        image={image}
        fit="fitHeight"
        x={0}
        y={40}
        width={screenWidth}
        height={screenHeight}
      />
      <Text
        text={text}
        x={screenWidth/2 - textWidth/2}
        y={fontSize + 20}
        font={font}
      >
      </Text>
      {isShowingLable && (
        <Text text={pointerText} x={cx} y={cy} font={font} color="Black" />
      )
      }


    </Canvas>
  )
}

export default PageViewScreen