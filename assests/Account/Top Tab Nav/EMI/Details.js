// import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import IconMaterial from 'react-native-vector-icons/MaterialIcons';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import React, { useState } from 'react';
// import { Picker } from '@react-native-picker/picker';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



// const PersonalDetail = () => {
// 	const [gender, setGender] = useState('male');
// 	const navigation = useNavigation();

// 	return (

// 		<View style={styles.container}>
// 			<Text style={styles.title}> Personal Details </Text>

// 			<TextInput


// 				placeholder="Enter your Full Name"
// 				leftIcon={<IconMaterial name="person" size={24} color="black" />}
// 				style={styles.inputContainer}
// 			/>

// 			<TextInput
// 				placeholder="Enter your Husband Name"
// 				leftIcon={<IconMaterial name="person" size={24} color="black" />}
// 				style={styles.inputContainer}
// 			/>

// 			<TextInput
// 				placeholder="Enter your Mobile Number"
// 				leftIcon={<Icon name="phone" size={24} color="black" />}
// 				style={styles.inputContainer}
// 			/>

// 			<TextInput
// 				placeholder="Enter your Email Address"
// 				leftIcon={<Icon name="email" size={24} color="black" />}
// 				style={styles.inputContainer}
// 			/>

// 			<TextInput
// 				placeholder="Enter your Date Of Birth"
// 				leftIcon={<Icon name="event" size={24} color="black" />}
// 				style={styles.inputContainer}
// 			/>

// 			<TextInput
// 				placeholder="Enter your Address"
// 				leftIcon={<Icon name="home" size={24} color="black" />}
// 				style={styles.inputContainer}
// 			/>
// 			<TextInput
// 				placeholder="Enter your City"
// 				leftIcon={<Icon name="home" size={24} color="black" />}
// 				style={styles.inputContainer}
// 			/>
// 			<TextInput
// 				placeholder="Enter your PinCode"
// 				leftIcon={<Icon name="pin" size={24} color="black" />}
// 				style={styles.inputContainer}
// 			/>

// 			<TextInput
// 				placeholder="Enter your State"
// 				leftIcon={<Icon name="map" size={24} color="black" />}
// 				style={styles.inputContainer}
// 			/>

// 			<Picker
// 				selectedValue={gender}
// 				onValueChange={(itemValue, itemIndex) => setGender(itemValue)}>
// 				<Picker.Item label="Male" value="male" />
// 				<Picker.Item label="Female" value="female" />
// 			</Picker>

// 			<TouchableOpacity activeOpacity={0.6}
// 				style={styles.ContinueButton}
// 				onPress={() => navigation.navigate('Documents')}>
// 				<Text style={styles.loginButtonText}>Continue</Text>
// 			</TouchableOpacity>
// 		</View>
// 	);
// };


// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		justifyContent: 'center',
// 		paddingHorizontal: 30,
// 		backgroundColor: "#c5fcf9"
// 	},
// 	inputContainer: {
// 		margin: 6,
// 		borderBottomWidth: 1,
// 		borderColor: 'black'
// 	},

// 	ContinueButton: {
// 		backgroundColor: '#02d1ca',
// 		paddingVertical: 14,
// 		alignItems: 'center',
// 		borderRadius: 10,
// 		marginTop: 15,
// 	},
// 	loginButtonText: {
// 		color: 'white',
// 		fontSize: 20,
// 		fontWeight: 'bold',
// 	},
// 	title: {
// 		fontSize: 40,
// 		fontWeight: 'bold',
// 		fontStyle: 'italic',
// 		marginBottom: 25,
// 		marginTop: 10,
// 		textAlign: 'center',
// 		color: '#7d827f'
// 	},
// 	personal: {
// 		marginLeft: 10,
// 		fontSize: 19,
// 	},
// });

// export default PersonalDetail;




import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

const PersonalDetail = () => {
	const [gender, setGender] = useState('male');
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<Text style={styles.title}> Personal Details </Text>

			<View style={styles.inputContainer}>
				<IconMaterial name="person" size={24} color="black" style={styles.icon} />
				<TextInput placeholder="Enter your Full Name" style={styles.input} />
			</View>
			<View style={styles.inputContainer}>
				<IconMaterial name="person" size={24} color="black" style={styles.icon} />
				<TextInput placeholder="Enter Your Husband / Father's Name" style={styles.input} />
			</View>
			<View style={styles.inputContainer}>
				<IconMaterial name="phone" size={24} color="black" style={styles.icon} />
				<TextInput placeholder="Enter your Phone Number" style={styles.input} />
			</View>
			<View style={styles.inputContainer}>
				<IconMaterial name="phone" size={24} color="black" style={styles.icon} />
				<TextInput placeholder="Alternative Phone Number" style={styles.input} />
			</View>
			<View style={styles.inputContainer}>
				<IconMaterial name="email" size={24} color="black" style={styles.icon} />
				<TextInput placeholder="Enter your E-mail Address" style={styles.input} />
			</View>
			<View style={styles.inputContainer}>
				<IconMaterial name="event" size={24} color="black" style={styles.icon} />
				<TextInput placeholder="Enter your Date Of Birth" style={styles.input} />
			</View>
			<View style={styles.inputContainer}>
				<IconMaterial name="home" size={24} color="black" style={styles.icon} />
				<TextInput placeholder="Enter your Full Address" style={styles.input} />
			</View>
			<View style={styles.inputContainer}>
				<IconMaterial name="home" size={24} color="black" style={styles.icon} />
				<TextInput placeholder="Enter your City Name" style={styles.input} />
			</View>
			<View style={styles.inputContainer}>
				<IconMaterial name="map" size={24} color="black" style={styles.icon} />
				<TextInput placeholder="Enter your State" style={styles.input} />
			</View>
			<View style={styles.inputContainer}>
				<IconMaterial name="pin" size={24} color="black" style={styles.icon} />
				<TextInput placeholder="Enter your Pincode" style={styles.input} />
			</View>

			{/* Other TextInput fields with icons (similar to the first one) */}

			<Picker
				selectedValue={gender}
				onValueChange={(itemValue, itemIndex) => setGender(itemValue)}>
				<Picker.Item label="Male" value="male" />
				<Picker.Item label="Female" value="female" />
			</Picker>

			<TouchableOpacity
				activeOpacity={0.6}
				style={styles.ContinueButton}
				onPress={() => navigation.navigate('Documents')}>
				<Text style={styles.loginButtonText}>Continue</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		paddingHorizontal: 30,
		backgroundColor: '#c5fcf9',
	},
	inputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		margin: 3,
		borderBottomWidth: 1,
		borderColor: 'black',
	},
	input: {
		flex: 1,
		marginLeft: 10,
		fontSize: 16,
	},
	icon: {
		marginRight: 10,
	},
	ContinueButton: {
		backgroundColor: '#02d1ca',
		paddingVertical: 14,
		alignItems: 'center',
		borderRadius: 10,
		marginTop: 15,
	},
	loginButtonText: {
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold',
	},
	title: {
		fontSize: 40,
		fontWeight: 'bold',
		fontStyle: 'italic',
		marginBottom: 25,
		marginTop: 10,
		textAlign: 'center',
		color: '#7d827f',
	},
});

export default PersonalDetail;
