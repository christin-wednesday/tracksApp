import React, { useState } from 'react';
import { Input, Icon } from 'react-native-elements';
import styled from 'styled-components/native';
import { FlexContainer } from '../FlexContainer';

const Bar = styled(Input)`
    flex: 1;
    height: 60;
    font-size: 20
    borderColor: black;
    borderWidth: 1
`;
export function SearchBar(props) {
    const { handleIconPress, handleChangeInput, searchKey } = props;
    return (
        <FlexContainer paddingHorizontal={0}>
            <Bar value={searchKey}
                onChange={({nativeEvent})=> handleChangeInput(nativeEvent)}
                clearButtonMode="while-editing" 
                onSubmitEditing={handleIconPress} 
                placeholder="Search for an artist"
                returnKeyType="search"
                leftIcon={
                    <Icon
                      name='search'
                      size={24}
                      color='black'
                      onPress={handleIconPress}
                    />
                  }

                />
        </FlexContainer>
    )
}