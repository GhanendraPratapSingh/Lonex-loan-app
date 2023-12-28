import { View, Text } from 'react-native'
import React from 'react'
import Background from '../Background'

const Messages = () => {
	return (
		<Background>
			<View>
				<Text style={{
					color: 'white',
					fontSize: 64,
					fontWeight: 'bold',
					marginVertical: 300,
					marginLeft: 120,
					textAlign: 'center'
				}}>More</Text>
			</View>
		</Background>
	)

}

export default Messages