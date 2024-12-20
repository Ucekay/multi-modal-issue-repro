import { router, useNavigation, useRouter } from 'expo-router';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const DetailScreen = () => {
	const router = useRouter();
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<Text>Detail Screen</Text>
			<Button
				title='go back to modal 1'
				onPress={() => navigation.getParent()?.goBack()}
			/>
		</View>
	);
};

export default DetailScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
