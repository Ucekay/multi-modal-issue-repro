import { useRouter } from 'expo-router';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Modal = () => {
	const router = useRouter();
	return (
		<View style={styles.container}>
			<Text>Modal 1</Text>
			<Button
				title='go to modal 2'
				onPress={() => {
					router.push('/modal-stack');
				}}
			/>
		</View>
	);
};

export default Modal;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
