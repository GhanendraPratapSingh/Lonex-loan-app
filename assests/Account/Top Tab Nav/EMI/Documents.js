import React, { useState } from 'react';
import {
	View,
	Text,
	Image,
	TextInput,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import LinearGradient from 'react-native-linear-gradient';

const DocumentUpload = ({ navigation }) => {
	const [aadharFrontImage, setAadharFrontImage] = useState(null);
	const [aadharBackImage, setAadharBackImage] = useState(null);
	const [panCardImage, setPanCardImage] = useState(null);
	const [voteridImage, setvoteridImage] = useState(null);
	const [photoImage, setphotoImage] = useState(null);
	const [signatureImage, setSignatureImage] = useState(null);
	const [aadharNumber, setAadharNumber] = useState('');
	const [panCardNumber, setPanCardNumber] = useState('');

	const handleImageUpload = setImageFunction => {
		ImagePicker.openPicker({
			width: 300,
			height: 400,
			cropping: true,
		}).then(image => {
			setImageFunction({ uri: image.path });
		});
	};

	return (
		<LinearGradient colors={['#c5fcf9', '#42fcf0']} style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Text style={styles.head}>Document Details</Text>

				{renderImageUploadSection(
					'Upload Aadhar Front Side:',
					handleImageUpload,
					setAadharFrontImage,
					aadharFrontImage,
					'Aadhar Number',
					aadharNumber,
					setAadharNumber,
				)}

				{renderImageUploadSection(
					'Upload Aadhar Back Side:',
					handleImageUpload,
					setAadharBackImage,
					aadharBackImage,
					null,
					null,
				)}

				{renderImageUploadSection(
					'Upload Pan Card:',
					handleImageUpload,
					setPanCardImage,
					panCardImage,
					'Pan Number',
					panCardNumber,
					setPanCardNumber,
				)}

				{renderImageUploadSection(
					'Upload Voter ID Card:',
					handleImageUpload,
					setvoteridImage,
					voteridImage,
					null,
					null,
				)}

				{renderImageUploadSection(
					'Upload Signature:',
					handleImageUpload,
					setSignatureImage,
					signatureImage,
					null,
					null,
				)}

				{renderImageUploadSection(
					'Upload Photo:',
					handleImageUpload,
					setphotoImage,
					photoImage,
					null,
					null,
				)}

				<TouchableOpacity
					activeOpacity={0.6}
					style={styles.continueButton}
					onPress={() => navigation.navigate('NomineeDetails')}>
					<Text style={styles.SubmitButtonText}>Submit Details</Text>
				</TouchableOpacity>
			</ScrollView>
		</LinearGradient>
	);
};

const renderImageUploadSection = (
	title,
	handleImageUpload,
	setImageFunction,
	image,
	placeholder,
	inputValue,
	setInputValue,
) => (
	<View style={styles.sectionContainer}>
		<Text style={styles.headone}>{title}</Text>
		{placeholder && (
			<TextInput
				style={styles.input}
				placeholder={placeholder}
				value={inputValue}
				onChangeText={text => setInputValue(text)}
			/>
		)}
		<TouchableOpacity
			style={styles.button}
			onPress={() => handleImageUpload(setImageFunction)}>
			<Text style={styles.buttonText}>Upload</Text>
		</TouchableOpacity>
		{image && (
			<Image
				source={image}
				style={{ width: 200, height: 150, borderRadius: 8, marginTop: 10 }}
			/>
		)}
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		paddingHorizontal: 30,
		backgroundColor:"white"
	},
	input: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		borderRadius: 8,
		marginBottom: 10,
		paddingLeft: 10,
		color: 'black',
	},

	head: {
		fontSize: 40,
		fontWeight: 'bold',
		fontStyle:"italic",
		marginBottom: 25,
		marginTop: 50,
		textAlign: 'center',
		color: '#7d827f',
	},

	headone: {
		fontSize: 15,
		fontWeight: 'bold',
		marginTop: 20,
		marginBottom: 10,
		color: 'black',
	},

	sectionContainer: {
		marginBottom: 20,
		padding: 20,
		borderRadius: 12,
		backgroundColor: 'white',
		elevation: 3,
	},

	button: {
		width: 120,
		backgroundColor: '#02d1ca',
		padding: 10,
		borderRadius: 8,
		alignItems: 'center',
		marginVertical: 10,
	},

	buttonText: {
		color: 'white',
		fontSize: 16,
		fontWeight: 'bold',
	},

	continueButton: {
		backgroundColor: '#02d1ca',
		paddingVertical: 14,
		alignItems: 'center',
		borderRadius: 10,
		marginTop: 50,
		marginBottom: 40,
	},

	SubmitButtonText: {
		textAlign: 'center',
		color: 'white',
		fontSize: 18,
		fontWeight: 'bold',
	},
});

export default DocumentUpload;