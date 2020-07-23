import React from 'react';
import styled from 'styled-components/native';
import {FlexContainer} from '../FlexContainer';
import {T} from '../T';

const TrackContainer = styled(FlexContainer)`
  borderBottomWidth: 1px;
  borderBottomColor: grey;
`;
const AlbumArt = styled.Image`
  height: 50;
  width: 50;
`;
export function Track(props) {
  const {track} = props;
  return (
    <TrackContainer style={{flex: 1}}>
      <AlbumArt source={{uri: track.artworkUrl100}} />
      <FlexContainer flexDirection="column" alignItems="flex-start" height={55}>
        <T fontSize={20}>{track.trackName}</T>
        <T>{track.artistName}</T>
      </FlexContainer>
    </TrackContainer>
  );
}
