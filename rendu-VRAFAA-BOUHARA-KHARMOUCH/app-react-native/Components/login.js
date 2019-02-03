// Components/Search.js
/*
import React from 'react'
import {ScrollView,Text,View, TextInput, Button } from 'react-native'

class Login extends React.Component {
  render() {
    return (
        <ScrollView style={{padding: 20}}>
        <Text 
            style={{fontSize: 27}}>
            Welcome
        </Text>
        <View style={{margin:20}} />
        <Button
                    onPress={this.props.onLogoutPress}
                    title="Logout"
                />
        </ScrollView>
    )
  }





}

export default Login*/





import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View, TouchableOpacity, TextInput, Button, Keyboard
} from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class login extends Component {
	//la navigation vers la page utilisatur invité
	static navigationOptions = ({ navigation }) => ({
		title: 'Login',
		headerRight:
			<TouchableOpacity
				onPress={() => navigation.navigate('Listvidinvit')}
				style={{ margin: 10, backgroundColor: 'orange', padding: 10 }}>
				<Text style={{ color: '#ffffff' }}>Home</Text>
			</TouchableOpacity>

	});
	constructor(props) {
		super(props)
		this.state = {
			userEmail: '',
			userPassword: '',
			geolocalisation: ''
		}
	}
	/* méthode login qui permet de verifier les données sont corect ou les champs vides 
	* si les données sont corecte on passe a la verification de ces données dans la base de donnée
	* si les données existe dans la base on va se redireger vers la liste des video ou il peut ajouter un artisan 
	*/
	login = () => {
		const { userEmail, userPassword } = this.state;
		let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (userEmail == "") {
			//alert("Please enter Email address");
			this.setState({ email: 'Please enter Email address' })
			//alert(this.state.geolocalisation);
		}

		else if (reg.test(userEmail) === false) {
			//alert("Email is Not Correct");
			this.setState({ email: 'Email is Not Correct' })
			return false;
		}

		else if (userPassword == "") {
			this.setState({ email: 'Please enter password' })
		}
		else {
			//api de login en lui passant l'email et le mot de pass 
			fetch('https://artisanjeux.000webhostapp.com/login.php', {
				method: 'post',
				header: {
					'Accept': 'application/json',
					'Content-type': 'application/json'
				},
				body: JSON.stringify({
					// we will pass our input data to server
					email: userEmail,
					password: userPassword
				})

			})
				.then((response) => response.json())
				.then((responseJson) => {
					if (responseJson == "ok") {
						// redirect to profile page
						alert("Successfully Login");
						//navigation vers la page utilisateur connecter en passant en parametre l'email de utilisateur afin 
						//d'avoir les information de l'utilisateur connecter dans la page utilisateur connecté 
						this.props.navigation.navigate("Listvid", { emailUser: this.state.userEmail });
					} else {
						alert("Wrong Login Details");
					}
				})
				.catch((error) => {
					console.error(error);
				});
		}


		Keyboard.dismiss();
	}

	//api qui permet la geolocalisation recuperation de ville et region 
	componentDidMount() {
		const url2 = 'http://api.ipinfodb.com/v3/ip-city/?key=6e51641499a6afe3d58e242c7ae647718f84d2cf085f8afd18275a2fefadf070&format=json'

		fetch(url2)
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState({
					geolocalisation: responseJson['cityName']
				})
			})
			.catch((error) => {
				console.log(error)
			})

	}


	render() {
		return (
			<View style={styles.container}>
				<Text style={{ padding: 10, margin: 10, color: 'red' }}>{this.state.email}</Text>

				<TextInput
					placeholder="Enter Email"
					style={{ width: 200, margin: 10 }}
					onChangeText={userEmail => this.setState({ userEmail })}
				/>

				<TextInput
					placeholder="Enter Password"
					secureTextEntry={true}
					style={{ width: 200, margin: 10 }}
					onChangeText={userPassword => this.setState({ userPassword })}

				/>


				<TouchableOpacity
					onPress={this.login}
					style={{ width: 200, padding: 10, backgroundColor: 'magenta', alignItems: 'center' }}>
					<Text style={{ color: 'white' }}>Login</Text>
				</TouchableOpacity>
				<Text> </Text>
				<TouchableOpacity
					onPress={() => this.props.navigation.navigate("Register")}
					style={{ width: 200, padding: 10, backgroundColor: 'magenta', alignItems: 'center' }}>
					<Text style={{ color: 'white' }}>Register</Text>
				</TouchableOpacity>


			</View>

		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},

});

AppRegistry.registerComponent('login', () => login);