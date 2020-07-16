import React from 'react';
import styled from 'styled-components/native';
import { FlexContainer } from '../FlexContainer';
import { T } from '../T';

const TrackContainer = styled.View`
    display: flex;
    flex-direction: row;
    flex: 1;
    height: 70;
    paddingHorizontal: 10;
`;
const AlbumArt = styled.Image`
    height: 50;
    width: 50;
`
export function Track(props) {
    const { track } = props;
    return(
        <TrackContainer >
            <AlbumArt source={{uri: track.artworkUrl100}} />
            <FlexContainer flexDirection="column" alignItems="flex-start">
                <T fontSize={20}>{track.trackName}</T>
                <T>{track.artistName}</T>
            </FlexContainer>
        </TrackContainer>
    )
};