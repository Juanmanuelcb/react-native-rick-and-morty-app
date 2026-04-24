import { Input } from '@rneui/themed';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { CharacterStatus } from '../../../api/models';
import { palette } from '../../../lib/theme';
import { SearchPill } from './SearchPill';

export interface SearchProps {
  searchStatus?: CharacterStatus;
  onSearchNameChange: (searchName?: string) => void;
  onSearchStatusChange: (searchStatus?: CharacterStatus) => void;
}

export const Search: React.FC<SearchProps> = ({
  searchStatus,
  onSearchNameChange,
  onSearchStatusChange,
}) => {
  const [searchName, setSearchName] = React.useState("");
  const timer = React.useRef(0);

  React.useEffect(() => {
    clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      onSearchNameChange(searchName || undefined);
    }, 500);

    return () => {
      clearTimeout(timer.current);
    }
  }, [searchName]);

  const statuses = [
    {
      label: 'All',
      value: undefined,
    },
    {
      label: 'Alive',
      value: CharacterStatus.Alive,
    },
    {
      label: 'Dead',
      value: CharacterStatus.Dead,
    },
    {
      label: 'Unknown',
      value: CharacterStatus.Unknown,
    },
  ];

  return (
    <View style={styles.container}>
      <Input
        placeholder='Start typing here...'
        renderErrorMessage={false}
        value={searchName}
        onChangeText={setSearchName}
      />
      <View style={styles.pills}>
        {statuses.map((status) => (
          <SearchPill
            label={status.label}
            selected={status.value === searchStatus}
            onPress={() => onSearchStatusChange(status.value)}
            key={`status_${status.label}`}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: palette.grey1,
    borderBottomWidth: 1,
    paddingHorizontal: 15,
    paddingBottom: 10,
    gap: 10,
  },
  pills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
});
