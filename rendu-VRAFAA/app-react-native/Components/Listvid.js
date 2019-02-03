import React from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList, TouchableOpacity, ToastAndroid } from 'react-native';
import { Video } from 'expo';
import { MaterialIcons, Octicons, AntDesign } from '@expo/vector-icons';
import { createStackNavigator, createSwitchNavigator, StackNavigator } from 'react-navigation';
export default class Listvid extends React.Component {
//la liste des video et possibilite de l'ajout d'un artisan
    static navigationOptions = ({ navigation }) => ({
        title: 'Les videos de votre region',
    });

    constructor() {
        super()
        this.state = {
            shouldPlay: false,
            mute: false,
            like: false,
            emailUser: '',
            geolocalisation: '',
            dataSource: []
        }


    }

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
    //recuperer les les video de l'artisant de la ville utilisateur connecté 
    componentDidMount() {
        const url = 'https://artisanjeux.000webhostapp.com/video.php?action=avignon'
        const url2 = 'http://api.ipinfodb.com/v3/ip-city/?key=6e51641499a6afe3d58e242c7ae647718f84d2cf085f8afd18275a2fefadf070&format=json'
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

    }

    renderItem = ({ item }) => {

        return (


            <TouchableOpacity
            //redirection vers la page lecture de video en passant en parametre id,url,le nom de l'artisan afain de lire la video selectionner 
                onPress={() => this.props.navigation.navigate('Vid', { url: 'https://artisanjeux.000webhostapp.com/' + item.url, id: item.id, titre: item.titre,vote: item.vote })}>
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
        this.state.emailUser = params.emailUser;
        return (





            <View style={styles.container}>


                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Addvideo', { email: this.state.emailUser })}
                    style={{
                        width: 250, padding: 10, backgroundColor: 'magenta',
                        alignItems: 'center'
                    }}>
                    <Text style={{ color: '#fff' }}>Add Artisan</Text>
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

