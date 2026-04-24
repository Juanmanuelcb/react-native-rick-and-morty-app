import { ThemeProvider } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryProvider } from './lib/reactQuery';
import { appTheme } from './lib/theme';
import { Screens } from './screens';

export const App: React.FC = () => {
  return (
    <QueryProvider>
      <SafeAreaProvider>
        <ThemeProvider theme={appTheme}>
          <Screens />
        </ThemeProvider>
      </SafeAreaProvider>
    </QueryProvider>
  );
};
