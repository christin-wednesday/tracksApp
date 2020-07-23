import React from 'react';
import {Text, StyleSheet} from 'react-native';

export function T(props) {
  const {
    color,
    children,
    fontSize,
    paddingLeft,
    paddingRight,
    paddingHorizontal,
    customStyles,
  } = props;
  const style = StyleSheet.create({
    text: {
      color,
      fontSize,
      paddingLeft,
      paddingRight,
      paddingHorizontal,
      ...customStyles,
    },
  });
  return <Text style={style.text}>{children}</Text>;
}
