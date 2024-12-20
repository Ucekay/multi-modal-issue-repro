import { SessionProvider } from '@/contexts/AuthContext';
import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Text, View, useColorScheme } from 'react-native';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const Layout = () => {
	const colorScheme = useColorScheme();
	const [loaded] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<SessionProvider>
			<ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
				<Stack>
					<Stack.Screen name='(app)' options={{ headerShown: false }} />
					<Stack.Screen name='sign-in' options={{ headerShown: false }} />
				</Stack>
				<StatusBar style='auto' />
			</ThemeProvider>
		</SessionProvider>
	);
};

export default Layout;
