import React from 'react';
import styled from 'styled-components/native';

const TrackContainer = styled.View`
    display: flex;
    flex-direction: row;
    height: 70;
    paddingHorizontal: 10;
`;
const AlbumArt = styled.Image`
    height: 50;
    width: 50;
`
const ArtistName = styled.Text`
    font-size: 30
    paddingLeft: 10
`;
export function Track(props) {
    const { track } = props;
    return(
        <TrackContainer>
            <AlbumArt source={{uri: track.albumArtUri}} />
            <ArtistName>{track.artistName}</ArtistName>
        </TrackContainer>
    )
};
Track.defaultProps = {
    track: {
        artistName: 'Pink Floyd',
        albumArtUri:'https://upload.wikimedia.org/wikipedia/en/9/95/Highhopes.jpg'
    }
}