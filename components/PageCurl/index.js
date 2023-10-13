import { View, Text } from 'react-native'
import React from 'react'
import { Path, Shadow } from '@shopify/react-native-skia';

const PageCurl = (dir, x, y) => {
    const [animPath, setAnimPath] = useState('');

    // const gestureAnim = (dir, absX, absY) => {
        if (dir == 1) {
            let A = { x: absX, y: absY }
            let C = { x: (screenWidth - ((screenWidth - absX + absY / 4) / 7)), y: 0 }
            let B = { x: A.x + (C.x - A.x) / 4, y: screenHeight }
            let fixCurve1 = { x: A.x + (C.x - A.x) / 2, y: C.y + (A.y - C.y) / 1.5 };
            let fixCurve2 = { x: B.x, y: A.y + (B.y - A.y) / 1.25 };
            setAnimPath('M ' + A.x + ' ' + A.y + ' Q ' + fixCurve1.x + ' ' + fixCurve1.y + ' ' + C.x + ' ' + C.y + ' L ' + B.x + ' ' + B.y + ' Q ' + fixCurve2.x + ' ' + fixCurve2.y + ' ' + A.x + ' ' + A.y + ' Z');
        }
        if (dir == -1) {
            setAnimPath('M ' + absX + ' ' + absY + ' L ' + (absX * 0.5) + ' ' + screenHeight + ' L ' + (absX * 0.3) + ' 0' + ' Z');
        }

        if (dir == 0) {
            setAnimPath('')
        }
    // }



    return (
        <Path
            path={animPath}
            color={'#eee4b0'}
        >
            <Shadow
                dx={25}
                dy={15}
                blur={35}
                color="black"
            />
            <Shadow
                inner
                dx={-35}
                dy={0}
                blur={25}
                color="#93b8c4"
            />
        </Path>
    )
}

export default PageCurl