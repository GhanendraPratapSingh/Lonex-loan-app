import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Background from './Background'
import { darkGreen } from './Constants'
import Field from './Field'
import Btn from './Btn'


const Signup = (props) => {
	return (
		<Background>
			<View style={{
				alignItems: 'center',
				width: 460
			}}>
				<Text style={{
					color: 'white',
					fontSize: 64,
					fontWeight: 'bold',
					marginTop: 20,
					alignItems:'center'
				}}>
					Register
				</Text>
				<Text style={{
					color: '#02d1ca',
					fontSize: 19,
					fontWeight: 'bold',
					marginBottom: 20,
					alignItems:'center'
				}} >
					Create a New Account
				</Text>

				<View style={{
					backgroundColor: 'white',
					height: 700,
					width: 460,
					borderTopLeftRadius: 130,
					paddingTop: 50,
					alignItems: 'center'
				}}>


					<Field placeholder='First Name' />
					<Field placeholder='Last Name' />
					<Field placeholder='Email/Username' keyboardType={"email-address"} />
					<Field placeholder='Contact Number' keyboardType={'number'} />
					<Field placeholder='Password' secureTextEntry={true} />
					<Field placeholder='Confirm Password' secureTextEntry={true} />
					<View style={{
						display: 'flex',
						flexDirection: 'row',
						width: '100%',
						paddingRight: '16',
					}}>
						<Text style={{
							color: "grey",
							fontSize: 16,
							paddingLeft: 22,
						}}>
							By signing in, you are agree to our{" "}
						</Text>
						<Text style={{
							color: darkGreen,
							fontWeight: 'bold',
							fontSize: 16
						}}>
							Terms & Conditions
						</Text>
					</View>

					<View style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'center',
						width: '78%',
						paddingRight: '16',
						marginBottom: 10
					}}>
						<Text style={{
							color: "grey",
							fontSize: 16
						}}>
							and {" "}
						</Text>
						<Text style={{
							color: darkGreen,
							fontWeight: 'bold',
							fontSize: 16
						}}>
							Privacy Policy
						</Text>
					</View>
					<Btn
						textColor='white'
						bgColor={darkGreen}
						btnLabel="Signup"
						Press={() => {
							alert("Account Created Successfully")
							props.navigation.navigate('Login')
						}} />
					<View style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'center'
					}}>
						<Text style={{
							fontSize: 16,
							fontWeight: 'bold'
						}}>
							Already have an Account ?
						</Text>
						<TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
							<Text style={{
								color: darkGreen,
								fontWeight: 'bold',
								fontSize: 16
							}}>Login
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>


		</Background>
	)
}

export default Signup