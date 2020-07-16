import React from 'react';
import { 
    Text
} from 'react-native';
import {
    Icon
} from 'react-native-elements'
import styled from 'styled-components/native';

const FlexContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #F0F0F0F0;
    height: 60;
    paddingHorizontal: 15;
`;
const T = styled.Text`
    color: black;
    font-size: 25;
    font-weight: bold;
`
export function TopBar(props) {
    const { handleIconPress } = props;
    return (
        <FlexContainer>
            <T>tracksApp</T>
            <Icon name="search" size={35} onPress={handleIconPress}/>
        </FlexContainer>
    )
}
