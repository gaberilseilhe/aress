import React from 'react';
import { Text, TextInput, StyleSheet, TextInputProps } from 'react-native';

type InputProps = {
  label: string ;
} & TextInputProps

export default function Input({ label, value, onChangeText, ...rest }: InputProps) {
  return (
    <>
      <Text style={styles.text}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        {...rest}
      />
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    borderWidth: 2,
    borderColor: 'gray',
    padding: 8,
    marginBottom: 10,
    borderRadius: 5,
    width: 300,
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    color: 'white',
  },
});
