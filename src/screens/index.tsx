import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStaticNavigation } from '@react-navigation/native';
import { palette } from '../lib/theme';
import { FavoritesScreen } from './favorites/Favorites';
import { HomeScreen } from './home/Home';

const Tabs = createBottomTabNavigator({
  screenOptions: {
    headerShown: false,
    tabBarActiveTintColor: palette.black,
    tabBarInactiveTintColor: palette.grey0,
    tabBarStyle: {
      backgroundColor: palette.white,
      borderTopColor: palette.grey1,
      borderTopWidth: 1,
    },
    tabBarIconStyle: {
      marginTop: 2,
    },
    tabBarLabelStyle: {
      fontSize: 12,
      fontWeight: '500',
    },
  },
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ focused }) => (
          <Ionicons name={focused ? 'home' : 'home-outline'} size={20} />
        ),
      },
    },
    Favorites: {
      screen: FavoritesScreen,
      options: {
        tabBarLabel: 'Favorites',
        tabBarIcon: ({ focused }) => (
          <Ionicons name={focused ? 'star' : 'star-outline'} size={20} />
        ),
      },
    },
  },
});

export const Screens = createStaticNavigation(Tabs);
