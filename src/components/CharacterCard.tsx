import { Ionicons } from '@expo/vector-icons';
import { Avatar, ListItem, Text } from '@rneui/themed';
import * as React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { CharacterStatus } from '../api/models';
import { palette } from '../lib/theme';

export interface CharacterCardProps {
  avatarUrl: string;
  name: string;
  species: string;
  gender: string;
  origin: string;
  status: CharacterStatus;
  isFavorite: boolean;
  onFavoritePress: () => void;
}

const statusBackgrounds: Record<CharacterStatus, string> = {
  [CharacterStatus.Alive]: palette.statusAlive + '15',
  [CharacterStatus.Dead]: palette.statusDead + '15',
  [CharacterStatus.Unknown]: palette.statusUnknown + '15',
};

export const CharacterCard: React.FC<CharacterCardProps> = ({
  avatarUrl,
  name,
  species,
  gender,
  origin,
  status,
  isFavorite,
  onFavoritePress,
}) => {
  return (
    <View style={[styles.card, { backgroundColor: statusBackgrounds[status] }]}>
      {onFavoritePress && (
        <Pressable onPress={onFavoritePress} style={styles.favorite}>
          <Ionicons
            name={isFavorite ? 'heart' : 'heart-outline'}
            color='red'
            size={20}
          />
        </Pressable>
      )}
      <ListItem containerStyle={styles.listItem} pad={10}>
        <Avatar
          source={{ uri: avatarUrl }}
          size={100}
          rounded
          containerStyle={styles.avatar}
        />
        <ListItem.Content>
          <ListItem.Title style={styles.name}>{name}</ListItem.Title>
          <ListItem.Subtitle>
            <Text style={styles.bold}>Species: </Text>
            <Text>{species}</Text>
          </ListItem.Subtitle>
          <ListItem.Subtitle>
            <Text style={styles.bold}>Gender: </Text>
            <Text>{gender}</Text>
          </ListItem.Subtitle>
          <ListItem.Subtitle>
            <Text style={styles.bold}>Origin: </Text>
            <Text>{origin}</Text>
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    borderRadius: 110,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  listItem: {
    backgroundColor: 'transparent',
    padding: 10,
  },
  avatar: {
    backgroundColor: palette.grey1,
  },
  name: {
    marginBottom: 5,
    fontSize: 20,
    fontWeight: '500',
  },
  bold: {
    fontWeight: '500',
  },
  favorite: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
