import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HomeScreen = () => {
    return (
        <View style={styles.textehome}>
            <Text>
                Ceux-ci sont les exemples de mon apprentissage 	&#128527;
            </Text>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    textehome: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(240,230,200)',

    }
});