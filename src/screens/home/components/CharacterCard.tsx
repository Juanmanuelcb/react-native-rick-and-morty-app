import { Avatar, ListItem, Text } from '@rneui/themed';
import * as React from 'react';
import { StyleSheet } from 'react-native';

export interface CharacterCardProps {
  avatarUrl: string;
  name: string;
  species: string;
  gender: string;
  origin: string;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({
  avatarUrl,
  name,
  species,
  gender,
  origin,
}) => (
  <ListItem containerStyle={styles.card} pad={10}>
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

const styles = StyleSheet.create({
  card: {
    borderRadius: 110,
    borderColor: 'grey',
    borderWidth: 1,
    padding: 10,
  },
  avatar: {
    backgroundColor: 'grey',
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
