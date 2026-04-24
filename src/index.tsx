import { ThemeProvider } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryProvider } from './lib/reactQuery';
import { appTheme } from './lib/theme';
import { Screens } from './screens';
import { AppContextProvider } from './lib/context';

export const App: React.FC = () => {
  return (
    <QueryProvider>
      <SafeAreaProvider>
        <ThemeProvider theme={appTheme}>
          <AppContextProvider>
            <Screens />
          </AppContextProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </QueryProvider>
  );
};
