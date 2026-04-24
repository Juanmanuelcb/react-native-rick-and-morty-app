import AsyncStorage from '@react-native-async-storage/async-storage';
import * as React from 'react';
import { Character } from '../api/models';

const FAVORITES_STORAGE_KEY = 'FAVORITES_STORAGE_KEY';

export interface AppContextType {
  favoriteCharacters: Character[];
  toggleFavorite: (character: Character) => void;
  isFavorite: (id: number) => boolean;
}

const AppContext = React.createContext<AppContextType>({
  favoriteCharacters: [],
  toggleFavorite: () => {},
  isFavorite: () => false,
});

export const useAppContext = () => React.useContext(AppContext);

export const AppContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [favoriteCharacters, setFavoriteCharacters] = React.useState<
    Character[]
  >([]);
  const hasLoaded = React.useRef(false);

  React.useEffect(() => {
    (async () => {
      try {
        const value = await AsyncStorage.getItem(FAVORITES_STORAGE_KEY);
        if (value !== null) {
          setFavoriteCharacters(JSON.parse(value) || []);
        }
      } catch (e) {
        console.log('Error while trying to read favorites', e);
        setFavoriteCharacters([]);
      } finally {
        hasLoaded.current = true;
      }
    })();
  }, []);

  React.useEffect(() => {
    if (!hasLoaded.current) return;

    AsyncStorage.setItem(
      FAVORITES_STORAGE_KEY,
      JSON.stringify(favoriteCharacters),
    ).catch(e => console.log('Error while trying to save favorites', e));
  }, [favoriteCharacters]);

  const toggleFavorite = (character: Character) => {
    setFavoriteCharacters(prev =>
      prev.some(c => c.id === character.id)
        ? prev.filter(c => c.id !== character.id)
        : [...prev, character],
    );
  };

  const isFavorite = (id: number) => favoriteCharacters.some(c => c.id === id);

  return (
    <AppContext.Provider
      value={{ favoriteCharacters, toggleFavorite, isFavorite }}
    >
      {children}
    </AppContext.Provider>
  );
};
