import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView, { Callout, Circle, Marker } from 'react-native-maps';

const Maps = ({ localisations }) => {

    const [pin, setPin] = useState({ latitude: 48.858349, longitude: 2.233235, })
    const [region, setRegion] = useState({ latitude: 48.858349, longitude: 2.233235, latitudeDelta: 0.02, longitudeDelta: 0.01, })

    let markers = [{
        "key": "1", "coordinate": { "latitude": 48.859369, "longitude": 2.233255 }, "title": "Scène 1", "description": "C'est la scène 1", "image": "'../assets/favicon.png'"
    },
    {
        "key": "2", "coordinate": { "latitude": 48.855129, "longitude": 2.233225 }, "title": "Scène 2", "description": "C'est la scène 2", "image": "'../assets/favicon.png'"
    }
    ]

    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
                placeholder='Rechercher'
                fetchDetails={true}
                GooglePlacesDetailsQuery={{
                    rankby: "distance",
                }}
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    setRegion({
                        latitude: details.geometry.location.lat,
                        longitude: details.geometry.location.lng,
                        latitudeDelta: 0.02,
                        longitudeDelta: 0.01,
                    })
                }}
                query={{
                    key: 'AIzaSyDBk2rmPHahLhdOXifly6WPvXooXShezKM',
                    language: 'fr',
                    components: "country:fr",
                    radius: 30000,
                    location: `${region.latitude}, ${region.longitude}`
                }}
                styles={{
                    container: { flex: 0, position: "absolute", width: "100%", zIndex: 1, paddingHorizontal: 10, paddingTop: 10, },
                    listView: { backgroundColor: "white" },
                    textInput: { paddingHorizontal: 20, borderRadius: 20, }
                }}
            />
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 48.859349,
                    longitude: 2.233235,
                    latitudeDelta: 0.02,
                    longitudeDelta: 0.01,
                }} >
                <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
                {markers.map((marker) => (
                    <Marker key={marker.key} coordinate={marker.coordinate} title={marker.title} description={marker.description} pinColor="lightblue" />
                ))}
                {localisations.map((localisation) => (
                    <>
                        < Marker
                            key={localisation.id}
                            coordinate={{ latitude: Number(localisation.latitude), longitude: Number(localisation.longitude) }}
                            pinColor="rgb(50, 50, 50)" >
                            <Callout>
                                <Text>{localisation.name}</Text>
                            </Callout>
                        </Marker>
                    </>
                ))}

                <Marker
                    coordinate={pin}
                    pinColor="rgb(215, 123, 222)"
                    draggable={true}
                    onDragEnd={(e) => {
                        setPin({
                            latitude: e.nativeEvent.coordinate.latitude,
                            longitude: e.nativeEvent.coordinate.longitude
                        })
                    }}
                >
                    <Callout>
                        <Text>I can move with the circle</Text>
                    </Callout>
                </Marker>
                <Circle
                    center={pin}
                    radius={100}
                />
            </MapView>
        </View>
    );
};

export default Maps;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});