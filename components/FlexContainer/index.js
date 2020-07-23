import React from 'react';
import {View, StyleSheet} from 'react-native';

export function FlexContainer(props) {
  const {
    children,
    flexDirection,
    alignItems,
    justifyContent,
    backgroundColor,
    height,
    paddingHorizontal,
    display,
    flex,
    customStyles,
    ...otherProps
  } = props;
  const styles = StyleSheet.create({
    container: {
      flexDirection: flexDirection,
      alignItems,
      justifyContent,
      backgroundColor,
      height,
      paddingHorizontal,
      display,
      flex: 1,
      ...customStyles,
    },
  });
  return (
    <View {...otherProps} style={styles.container}>
      {children}
    </View>
  );
}

FlexContainer.defaultProps = {
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#F0F0F0F0',
  height: 60,
  paddingHorizontal: 15,
};
