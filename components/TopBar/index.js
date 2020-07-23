import React from 'react';
import {Icon} from 'react-native-elements';
import {Text, Pressable} from 'react-native';
import styled from 'styled-components/native';
import {FlexContainer} from '../FlexContainer';

const T = styled(Text)`
  color: black;
  font-size: 25;
  font-weight: bold;
`;
export function TopBar(props) {
  const {handleIconPress, handleTitlePress} = props;
  return (
    <FlexContainer style={{flex: 1}}>
      <Pressable
        onPress={handleTitlePress}
        style={({pressed}) => [
          {
            opacity: pressed ? 0.5 : 1,
          },
        ]}>
        <T>tracksApp</T>
      </Pressable>
      <FlexContainer style={{flexShrink: 1}} justifyContent="flex-end">
        <Icon name="search" size={35} onPress={handleIconPress} />
      </FlexContainer>
    </FlexContainer>
  );
}
