import React, { useEffect, useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import TestBase from './TestBase';
import ReactNavigationTutoMovingBetweenScreens from './ReactNavigationTutoMovingBetweenScreens';
import TabBar from './TabBar';
import PassingParameters from './PassingParameters';
import Fetch from './Fetch';
import Logo from './Logo';
import Maps from './Maps';
import WordpressFetch from './WordpressFetch';
import axios from 'axios';

export default function Basics() {
    const Drawer = createDrawerNavigator();
    const [posts, setPosts] = useState();


    /* // fetch first method
    useEffect(() => {
        let postsURL = "http://www.mspr2023.infinityfreeapp.com/wp-json/wp/v2/posts"
        fetch(postsURL)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((apiData) => {
                setPosts(apiData.message);
            })
            .catch((error) => {
                console.log(error)
            })
        console.log(posts)
    }, []); */

    //fetch second method with axios
    useEffect(() => {
        let postsURL = "http://mspr2023.go.yj.fr/wp-json/wp/v2/posts"
        axios.get(postsURL).then((res) => {
            setPosts(JSON.parse(res.request._response))
        }).catch((error) => {
            console.log('ceci est une erreur ' + error)
        });
    }, []);

    return (
        <React.Fragment>
            <Drawer.Navigator
                initialRouteName="HomeScreen"
                screenOptions={{
                    headerTitle: (props) => <Logo {...props} />,
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: 'lavenderblush',
                    },
                    headerTintColor: 'lightblue',
                }}>
                <Drawer.Screen name="HomeScreen" component={HomeScreen} />
                <Drawer.Screen name="WordpressFetch" >{(props) => <WordpressFetch {...props} posts={posts} />}</Drawer.Screen>
                <Drawer.Screen name="Maps" component={Maps} />
                <Drawer.Screen name="Fetch" component={Fetch} />
                <Drawer.Screen name="PassingParameters" component={PassingParameters} />
                <Drawer.Screen name="TabBar" component={TabBar} />
                <Drawer.Screen name="ReactNavigationTutoMovingBetweenScreens" component={ReactNavigationTutoMovingBetweenScreens} />
                <Drawer.Screen name="TestBase" component={TestBase} />
            </Drawer.Navigator>
        </React.Fragment>
    );
}