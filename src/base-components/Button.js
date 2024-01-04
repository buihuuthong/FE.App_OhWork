import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import ImageLocal from './ImageLocal';
import IMAGE from '@constants/image';

export const NormalButton = ({onPress, title}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.btn}>{title}</Text>
    </TouchableOpacity>
  );
};

export const SocialButton = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        width: '50%',
        paddingVertical: 24,
      }}>
      <TouchableOpacity>
        <ImageLocal image={IMAGE.facebook} />
      </TouchableOpacity>
      <TouchableOpacity>
        <ImageLocal image={IMAGE.google} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 20,
    backgroundColor: '#805AD1',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    color: '#fff',
  },
});
