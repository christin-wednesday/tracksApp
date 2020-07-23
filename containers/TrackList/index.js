import React, {useState, useLayoutEffect} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  FlatList,
  StyleSheet,
  View,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import styled from 'styled-components/native';
import isEmpty from 'lodash/isEmpty';
import {TopBar} from '../../components/TopBar';
import {Track} from '../../components/Track';
import {SearchBar} from '../../components/SearchBar';
import {trackListCreators} from './reducer';

function TrackList(props) {
  const {
    trackList,
    loading,
    error,
    dispatchRequestTrackList,
    navigation,
    dispatchClearTrackList,
  } = props;
  const [showSearch, setShowSearch] = useState(false);
  const [searchKey, setSearchKey] = useState('');
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon name="add-circle-outline" size={35} onPress={handleAddPress} />
      ),
    });
  }, [navigation]);
  const handleAddPress = () => {
    navigation.navigate('addArtist');
  };
  const handleChangeInput = (nativeEvent) => {
    setSearchKey(nativeEvent.text);
  };
  const handleIconPress = () => {
    setShowSearch(!showSearch);
    setSearchKey('');
  };
  const renderTracks = ({item}) => <Track track={item} />;
  const handleSearchIconPress = () => {
    if (!isEmpty(searchKey.trim())) {
      dispatchRequestTrackList(searchKey);
    }
  };
  const handleTitlePress = () => {
    dispatchClearTrackList();
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1, flexDirection: 'column'}}>
        <View style={{height: 60}}>
          {showSearch ? (
            <SearchBar
              searchKey={searchKey}
              handleChangeInput={handleChangeInput}
              handleIconPress={handleSearchIconPress}
              handleBackPress={handleIconPress}
            />
          ) : (
            <TopBar
              handleIconPress={handleIconPress}
              handleAddPress={handleAddPress}
              handleTitlePress={handleTitlePress}
            />
          )}
        </View>
        <View style={{flex: 1}}>
          <ActivityIndicator animating={loading} />
          <FlatList
            data={trackList}
            renderItem={renderTracks}
            keyExtractor={(item) => item.trackId}
            style={{flex: 2}}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    trackList: state.trackList,
    error: state.error,
    loading: state.loading,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    dispatchRequestTrackList: (payload) =>
      dispatch(trackListCreators.fetchTrackList(payload)),
    dispatchClearTrackList: () => dispatch(trackListCreators.clearTrackList()),
  };
  r;
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackList);
