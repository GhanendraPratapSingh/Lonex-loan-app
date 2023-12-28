import { View, Text } from 'react-native'
import React from 'react'
import Background from '../Background'

const Feed = () => {
	return (
		<Background>
			<View>
				<Text style={{
					color: 'white',
					fontSize: 64,
					fontWeight: 'bold',
					marginVertical: 300,
					marginLeft: 140,
					textAlign: 'center'
				}}>Feed</Text>
			</View>
		</Background>

	)
}

export default Feed