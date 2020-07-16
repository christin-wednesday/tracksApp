import React, { useEffect} from 'react';
import {
    View,
    Text
} from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { TopBar } from '../../components/TopBar';
import { Track } from '../../components/Track';
import { trackListCreators } from './reducer';

const TrackListContainer = styled.ScrollView`
    background-color: white;
`;

function TrackList(props) {
    const { trackList, dispatchRequestTrackList } = props;
    useEffect(() => {
        if (trackList === 'init') {
            dispatchRequestTrackList();
        }
    }, []);

    return (
        <>
            <TopBar />
            <TrackListContainer>
                <Track track={trackList[0]}/>
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