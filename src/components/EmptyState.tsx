import { Ionicons } from '@expo/vector-icons';
import { Text } from '@rneui/themed';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { palette } from '../lib/theme';

type IconName = React.ComponentProps<typeof Ionicons>['name'];

export interface EmptyStateProps {
  title: string;
  subtitle?: string;
  icon?: IconName;
  iconColor?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  subtitle,
  icon,
  iconColor,
}) => {
  return (
    <View style={styles.container}>
      <Ionicons
        name={icon || 'alert-circle-outline'}
        color={iconColor || palette.grey0}
        size={60}
        style={styles.icon}
      />
      <Text style={styles.title}>{title}</Text>
      <Text>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginBottom: 15,
  },
  title: {
    marginBottom: 5,
    fontSize: 20,
    fontWeight: '600',
  },
});
