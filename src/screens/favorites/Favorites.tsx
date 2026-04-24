import * as React from 'react';
import { useAppContext } from '../../lib/context';
import { FavoritesComponent } from './FavoritesComponent';

export const FavoritesScreen = () => {
  const { favoriteCharacters } = useAppContext();

  return <FavoritesComponent characters={favoriteCharacters} />;
};
