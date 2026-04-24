import { Input } from '@rneui/themed';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { palette } from '../../../lib/theme';
import { SearchPill } from './SearchPill';

export const Search: React.FC = () => {
  return (
    <View style={styles.container}>
      <Input placeholder='Start typing here...' renderErrorMessage={false} />
      <View style={styles.pills}>
        <SearchPill label='All' selected />
        <SearchPill label='Alive' />
        <SearchPill label='Dead' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: palette.grey1,
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    paddingBottom: 10,
    gap: 10,
  },
  pills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
});
