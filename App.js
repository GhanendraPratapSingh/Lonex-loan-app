

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './assests/Landing';
import Login from './assests/Login';
import Signup from './assests/Signup';
import SplashScreen from './assests/Splash';
import MyTabs from './assests/MyTabs';
import DocumentUpload from './assests/Account/Top Tab Nav/EMI/Documents';
import TopTabs from './assests/Account/TopTab';
import Details from './assests/Account/Top Tab Nav/EMI/Details';







const Stack = createNativeStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="SplashScreen" component={SplashScreen} />
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Signup" component={Signup} />
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="MyTabs" component={MyTabs} />
				<Stack.Screen name="TopTab" component={TopTabs} />
				<Stack.Screen name="Details" component={Details} />
				<Stack.Screen name="Documents" component={DocumentUpload} />
			</Stack.Navigator>

		</NavigationContainer>

	);
}

export default App;