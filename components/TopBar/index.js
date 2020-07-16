import React from 'react';
import {
    Icon
} from 'react-native-elements'
import styled from 'styled-components/native';
import { FlexContainer } from '../FlexContainer';

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
