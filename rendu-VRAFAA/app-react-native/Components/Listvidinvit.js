import React from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList, TouchableOpacity, ToastAndroid } from 'react-native';
import { Video } from 'expo';
import { MaterialIcons, Octicons, AntDesign } from '@expo/vector-icons';
import { createStackNavigator, createSwitchNavigator, StackNavigator } from 'react-navigation';
export default class Listvidinvit extends React.Component {

//liste des video des invités

    constructor() {
        super()
        this.state = {
            shouldPlay: false,
            mute: false,
            like: false,
            geolocalisation: '',

            dataSource: []
        }


    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Les videos de votre region',
    });


    //alert de la position du client 
    getPosition = () => {

        alert(this.state.geolocalisation['cityName'] + "\n" + this.state.geolocalisation['regionName'] + "\n" + this.state.geolocalisation['countryName']);

    }

    renderSeparator = () => {
        return (
            <View
                style={{ height: 1, width: '100%', background: 'black' }}>
            </View>
        )


    }
    //fonction de traitement des données json de API
    componentDidMount() {
        const url = 'https://artisanjeux.000webhostapp.com/video.php?action=avignon';
        const url2 = 'http://api.ipinfodb.com/v3/ip-city/?key=6e51641499a6afe3d58e242c7ae647718f84d2cf085f8afd18275a2fefadf070&format=json'

        fetch(url2)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    geolocalisation: responseJson
                })


            })
            .catch((error) => {
                console.log(error)
            })
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    dataSource: responseJson.video
                })
            })
            .catch((error) => {
                console.log(error)
            })



    }

    renderItem = ({ item }) => {

        return (


            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Vid', { url: 'https://artisanjeux.000webhostapp.com/' + item.url, id: item.id, titre: item.titre })}>
                <Text style={{ textAlign: 'center' }}>
                    {item.titre}</Text>
                <Video
                    source={{
                        uri:
                            'https://artisanjeux.000webhostapp.com/' + item.url
                    }}
                    shouldPlay={this.state.shouldPlay}
                    resizeMode="cover"
                    style={{ width: 300, height: 300 }}
                    isMuted={this.state.mute}
                />
            </TouchableOpacity>




        )
    }
    render() {
        const { navigate } = this.props.navigation;
        const { params } = this.props.navigation.state;
        const { width } = Dimensions.get('window');
        //id utilisateur connecté

        return (





            <View style={styles.container}>

                <TouchableOpacity
                    onPress={this.getPosition}
                    style={{
                        width: 250, padding: 10, backgroundColor: 'magenta',
                        alignItems: 'center'
                    }}>
                    <Text style={{ color: '#fff' }}>Get your position</Text>
                </TouchableOpacity>



                <FlatList
                    data={this.state.dataSource}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={this.renderItem}
                    ItemSeparatorComponent={this.renderSeparator}


                />

                <TouchableOpacity
                    onPress={this.getPosition}
                    style={{
                        width: 250, padding: 10, backgroundColor: 'magenta',
                        alignItems: 'center'
                    }}>
                    <Text style={{ color: '#fff' }}>Get your position</Text>
                </TouchableOpacity>


            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    controlBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    }
});

