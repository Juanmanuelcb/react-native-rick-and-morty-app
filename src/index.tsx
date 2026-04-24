import { ThemeProvider } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryProvider } from './lib/reactQuery';
import { Screens } from './screens';

export const App: React.FC = () => {
  return (
    <QueryProvider>
      <SafeAreaProvider>
        <ThemeProvider>
          <Screens />
        </ThemeProvider>
      </SafeAreaProvider>
    </QueryProvider>
  );
};
