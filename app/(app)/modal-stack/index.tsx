import { Link, useRouter } from 'expo-router';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Index = () => {
	const router = useRouter();
	return (
		<View style={styles.container}>
			<Text>Modal 2</Text>
			<Link href={'/modal-stack/detail'}>
				<Text>go to detail (This is Link)</Text>
			</Link>
		</View>
	);
};

export default Index;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
