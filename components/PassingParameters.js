import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button, Text, TextInput, View } from 'react-native';

const First = ({ navigation }) => {
    const [name, setName] = React.useState('');
    return (
        <View>
            <TextInput placeholder='Entre ton nom' onChangeText={value => setName(value)} />
            <Button title="let see if it's your name" onPress={() => { navigation.navigate('Passing', { name }) }} />
        </View>
    )
};

const Passing = ({ route }) => {
    const [testName, setTestName] = React.useState('');
    const { name } = route.params;

    const updateTestName = (name) => {
        if (name.toLowerCase() === 'corentin' || name.toLowerCase() === 'estelle') {
            setTestName('Your name is absolutely ' + name)
        } else {
            setTestName('Dont be stupid, your name is not ' + name)
        }
    };

    React.useEffect(() => {
        updateTestName(name);
    }, [name]);

    return (
        <View><Text>{testName}</Text></View>
    )
};

const PassingParameters = () => {

    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator initialRouteName="PassingParameters">
            <Drawer.Screen name="First" component={First} />
            <Drawer.Screen name="Passing" component={Passing} />
        </Drawer.Navigator>
    );
};

export default PassingParameters;