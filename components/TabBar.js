import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, Text, View } from 'react-native';

function TabBar() {

    const Tab = createMaterialTopTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="Notifications" component={Notifications} />
        </Tab.Navigator>
    );
}

function Notifications() {

    const Tab = createMaterialTopTabNavigator();

    return (
        <View>
            <Text style={styles.center}>
                Notifications
            </Text>
        </View>
    );
}

function Feed() {

    const Tab = createMaterialTopTabNavigator();

    return (
        <View>
            <Text style={styles.center}>
                Feed
            </Text>
        </View>
    );
}

function Home() {

    const Tab = createMaterialTopTabNavigator();

    return (
        <View>
            <Text style={styles.center}>
                Home
            </Text>
        </View>
    );
}

export default TabBar;

const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(240,230,200)',
    }
});