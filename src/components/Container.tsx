import { SafeAreaView } from 'react-native-safe-area-context';

import { StyleSheet } from 'react-native';

export const Container: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
