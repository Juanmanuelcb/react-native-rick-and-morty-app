import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@rneui/themed';
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