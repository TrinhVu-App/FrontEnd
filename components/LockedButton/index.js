import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import styles from './styles'
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withSequence, withTiming } from 'react-native-reanimated'

const LockedButton = () => {

	const offset = useSharedValue(0);

	const animateStyle = useAnimatedStyle(() => ({
		transform: [{ translateX: offset.value }],
	}));

	const OFFSET = 5;
	const TIME = 75;

	const handlePress = () => {
		offset.value = withSequence(
			// start from -OFFSET
			withTiming(-OFFSET, { duration: TIME / 2 }),
			// shake between -OFFSET and OFFSET 5 times
			withRepeat(withTiming(OFFSET, { duration: TIME }), 3, true),
			// go back to 0 at the end
			withTiming(0, { duration: TIME / 2 })
		);

	}

		return (
			<View style={styles.container}>
				<Animated.View style={[animateStyle]}>
					<Pressable style={styles.button} onPress={handlePress}>
						<FontAwesomeIcon icon={faLock} size={35} color='#ffffff' />
					</Pressable>
				</Animated.View>

				<Text style={styles.text}>Story unavailable</Text>
			</View>
		)
	}

export default LockedButton