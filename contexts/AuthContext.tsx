import {
	type PropsWithChildren,
	createContext,
	useContext,
	useState,
} from 'react';

const AuthContext = createContext<{
	signIn: () => void;
	signOut: () => void;
	session?: string | null;
	isLoading: boolean;
}>({
	signIn: () => null,
	signOut: () => null,
	session: null,
	isLoading: false,
});

export function useSession() {
	const value = useContext(AuthContext);
	if (process.env.NODE_ENV !== 'production') {
		if (!value) {
			throw new Error('useSession must be wrapped in a <SessionProvider />');
		}
	}
	return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
	const [session, setSession] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	return (
		<AuthContext.Provider
			value={{
				signIn: () => {
					setIsLoading(true);
					setTimeout(() => {
						setSession('dummy-session');
						setIsLoading(false);
					}, 1000);
				},
				signOut: () => {
					setSession(null);
				},
				session,
				isLoading,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}
