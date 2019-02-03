import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { Video } from 'expo';
import { MaterialIcons, Octicons, AntDesign } from '@expo/vector-icons';
export default class Vid extends React.Component {

  //la page de lecture de video selectionner 
  static navigationOptions = {
    title: 'video',
  };

  state = {
    shouldPlay: true,
    mute: false,
    like: true,
    id: 0,
    vote: 0
  }



  //fonction arreter et demmarer la video
  handlePlayAndPause = () => {
    this.setState((prevState) => ({
      shouldPlay: !prevState.shouldPlay
    }));
  }
  //fonction muter le volume
  handleVolume = () => {
    this.setState(prevState => ({
      mute: !prevState.mute,
    }));
  }
  //fonction changer l'icone de vote et incrimenter le nombre de vote dans la base de données
  islike = () => {
    this.state.vote = this.state.vote + 1;
    this.setState(prevState => ({
      like: !prevState.like,

    }));
    //api qui permet d'augmenter les votes
    fetch('http://artisanjeux.000webhostapp.com/vote.php?action=' + this.state.id).then((response) => response.json())
      .then((responseJson) => {
        if (responseJson == "vote Successfully") {

          alert(" vote Successfully ");

        } else {
          alert("Wrong vote Details");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    const { width } = Dimensions.get('window');
    const { params } = this.props.navigation.state;
    this.state.id = params.id;
    this.state.vote = params.vote;

    return (




      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.getPosition}
          style={{
            width: 250, padding: 10, backgroundColor: 'magenta',
            alignItems: 'center'
          }}>
          <Text style={{ color: '#fff' }}>Votez!! en cliquant sur le pouce</Text>
        </TouchableOpacity>
        <View>

          <Text style={{ textAlign: 'center' }}>
            {params.titre}</Text>

          <Video
            source={{ uri: params.url }}
            shouldPlay={this.state.shouldPlay}
            resizeMode="cover"
            style={{ width, height: 400 }}
            isMuted={this.state.mute}
          />
          <View style={styles.controlBar}>
            <MaterialIcons
              name={this.state.mute ? "volume-mute" :
                "volume-up"}
              size={45}
              color="white"
              onPress={this.handleVolume}
            />
            <MaterialIcons
              name={this.state.shouldPlay ? "pause" :
                "play-arrow"}
              size={45}
              color="white"
              onPress={this.handlePlayAndPause}
            />

            <AntDesign
              name={this.state.like ? "like2" :
                "like1"}
              size={45}
              color="white"
              onPress={this.islike}
            />
          </View>
        </View>
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

