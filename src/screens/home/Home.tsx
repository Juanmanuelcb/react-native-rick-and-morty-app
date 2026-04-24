import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '@rneui/themed';

export const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.card_image} />
                <View style={styles.card_content}>
                    <Text>Prueba</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1
    },
    card: {
        borderRadius: 18,
        borderColor: 'grey',
        borderWidth: 1,
        padding: 10,
        gap: 10,
        flexDirection: 'row'
    },
    card_image: {
        borderRadius: 8,
        backgroundColor: 'grey',
        height: 100,
        width: 100
    },
    card_content: {
        flex: 1
    }
});