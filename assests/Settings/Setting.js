import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Background from '../Background'

const Setting = () => {
	return (
		<Background>
			<View>
				<Text style={styles.headingText}>Settings</Text>
			</View>
		</Background>
	)
}
const styles = StyleSheet.create({
	headingText: {
		color: 'white',
		fontSize: 64,
		fontWeight: 'bold',
		marginVertical: 300,
		marginLeft: 90,
		textAlign: 'center'
	}
})

export default Setting