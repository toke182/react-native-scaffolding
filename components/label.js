import React from 'react';
import { Text } from 'react-native';

const Label = ({ children, style, color, ...props }) => {
  return (
    <Text
      style={[
        {
          backgroundColor: 'transparent',
          fontSize: 14,
          color: color || 'black',
          fontFamily: 'Avenir-Medium'
        },
        style
      ]}
      {...props}>
      {children}
    </Text>
  )
};

export default Label;
