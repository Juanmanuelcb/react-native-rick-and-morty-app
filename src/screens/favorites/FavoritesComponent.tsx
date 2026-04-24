import * as React from 'react';
import { FlatList, ListRenderItem, StyleSheet } from 'react-native';
import { Character } from '../../api/models';
import { CharacterCard } from '../../components/CharacterCard';
import { Container } from '../../components/Container';
import { useAppContext } from '../../lib/context';

export interface FavoritesComponentsProps {
  characters: Character[];
}

export const FavoritesComponent: React.FC<FavoritesComponentsProps> = ({
  characters,
}) => {
  const { isFavorite, toggleFavorite } = useAppContext();

  const handleRenderItem: ListRenderItem<Character> = ({ item: character }) => {
    return (
      <CharacterCard
        avatarUrl={character.image}
        name={character.name}
        species={character.species}
        gender={character.gender}
        origin={character.origin.name}
        status={character.status}
        isFavorite={isFavorite(character.id)}
        onFavoritePress={() => toggleFavorite(character)}
      />
    );
  };

  return (
    <Container>
      <FlatList<Character>
        data={characters}
        renderItem={handleRenderItem}
        keyExtractor={character => `${character.id}`}
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
