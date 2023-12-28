import { View, Text, } from 'react-native'
import React from 'react'
import Background from './Background'
import Btn from './Btn'
import { darkGreen, green } from './Constants'


const Home = (props) => {

	return (
		<Background>
			<View style={{
				marginHorizontal: 40,
				marginVertical: 100
			}}>
				<Text style={{
					color: 'white',
					fontSize: 64
				}}>
					Welcome To
				</Text>
				<Text style={{
					color: '#7afa4b',
					fontFamily: "cursive",
					fontSize: 80,
					marginBottom: 40,
					fontWeight: 'bold',
					fontStyle: 'italic',
				}}>
					Social...
				</Text>
				<Btn
					bgColor={green}
					textColor='white'
					btnLabel="Login"
					Press={() => props.navigation.navigate("Login")} />
				<Btn
					bgColor='white'
					textColor={darkGreen}
					btnLabel="Signup"
					Press={() => props.navigation.navigate("Signup")} />
			</View>
		</Background>
	)
}


export default Home