import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Account from './Account/Account';
import Setting from './Settings/Setting';
import Feed from './Home/Feed';
import Messages from './Messages/Messages';
import { darkGreen } from './Constants';
import More from './More/More'

const Tab = createBottomTabNavigator();

const MyTabs = () => {
	const iconColor = darkGreen;
	const focusedIconColor = '#263d18'; // Define your focused tint color here
	const iconSize = 30;

	return (
		<Tab.Navigator
			screenOptions={{
				inactiveTintColor: iconColor,
				activeTintColor: focusedIconColor, // Set the focused tint color
				labelStyle: {
					fontSize: 12,
				},
			}}>
			<Tab.Screen
				name="Feed"
				component={Feed}
				options={{
					tabBarIcon: ({ color, size, focused }) => (
						<FontAwesome5
							name="home"
							color={focused ? focusedIconColor : iconColor}
							size={focused ? iconSize : size}
						/>
					),
					headerShown: false,
				}}
			/>
			<Tab.Screen
				name="Account"
				component={Account}
				options={{
					tabBarIcon: ({ color, size, focused }) => (
						<FontAwesome5
							name="user"
							color={focused ? focusedIconColor : iconColor}
							size={focused ? iconSize : size}
						/>
					),
					headerShown: false,
				}}
			/>
			<Tab.Screen
				name="Setting"
				component={Setting}
				options={{
					tabBarIcon: ({ color, size, focused }) => (
						<FontAwesome5
							name="wrench"
							color={focused ? focusedIconColor : iconColor}
							size={focused ? iconSize : size}
						/>
					),
					headerShown: false,
				}}
			/>
			<Tab.Screen style={styles.tabText}
				name="Message"
				component={Messages}
				options={{
					tabBarIcon: ({ color, size, focused }) => (
						<FontAwesome5
							name="envelope"
							color={focused ? focusedIconColor : iconColor}
							size={focused ? iconSize : size}
						/>
					),
					headerShown: false,
				}}
			/>
			<Tab.Screen style={styles.tabText}
				name="More"
				component={More}
				options={{
					tabBarIcon: ({ color, size, focused }) => (
						<FontAwesome5
							name="sliders-h"
							color={focused ? focusedIconColor : iconColor}
							size={focused ? iconSize : size}
						/>
					),
					headerShown: false,
				}}
			/>

		</Tab.Navigator>
	);
};
const styles = StyleSheet.create({
	tabText: {
		fontSize: 25
	}
})

export default MyTabs;