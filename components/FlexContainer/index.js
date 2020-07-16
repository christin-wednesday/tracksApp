import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
    display: flex;
    flex: 1;
    justify-content: space-between;
    
     ${props => `
        flex-direction: ${props.flexDirection};
        align-items: ${props.alignItems};
        justify-content: ${props.justifyContent};
        background-color: ${props.backgroundColor};
        height: ${props.height};
        paddingHorizontal: ${props.paddingHorizontal};

    `}
`;

export function FlexContainer(props) {
    const {children, ...otherProps} = props;
    return (
        <Container {...otherProps}
            flexDirection={props.flexDirection}
            justifyContent={props.justifyContent}
            backgroundColor={props.backgroundColor}
            height={props.height}
        >
            {children}
        </Container>
    )
}

FlexContainer.defaultProps = {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F0F0F0F0',
    height: 60,
    paddingHorizontal: 15
}