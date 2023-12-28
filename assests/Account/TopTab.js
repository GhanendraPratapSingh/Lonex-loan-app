import { StyleSheet, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import EMI from './Top Tab Nav/EMI/EMI';
import Loan from './Top Tab Nav/Loan';
import Info from './Top Tab Nav/Info';
import Contact from './Top Tab Nav/Contact';

const Tab = createMaterialTopTabNavigator();

function TopTabs() {
	return (
		<View style={{ width: "100%", height: "100%" }}>
			<Tab.Navigator screenOptions={{
				style: {
					marginTop: 20,
				},
			}}>
				<Tab.Screen name="Emi" component={EMI} />
				<Tab.Screen name="Loan" component={Loan} />
				<Tab.Screen name="Info" component={Info} />
				<Tab.Screen name="Contact" component={Contact} />
			</Tab.Navigator>
		</View>

	);
}
const styles = StyleSheet.create({

})
export default TopTabs;