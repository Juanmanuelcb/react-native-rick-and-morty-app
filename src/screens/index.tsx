import { SafeAreaView } from 'react-native-safe-area-context';

import { HomeScreen } from "./home/Home"
import { StyleSheet } from 'react-native';

export const Screens = () => {
    return (
        <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
            <HomeScreen />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});