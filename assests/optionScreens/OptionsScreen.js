import { View, Text } from 'react-native'
import React from 'react'
import Option1Screen from './Option1Screen';


	const OptionsScreen = ({ navigation }) => {
		return (
			<View style={styles.optionsContainer}>
				<TouchableOpacity onPress={() => navigation.navigate('Option1Screen')}>
					<Text style={styles.optionText}>Option 1</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Option2')}>
					<Text style={styles.optionText}>Option 2</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Option3')}>
					<Text style={styles.optionText}>Option 3</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Option4')}>
					<Text style={styles.optionText}>Option 4</Text>
				</TouchableOpacity>
			</View>
		);
	};
	// Define Option1Screen, Option2Screen, Option3Screen, Option4Screen components with respective contentView>
  

export default OptionsScreen