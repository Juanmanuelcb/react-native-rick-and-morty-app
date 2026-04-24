import { Avatar, ListItem, Text } from '@rneui/themed';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { CharacterStatus } from '../../../api/models';
import { palette } from '../../../lib/theme';

export interface CharacterCardProps {
  avatarUrl: string;
  name: string;
  species: string;
  gender: string;
  origin: string;
  status: CharacterStatus;
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
}) => {
  return (
    <ListItem
      containerStyle={[
        styles.card,
        { backgroundColor: statusBackgrounds[status] },
      ]}
      pad={10}
    >
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
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 110,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
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
});
