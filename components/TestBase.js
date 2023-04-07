import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, FlatList, SectionList } from 'react-native';

export default class TestBase extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [{ key: 'Allo' }, { key: 'Bonjour' }],
            DATA: [
                {
                    title: 'Main dishes',
                    data: ['Pizza', 'Burger', 'Risotto'],
                },
                {
                    title: 'Sides',
                    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
                },
                {
                    title: 'Drinks',
                    data: ['Water', 'Coke', 'Beer'],
                },
                {
                    title: 'Desserts',
                    data: ['Cheese Cake', 'Ice Cream'],
                },
            ]
        }
    }
    render() {
        return (
            <React.Fragment>
                <View style={styles.container}>
                    <StatusBar style="auto" />
                    <Text style={{ marginTop: 30, }}>test</Text>
                    <Image source={require('../assets/favicon.png')} style={styles.imagehome} />
                    <ScrollView style={styles.scrollviewcontainer}>
                        <Text>Lorem 22 ipsum dolor sit amet consectetur adipisicing elit. Quasi assumenda quidem culpa aut fugit deleniti quae dolores voluptatum reiciendis iste.</Text>
                        <Text>Quaerat reiciendis ipsam non sit voluptate eligendi libero molestiae consectetur nam? Tenetur ratione repellendus, ad incidunt eaque consequatur fugit possimus.</Text>
                        <Text>Hic pariatur dicta laborum minus labore alias commodi, veritatis placeat, rerum sequi corporis optio consequuntur iste id quo minima laudantium?</Text>
                        <Text>Ipsum laudantium doloribus necessitatibus autem perspiciatis magnam suscipit quos, labore deleniti iste nostrum, nihil distinctio! Nihil ullam itaque nesciunt sit?</Text>
                        <Text>Tempore iusto, sint in quia harum, odit, tempora obcaecati illo nulla provident omnis beatae rerum incidunt repellat consequuntur excepturi optio.</Text>
                        <Text>Commodi, soluta placeat quae tempora odit eius natus atque laborum quasi vel iste suscipit expedita eveniet cumque quisquam adipisci deleniti.</Text>
                        <Text>Nobis maiores repellendus fuga sed id ducimus ullam perspiciatis pariatur neque provident voluptatum rem possimus, molestias impedit earum architecto debitis!</Text>
                        <Text>Repellendus, illum velit provident cum atque, quis facere totam, odit minima sequi accusamus nemo. Nulla, eaque! Veniam qui at a.</Text>
                        <Text>Repudiandae deserunt officia, autem voluptate laboriosam facere, molestiae nulla cupiditate, inventore quod consectetur enim ea fugiat sequi! Magnam, molestias rem.</Text>
                        <Text>Beatae ipsum architecto error eius qui dolorem, earum aut numquam. Nihil velit soluta non obcaecati hic recusandae voluptas, expedita fugit.</Text>
                        <Text>Atque in provident excepturi aliquid alias assumenda cum fuga. Ratione, ipsam libero velit cumque tenetur sunt eveniet perspiciatis explicabo suscipit?</Text>
                        <Text>Culpa dolorem sequi recusandae voluptates animi quos enim cupiditate repellendus iure! Nobis porro similique aspernatur fuga voluptatibus accusamus culpa amet?</Text>
                        <Text>Doloremque nisi esse, modi culpa amet, eveniet et rem quidem soluta consequuntur quae veritatis cumque vero assumenda ipsa omnis sed!</Text>
                        <Text>Laudantium voluptatum autem, inventore tenetur numquam nam sapiente dicta distinctio obcaecati ipsa, alias minima explicabo quaerat nostrum. Est, aperiam consequatur!</Text>
                        <Text>Repellat, alias. Rem reiciendis aperiam nostrum, nesciunt tenetur totam placeat ipsam asperiores voluptate qui. Atque voluptatem et dolores praesentium neque!</Text>
                        <Text>Dolorem aliquam iusto repellat assumenda maiores aspernatur eaque ipsum. Minus fuga quam praesentium doloribus veritatis vero a eum voluptatibus sit.</Text>
                        <Text>Laudantium doloremque sunt a commodi, consectetur veniam exercitationem, totam odio mollitia quo ipsam maxime in alias aut! Saepe, ea accusantium.</Text>
                        <Text>Cupiditate illum dolorem voluptas dignissimos quis veritatis labore culpa officiis. Recusandae, atque quidem ab numquam doloremque aliquid ipsa dolorem culpa.</Text>
                        <Text>Rerum, molestiae eaque, amet vitae facilis reprehenderit odio maiores excepturi hic, dolores veniam aliquam sunt totam nemo ex minus repudiandae.</Text>
                        <Text>Unde maiores ullam labore beatae officia? Minus hic illum doloribus esse veritatis aliquam dolorem architecto? Voluptates magni animi quaerat autem!</Text>
                    </ScrollView>
                    <FlatList data={this.state.data} renderItem={({ item }) => <Text>{item.key}</Text>} style={styles.scrollviewcontainer} />
                    <SectionList
                        sections={this.state.DATA}
                        keyExtractor={(item, index) => item + index}
                        renderItem={({ item }) => (<View><Text>{item}</Text></View>)}
                        renderSectionHeader={({ section: { title } }) => (<Text style={styles.header}>{title}</Text>)}
                    />
                </View>
                <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'flex-end', flexDirection: 'row', }}>
                    <Text> hello </Text>
                    <Text> hello 2 </Text>
                </View>
            </React.Fragment>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 4,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey',
    },
    imagehome: {
        width: 150,
        height: 150,
    },
    scrollviewcontainer: {
        height: 300,
    },
});

