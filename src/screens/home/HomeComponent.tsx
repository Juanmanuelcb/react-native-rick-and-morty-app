import * as React from 'react';
import { FlatList, ListRenderItem, StyleSheet } from 'react-native';
import { Character, CharacterStatus } from '../../api/models';
import { CharacterCard } from '../../components/CharacterCard';
import { Container } from '../../components/Container';
import { Search } from './components/Search';

export interface HomeComponentsProps {
  characters: Character[];
  isLoading: boolean;
  searchStatus?: CharacterStatus;
  onEndReached: () => void;
  onSearchNameChange: (searchName?: string) => void;
  onSearchStatusChange: (searchStatus?: CharacterStatus) => void;
}

export const HomeComponent: React.FC<HomeComponentsProps> = ({
  characters,
  isLoading,
  searchStatus,
  onEndReached,
  onSearchNameChange,
  onSearchStatusChange,
}) => {
  const handleRenderItem: ListRenderItem<Character> = ({ item: character }) => {
    return (
      <CharacterCard
        avatarUrl={character.image}
        name={character.name}
        species={character.species}
        gender={character.gender}
        origin={character.origin.name}
        status={character.status}
      />
    );
  };

  return (
    <Container>
      <Search
        searchStatus={searchStatus}
        onSearchNameChange={onSearchNameChange}
        onSearchStatusChange={onSearchStatusChange}
      />
      <FlatList<Character>
        data={characters}
        renderItem={handleRenderItem}
        keyExtractor={character => `${character.id}`}
        onEndReached={onEndReached}
        refreshing={isLoading}
        contentContainerStyle={styles.listContent}
        style={styles.list}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  listContent: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    gap: 10,
  },
});
