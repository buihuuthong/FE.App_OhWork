import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import ImageLocal from './ImageLocal';

export const NormalInput = ({
  placeholder,
  onBlur,
  onChangeText,
  value,
  image,
}) => {
  return (
    <View style={styles.inputContainer}>
      <ImageLocal image={image} style={styles.image} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={'#292D32'}
        onBlur={onBlur}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#D9D9D9',
    width: '100%',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  input: {
    width: '90%',
    color: '#292D32',
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
