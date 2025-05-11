import React from 'react';
import { Text, StyleSheet} from 'react-native';
import { Picker, PickerProps } from '@react-native-picker/picker';

type OpçõesProps = {
  label: string;
  onValueChange: (itemValue: string) => void;
  selectedValue: string;
  children: React.ReactNode;
};


export default function Opções({ label, selectedValue, onValueChange, children, ...rest }: OpçõesProps) {
    return (
      <>
        <Text style={styles.text}>{label}</Text>
        <Picker
          selectedValue={selectedValue}
          onValueChange={onValueChange}
          style={styles.input}
          {...rest}
        >
          {children}
        </Picker>
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
      fontSize:13,
    },
  });
  