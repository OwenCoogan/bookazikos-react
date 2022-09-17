import {
  createContext,
  useContext,
} from 'react';

export type Context = {
  authenticated: boolean,
  setAuthenticated: (value: boolean) => void,
}

const AuthorizationContext = createContext<Context>({
  authenticated: false,
  setAuthenticated: () => null,
});

export function useAuthorizationContext() {
  const context = useContext(AuthorizationContext);
  if (context === undefined) {
    throw new Error('useAuthorizationContext must be used within a AuthorizationProvider');
  }

  return context;
}

export default AuthorizationContext;
