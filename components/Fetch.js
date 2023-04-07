import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';

export default class Fetch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    };


    async componentDidMount() {
        try {
            const response = await fetch('https://facebook.github.io/react-native/movies.json');
            const responseJson = await response.json();
            this.setState({ data: responseJson.movies });
        } catch (error) {
            console.error(error);
        }
    };

    /*     componentDidMount() {
            return fetch('https://facebook.github.io/react-native/movies.json')
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({ data: responseJson.movies })
                })
                .catch((error) => {
                    console.error(error);
                })
        }; */

    render() {
        return (
            <View style={styles.center}>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => <Text style={styles.center}>{item.title} {item.releaseYear}</Text>} />
            </View>
        );
    }

};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    }
});