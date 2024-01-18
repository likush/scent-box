import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';

type Props = TextInputProps;

const BaseInput = (props: Props) => {
  const {onChangeText, placeholder} = props;

  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      placeholder={placeholder}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

export default BaseInput;
