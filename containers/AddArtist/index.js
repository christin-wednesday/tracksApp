import React from 'react';
import { Text, Pressable } from 'react-native';
import { Icon } from 'react-native-elements';
import styled from 'styled-components/native';
import { FlexContainer } from '../../components/FlexContainer';

const T = styled(Text)`
    fontSize: 20;
    color: black;
`;

export function AddArtist({navigation}) {
    const handleOnPress = () => {
        navigation.navigate("Home")
    }
    return(
        <FlexContainer flexDirection="column" justifyContent="space-around" >
            <T>
                TEST
            </T>
            <Icon name="rowing" size={25}  onPress={handleOnPress}/>
        </FlexContainer>
    )
}