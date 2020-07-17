import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    StatusBar,
  } from 'react-native';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import styled from 'styled-components/native';
import { TopBar } from '../../components/TopBar';
import { Track } from '../../components/Track';
import { SearchBar } from '../../components/SearchBar';
import { trackListCreators } from './reducer';

const TrackListContainer = styled.ScrollView`
    background-color: white;
`;

function TrackList(props) {
    const { trackList, dispatchRequestTrackList, navigation, dispatchClearTrackList } = props;
    const [ showSearch, setShowSearch] = useState(false);
    const [searchKey, setSearchKey] = useState('');
    const handleChangeInput = nativeEvent => {
        setSearchKey(nativeEvent.text)
    }
    const handleIconPress = () => {
        setShowSearch(!showSearch);
        setSearchKey('')
        }
    const handleAddPress = () => {
        navigation.navigate("addArtist")
    }
    const renderTracks = () =>
        trackList.map(track => (
            <Track track={track}/>
            ));
    const handleSearchIconPress = () => {
        if (!isEmpty(searchKey.trim())) {
            dispatchRequestTrackList(searchKey);
        }
    }
    const handleTitlePress = () => {
      dispatchClearTrackList();
    }
    return (
        <>
        <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView>
                    {showSearch ?
                    <SearchBar searchKey={searchKey}
                        handleChangeInput={handleChangeInput}
                        handleIconPress={handleSearchIconPress}
                        handleBackPress={handleIconPress}  />
                    : <TopBar
                    handleIconPress={handleIconPress}
                    handleAddPress={handleAddPress}
                    handleTitlePress={handleTitlePress}
                    />
                    }
                    <TrackListContainer>
                        {renderTracks()}
                    </TrackListContainer>
                </ScrollView>
        </SafeAreaView>
        </>
    )
}

const mapStateToProps = state => {
    return {
        trackList: state.trackList,
        error: state.error
    }
}

function mapDispatchToProps(dispatch){
    return {
        dispatchRequestTrackList: payload =>
            dispatch(trackListCreators.fetchTrackList(payload)),
        dispatchClearTrackList: () =>
            dispatch(trackListCreators.clearTrackList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackList);
