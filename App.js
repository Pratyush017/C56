import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import DJButton from './DJButton';
import AppHeader from './AppHeader';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppHeader />
        <View style={styles.musicButtonContainer}>
          <DJButton
            uri="https://www.mboxdrive.com/Bahjat%20Hometown%20Smile%20Lyrics%20Original].mp3"
            text="Hometown Smile"
            bgcolor="blue"
            
          />
        </View>
        <View style={styles.musicButtonContainer}>
          <DJButton
            uri="https://www.mboxdrive.com/Marshmello%20&%20Anne-Marie%20-%20FRIENDS%20OFFICIAL%20FRIENDZONE%20ANTHEM%20.mp3"
            text="Friends Marshmello"
            bgcolor="blue"
          />
        </View>
        <View style={styles.musicButtonContainer}>
          <DJButton
            uri="https://www.mboxdrive.com/Katy+Perry+Harleys+In+Hawaii+Official.mp3"
            text="Harleys in Hawaii"
            bgcolor="green"
          />
        </View>
        <View style={styles.musicButtonContainer}>
          <DJButton
            uri="https://www.mboxdrive.com/One+Direction+Night+Changes+Lyrics.mp3"
            text="Night Changes"
            bgcolor="green"
          />
        </View>
        <View style={styles.musicButtonContainer}>
          <DJButton
            uri="https://www.mboxdrive.com/Selena+Gomez+Marshmello+Wolves.mp3"
            text="Wolves Salena"
            bgcolor="red"
          />

          <TouchableOpacity
            style={styles.stopButton}
            onPress={() => {
              Audio.setIsEnabledAsync(false);
            }}>
            <Text>STOP MUSIC</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  stopButton: {
    width: 360,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: 'red',
    borderWidth: 4,
    marginTop: 50,
  },
});
