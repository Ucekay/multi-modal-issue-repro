import { Stack } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const Layout = () => {
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name='index' />
			<Stack.Screen name='detail' />
		</Stack>
	);
};

export default Layout;
