import React, { useEffect} from 'react';
import {
    View,
    Text
} from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'; 
import { trackListCreators } from './reducer';
import { selectTrackList } from './selectors';

function TrackList(props) {
    const { trackList, dispatchRequestTrackList } = props;
    useEffect(() => {
        if (trackList === 'init') {
            dispatchRequestTrackList();
        }
        console.log(trackList)
    }, [])
   
    console.log(trackList)
    return (
        <View>
            <Text>Home</Text>
            <Text>Track</Text>
        </View>
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