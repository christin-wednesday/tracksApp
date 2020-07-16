import React from 'react';
import styled from 'styled-components/native';

const StyledText = styled.Text`
    ${props => `
        color: ${props.color};
        fontSize: ${props.fontSize};
        paddingLeft: ${props.paddingLeft};
        paddingRight: ${props.paddingRight};
        paddingHorizontal: ${props.paddingHorizontal};
    `}
`;

export function T(props) {
    const { 
        color, 
        children, 
        fontSize, 
        paddingLeft, 
        paddingRight, 
        paddingHorizontal } = props;
    return(
        <StyledText 
            color={color}
            fontSize={fontSize}
            paddingLeft={paddingLeft}
            paddingRight={paddingRight}
            paddingHorizontal={paddingHorizontal}
        >
            {children}
        </StyledText>
    )
};