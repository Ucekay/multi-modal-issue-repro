import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Redirect, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { Text, View } from 'react-native';

import { useSession } from '@/contexts/AuthContext';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
	const { session, isLoading } = useSession();
	if (isLoading) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>Loading...</Text>
			</View>
		);
	}
	if (!session) {
		return <Redirect href={'/sign-in'} />;
	}
	return (
		<Stack>
			<Stack.Screen name='(tabs)' options={{ headerShown: false }} />
			<Stack.Screen name='+not-found' />
			<Stack.Screen name='modal' options={{ presentation: 'modal' }} />
			<Stack.Screen name='modal-stack' options={{ presentation: 'modal' }} />
		</Stack>
	);
}
