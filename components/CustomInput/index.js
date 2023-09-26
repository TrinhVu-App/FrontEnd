import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { Controller } from 'react-hook-form'
import styles from './styles'

const CustomInput = ({ lable, control, name, rules = {}, placeholder, secureTextEntry }) => {

	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
				<>
					<Text style={styles.inputLable}>{lable}</Text>
					<View
						style={[
							styles.container,
							{ borderColor: error ? 'red' : 'black' },
						]}>
						<TextInput
							value={value}
							onChangeText={onChange}
							onBlur={onBlur}
							placeholder={placeholder}
							style={styles.input}
							secureTextEntry={secureTextEntry}
						/>
					</View>
					{error && (
						<Text style={{ color: 'red', marginLeft: 5 }}>{error.message || 'Error'}</Text>
					)}
				</>
			)}
		/>
	)
}

export default CustomInput