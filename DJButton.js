import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
export default class DJButton extends React.Component {
  playSound = async () => {
    await Audio.setIsEnabledAsync(true);
    await Audio.Sound.createAsync(
     
      {
        uri: this.props.uri,
      },
      {
        shouldPlay: true,
      }
    );
  };
  render() {
    return (
      <TouchableOpacity
        style={[styles.soundButton, {backgroundColor:this.props.bgcolor}]}
        onPress={this.playSound}>
        <Text style={styles.soundButtonText}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  soundButton: {
   justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 30,
    width: 200,
    height: 50,
   
  },
  soundButtonText: { 
    textAlign: 'center',
     color: 'white',

   
   
    
    },
});
