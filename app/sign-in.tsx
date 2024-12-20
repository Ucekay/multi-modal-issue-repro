import { useSession } from '@/contexts/AuthContext';
import { useRouter } from 'expo-router';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const SignIn = () => {
	const router = useRouter();
	const { signIn } = useSession();
	return (
		<View style={styles.container}>
			<Text>SignIn</Text>
			<Button
				title='Sign in'
				onPress={() => {
					signIn();
					router.replace('/');
				}}
			/>
		</View>
	);
};

export default SignIn;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
