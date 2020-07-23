import React, {useState} from 'react';
import {
  Image,
  TextInput,
  StyleSheet,
  Button,
  SafeAreaView,
  Pressable,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {T} from '../../components/T';
import {FlexContainer} from '../../components/FlexContainer';
import {artistPlaceHolderImage} from './constants';

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: '100%',
    flex: 3,
    alignSelf: 'center',
    borderRadius: 15,
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 10,
    width: '100%',
    borderRadius: 5,
    marginBottom: 10,
  },
});
export function AddArtist() {
  const [artistImage, setArtistImage] = useState({uri: artistPlaceHolderImage});
  const [artistName, setArtistName] = useState('');
  const [trackName, setTrackName] = useState('');

  const handleArtistNameInput = (nativeEvent) =>
    setArtistName(nativeEvent.text);

  const handleTrackNameInput = (nativeEvent) => setTrackName(nativeEvent.text);

  const handleAddImagePress = () => {
    const options = {
      title: 'Select Artist Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};
        setArtistImage({uri: source.uri});
      }
    });
  };
  const handleAddAnArtist = () => {
    if (artistName.trim() && trackName.trim()) {
      dispatchSaveArtist({
        artistName,
        trackName,
        artistImage,
      });
    }
  };
  return (
    <SafeAreaView
      style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={{flex: 3}}>
        <T fontSize={30} customStyles={{flex: 1, alignSelf: 'center'}}>
          Add an Artist
        </T>

        <Pressable style={{flex: 2}} onPress={handleAddImagePress}>
          <Image source={artistImage} style={styles.imageContainer} />
          <T>Press to change the image</T>
        </Pressable>
        <FlexContainer flexDirection="column" flex={3} justifyContent="center">
          <TextInput
            style={styles.input}
            placeholder="Add an artist name"
            value={artistName}
            onChangeText={handleArtistNameInput}
          />
          <TextInput
            style={styles.input}
            placeholder="Add a track name"
            value={trackName}
            onChangeText={handleTrackNameInput}
          />
        </FlexContainer>
        <Pressable
          style={{
            backgroundColor: '#007AFF',
            borderRadius: 50,
            width: '70%',
            alignSelf: 'center',
          }}>
          <Button
            title="Add an Artist"
            onPress={() => null}
            color={Platform.OS === 'android' ? null : 'white'}
          />
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
