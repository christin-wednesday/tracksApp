import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import styled from 'styled-components/native';
import { TopBar } from '../../components/TopBar';
import { Track } from '../../components/Track';
import { SearchBar } from '../../components/SearchBar';
import { For } from '../../components/For';
import { trackListCreators } from './reducer';

const TrackListContainer = styled.ScrollView`
    background-color: white;
`;

function TrackList(props) {
    const { trackList, dispatchRequestTrackList } = props;
    const [ showSearch, setShowSearch] = useState(false);

    useEffect(() => {
        if (isEmpty(trackList)) {
            dispatchRequestTrackList();
        }
    }, [trackList]);
    const handleIconPress = () => {
        console.log('hiding search', !showSearch)
        setShowSearch(!showSearch);
    }
    const renderTrack = item => (
        <Track track={item} />
    )
    console.log(trackList)
    return (
        <>
            {showSearch ? <SearchBar handleIconPress={handleIconPress} /> : <TopBar handleIconPress={handleIconPress} />}
            <TrackListContainer>
                <For 
                    wrapper={() => null}
                    render={renderTrack}
                    list={trackList}
                />
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
        dispatchRequestTrackList: () => 
            dispatch(trackListCreators.fetchTrackList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackList);