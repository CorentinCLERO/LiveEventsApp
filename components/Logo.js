import React from 'react';
import { Image, View, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const Logo = () => {
    const navigation = useNavigation();
    const route = useRoute();

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
                source={require('../assets/favicon.png')}
                style={{ width: 30, height: 30, marginRight: 10 }}
            />
            <Text onPress={() => navigation.navigate('HomeScreen')}>{route.name}</Text>
        </View>
    );
};

export default Logo