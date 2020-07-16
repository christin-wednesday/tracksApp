import React, { useState, useEffect } from 'react';
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
    const { trackList, dispatchRequestTrackList } = props;
    const [ showSearch, setShowSearch] = useState(false);
    const [searchKey, setSearchKey] = useState('');
    const handleChangeInput = nativeEvent => {
        setSearchKey(nativeEvent.text)
    }
    const handleIconPress = () => {
        setShowSearch(!showSearch);
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
    return (
        <>
            {showSearch ? 
            <SearchBar searchKey={searchKey}
                handleChangeInput={handleChangeInput}
                handleIconPress={handleSearchIconPress} /> 
            : <TopBar handleIconPress={handleIconPress} />
            }
            <TrackListContainer>
                {renderTracks()}
            </TrackListContainer>
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
            dispatch(trackListCreators.fetchTrackList(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackList);