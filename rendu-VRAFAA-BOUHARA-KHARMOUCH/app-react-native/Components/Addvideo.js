import React from 'react';
import { CameraRoll, TextInput, StyleSheet, Button, ScrollView, Text, View, Dimensions, FlatList, TouchableOpacity, ToastAndroid } from 'react-native';
import { Video } from 'expo';
import { MaterialIcons, Octicons, AntDesign } from '@expo/vector-icons';
import { createStackNavigator, createSwitchNavigator, StackNavigator } from 'react-navigation';
export default class Addvideo extends React.Component {

    //class qui permet l'ajout des artisans
    
    static navigationOptions = ({ navigation }) => ({
        title: 'Add Artisan and video',
    });

    constructor(props) {
        super(props)
        this.state = {
            artisanName: '',
            artisanVideo: '',
            artisanCity: '',
            emailUser: '',
            id: 0,
            geolocalisation: '',
            idd: ''

        }
    }
    //alert de la position du client 
    getPosition = () => {

        alert(this.state.geolocalisation['cityName'] + "\n" + this.state.geolocalisation['regionName'] + "\n" + this.state.geolocalisation['countryName']);

    }

    artisanRegister = () => {
        //alert('ok'); // version 0.48

        const { artisanName } = this.state;
        const { artisanVideo } = this.state;
        const { artisanCity } = this.state;
        const { id } = this.state;


        //api de l'ajout de l'artisan avec id de utilisateur connecter afin de savoir qui a ajouté la vidéo
        fetch('https://artisanjeux.000webhostapp.com/addArtisan.php', {
            method: 'post',
            header: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name: artisanName,
                video: artisanVideo,
                city: artisanCity,
                idUser: id,

            })

        })
            .then((response) => response.json())
            .then((responseJson) => {
                alert(responseJson);
                if (responseJson == "Artisan Registered Successfully") {
                    this.props.navigation.navigate("Listvid", { emailUser: this.state.emailUser });
                }
            })
            .catch((error) => {
                console.error(error);
            });

    }

    componentDidMount() {
        //ici on passe le paramettre email de utilisateur connecter a l'api pour recuperer l'id de l'utilisateur connecter 
        //recuperer la localisation avec l'api url2
        const url = 'https://artisanjeux.000webhostapp.com/iduser.php?action=' + this.state.emailUser;
        const url2 = 'http://api.ipinfodb.com/v3/ip-city/?key=6e51641499a6afe3d58e242c7ae647718f84d2cf085f8afd18275a2fefadf070&format=json'
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    idd: responseJson.video[0]['id']

                })
                //recuper la ville de utilisateur connecter
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



            })
            .catch((error) => {
                console.log(error)
            })

    }
    //fonction d'ajout d'image 
    _handleButtonPress = () => {
        CameraRoll.getPhotos({
            first: 20,
            assetType: 'Photos',
        })
            .then(r => {
                this.setState({ photos: r.edges });
            })
            .catch((err) => {
                //Error Loading Images
            });
    };

    render() {
        const { navigate } = this.props.navigation;
        const { width } = Dimensions.get('window');
        const { params } = this.props.navigation.state;

        this.state.id = parseInt(this.state.idd);
        //id utilisateur connecté
        this.state.emailUser = params.email;
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

                <Button title="Load Video" onPress={this._handleButtonPress} />

                <TextInput
                    placeholder="Enter Name Artisan"
                    style={{
                        width: 250, margin: 10, borderColor: "#333",
                        borderWidth: 1
                    }}
                    underlineColorAndroid="transparent"
                    onChangeText={artisanName => this.setState({ artisanName })}

                />

                <TextInput
                    placeholder="Enter name video"
                    style={{
                        width: 250, margin: 10, borderColor: "#333",
                        borderWidth: 1
                    }}
                    underlineColorAndroid="transparent"
                    onChangeText={artisanVideo => this.setState({ artisanVideo })}
                />

                <TextInput
                    placeholder="Enter city"
                    style={{
                        width: 250, margin: 10, borderColor: "#333",
                        borderWidth: 1
                    }}
                    underlineColorAndroid="transparent"
                    onChangeText={artisanCity => this.setState({ artisanCity })}

                />

                <TouchableOpacity
                    onPress={this.artisanRegister}
                    style={{
                        width: 250, padding: 10, backgroundColor: 'magenta',
                        alignItems: 'center'
                    }}>
                    <Text style={{ color: '#fff' }}>Add Artisan</Text>
                </TouchableOpacity>

                <ScrollView>



                </ScrollView>


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

