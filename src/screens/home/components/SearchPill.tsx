import { Text } from '@rneui/themed';
import * as React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { palette } from '../../../lib/theme';

export interface SearchPillProps {
  label: string;
  selected?: boolean;
  onPress?: () => void;
}

export const SearchPill: React.FC<SearchPillProps> = ({
  label,
  selected,
  onPress,
}) => (
  <Pressable
    style={[styles.pill, selected ? styles.pillSelected : styles.pillDefault]}
    onPress={onPress}
  >
    <Text
      style={[
        styles.label,
        selected ? styles.labelSelected : styles.labelDefault,
      ]}
    >
      {label}
    </Text>
  </Pressable>
);

const styles = StyleSheet.create({
  pill: {
    paddingVertical: 7,
    paddingHorizontal: 14,
    borderRadius: 9999,
    borderWidth: 1,
  },
  pillSelected: {
    backgroundColor: palette.black,
    borderColor: palette.black,
  },
  pillDefault: {
    backgroundColor: palette.grey2,
    borderColor: palette.grey1,
  },
  label: {
    fontSize: 15,
    fontWeight: '500',
  },
  labelSelected: {
    color: palette.white,
  },
  labelDefault: {
    color: palette.grey0,
  },
});
