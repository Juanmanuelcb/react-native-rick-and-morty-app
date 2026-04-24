import * as React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { CharacterStatus } from '../../api/models';
import { CharacterCard } from './components/CharacterCard';
import { Search } from './components/Search';

export const HomeComponent = () => {
  const handleRenderItem = () => {
    return (
      <CharacterCard
        avatarUrl='https://rickandmortyapi.com/api/character/avatar/2.jpeg'
        name='Morty Smith'
        species='Human'
        gender='Male'
        origin='Earth'
        status={CharacterStatus.Alive}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Search />
      <FlatList
        data={Array.from({ length: 3 })}
        renderItem={handleRenderItem}
        keyExtractor={(_, i) => `item_${i}`}
        contentContainerStyle={styles.listContent}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
  listContent: {
    padding: 20,
    gap: 10,
  },
});
