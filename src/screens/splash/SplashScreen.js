import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SplashScreen = () => {
  const { navigate } = useNavigation();
  const [text, setText] = useState('');
  const fullText = 'OhWork!';
  const delay = 100; // Độ trễ giữa các ký tự

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex += 1;
      } else {
        clearInterval(intervalId);
        // Sau khi hiệu ứng hoàn tất, bạn có thể chuyển hướng đến màn hình khác
        navigate('Home');
      }
    }, delay);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <View style={styles.container}>
      <View />
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.subtext}>OhPlatform 0.0.1</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6C63FF',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
  },
  text: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtext: {
    fontWeight: 'bold',
    color: '#fff',
  },
});
