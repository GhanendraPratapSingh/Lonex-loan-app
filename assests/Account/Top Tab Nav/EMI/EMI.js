import { StyleSheet, Image, TouchableOpacity, Text, View, ScrollView, Dimensions } from 'react-native';


const { height, width } = Dimensions.get('screen');
const cardHeight = 236;
const cardsPerRow = 2;

const EMI = ({ navigation }) => (
	<ScrollView contentContainerStyle={styles.scrollContainer}>
		<View style={styles.LoanContainer}>
			{[1, 2, 3, 4, 5, 6].map((item) => (
				<View style={styles.Loancard} key={item}>
					<Image
						source={require('../../../images/cash.jpg')}
						style={styles.cardImage}
					/>
					<Text style={styles.TodayEarningText}>Loan Amount: 15,000</Text>
					<Text style={styles.TodayEarningDataText}>Total Emi: 3000</Text>
					<Text style={styles.TodayEarningData}>PerMonth Emi: 1800</Text>
					<Text style={styles.DataInterest}>Interest Rate: 4%</Text>
					<TouchableOpacity
						style={styles.loginButton}
						onPress={() => navigation.navigate('Details')}>
						<Text style={styles.loginButtonText}>Apply Now</Text>
					</TouchableOpacity>
				</View>
			))}
		</View>
		<View style={{ height: cardHeight / 2 }}></View>
	</ScrollView>
);

const styles = StyleSheet.create({
	scrollContainer: {
		width: width,
		minHeight: height, // Set a minimum height for the content container
		backgroundColor: "#c4cccb"
	},
	LoanContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		flexWrap: "wrap",
		paddingHorizontal: 10,
		paddingBottom: 20,
		justifyContent: 'space-between',
		backgroundColor: "#c4cccb"
	},
	Loancard: {
		paddingBottom: 10,
		height: cardHeight,
		backgroundColor: 'white',
		borderRadius: 10,
		marginBottom: 12,
		shadowOffset: { width: 1, height: 1 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
		elevation: 4,
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 6,
	},
	loginButton: {
		width: 85,
		backgroundColor: '#02d1ca',
		paddingVertical: 10,
		alignItems: 'center',
		borderRadius: 8,
		marginTop: 14,
	},
	loginButtonText: {
		color: "white"
	},

	TodayEarningText: {
		fontSize: 11,
		marginTop: 10,
		fontWeight: 'bold',
		color: 'black',
	},
	TodayEarningData: {
		padding: 1,
		marginLeft: -5,
		fontSize: 11,
		fontWeight: 'bold',
		color: 'black',
	},

	DataInterest: {
		fontSize: 11,
		color: 'black',
		fontWeight: 'bold',
		marginLeft: -23,
	},

	TodayEarningDataText: {
		marginLeft: -30,
		fontSize: 11,
		color: 'black',
		fontWeight: 'bold',
		padding: 1,
		margin: 1,
	},

	cardImage: {
		height: 98,
		width: 180,
		borderRadius: 8,
	},

	cardTexti: {
		color: 'black',
		fontWeight: 'bold',
		padding: 3,
		marginTop: 5,
	},
	cont: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
})

export default EMI