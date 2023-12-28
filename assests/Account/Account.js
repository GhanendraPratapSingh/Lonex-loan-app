import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import TopTabs from './TopTab';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Account = () => {
	return (

		<View style={{ height: "100%" ,backgroundColor:'#c4cccb' }}>

			<View style={styles.searchBar}>
				<FontAwesome5 name="search" size={20} color="grey" style={styles.searchIcon} />
				<TextInput
					style={styles.searchInput}
					placeholder="Search..."
					placeholderTextColor="grey"
				// You can add onChangeText and other TextInput props as needed
				/>
				<View>
					<TouchableOpacity style={styles.list} >
						<FontAwesome5 name="list" size={25} color="grey" style={styles.searchIcon} />
					</TouchableOpacity>
				</View>

			</View>

			<View style={styles.card}>

				<Image
					source={require('../images/black.png')}
					style={styles.cardBackground}
					resizeMode="cover"
				/>


				<Image
					source={require('../images/logon.png')}
					style={styles.bankLogo}
					resizeMode="contain"
				/>


				<Text style={styles.cardNumber}>1234 5678 9101 1121</Text>


				<Text style={styles.cardHolder}>Card Holder's Name</Text>


				<Text style={styles.expiry}>MM/YY</Text>


				<Image
					source={require('../images/chipp.png')}
					style={styles.chip}
					resizeMode="contain"
				/>
			</View>
			<TopTabs />
		</View>









	)
}


// Define Option1Screen, Option2Screen, Option3Screen, Option4Screen components with respective content




const styles = StyleSheet.create({

	card: {
		width: 300,
		height: 200,
		borderRadius: 15,
		overflow: 'hidden',
		alignItems: 'center',
		justifyContent: 'center',
		margin: 50,
		
	},
	cardBackground: {
		width: '100%',
		height: '100%',
		position: 'absolute',
	},
	bankLogo: {
		width: 50,
		height: 50,
		position: 'absolute',
		top: 15,
		left: 15
	},
	cardNumber: {
		color: 'grey',
		fontSize: 18,
		letterSpacing: 2,
		position: 'absolute',
		bottom: 50,
		left: 15,
	},
	cardHolder: {
		color: 'grey',
		fontSize: 16,
		position: 'absolute',
		bottom: 20,
		left: 15,
	},
	expiry: {
		color: 'grey',
		fontSize: 16,
		position: 'absolute',
		bottom: 20,
		right: 15,
	},
	chip: {
		width: 40,
		height: 50,
		position: 'absolute',
		bottom: 80,
		right: 30,
	},
	searchBar: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 20,
		marginHorizontalLeft: 20,
		paddingVertical: 0,
		borderBottomWidth: 1,
		borderBottomColor: 'lightgrey',
		// backgroundColor:'white',
		borderRadius: 30,
	},
	searchIcon: {
		marginRight: 10,
		marginLeft: 20
	},
	optionText: {
		flex: 1,
		color: 'white',
		fontSize: 16,
	},
	searchInput: {
		flex: 1,
		color: 'white',
		fontSize: 16,
	},
	list: {
		flex: 1,
		flexDirection: 'row',
		alignItems: '',
		justifyContent: 'flex-end',
		paddingVertical: 0,
		marginEnd: 0

	}

});

export default Account;
