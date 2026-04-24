import { SafeAreaView } from 'react-native-safe-area-context';

import { StyleSheet } from 'react-native';
import { HomeScreen } from './home/Home';

export const Screens = () => {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <HomeScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
