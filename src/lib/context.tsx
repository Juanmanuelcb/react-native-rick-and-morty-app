import * as React from 'react';
import { Character } from '../api/models';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITES_STORAGE_KEY = 'FAVORITES_STORAGE_KEY';

export interface AppContextType {
    favoriteCharacters: Character[] | null;
}

const INITIAL_STATE: AppContextType = {
    favoriteCharacters: null,
};

const AppContext = React.createContext<AppContextType>(INITIAL_STATE);

export const useAppContext = () => React.useContext(AppContext);

export const AppContextProvider: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    const [favoriteCharacters, setFavoriteCharacters] = React.useState<Character[] | null>(INITIAL_STATE.favoriteCharacters);
    const timer = React.useRef(0);

    React.useEffect(() => {
        (async () => {
            try {
                const value = await AsyncStorage.getItem(FAVORITES_STORAGE_KEY);
                if (value !== null) {
                    const savedFavorites = JSON.parse(value) || [];
                    setFavoriteCharacters(savedFavorites as Character[]);
                }
            } catch (e) {
                console.log("Error while trying to read favorites", e);
            }
        })();
    }, []);

    React.useEffect(() => {
        clearTimeout(timer.current);

        timer.current = setTimeout(async () => {
            try {
                await AsyncStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favoriteCharacters));
            } catch (e) {
                console.log("Error while trying to save favorites", e);
            }
        }, 500);

        return () => {
            clearTimeout(timer.current);
        }
    }, [favoriteCharacters]);

    const handlePress = (character: Character) => {
        setFavoriteCharacters((prev) => {
            if (!prev) {
                return prev;
            }

            return prev.some(c => c.id === character.id)
                ? prev.filter(c => c.id !== character.id)
                : [...prev, character]
        });
    };

    return (
        <AppContext.Provider
            value={{
                favoriteCharacters
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
