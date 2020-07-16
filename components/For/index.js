import React from 'react';
import isEmpty from 'lodash/isEmpty';

export function For(props) {
    const {render, list, wrapper} = props;
    const WrapperComponent = wrapper();
    if (isEmpty(list)) {
        return <> </>
    } else {
        const children = list.map(item => render(item));
        if (WrapperComponent === null) {
            return (children)
        } else {
            <WrapperComponent>
                {children}
            </WrapperComponent>
        }
    }
}