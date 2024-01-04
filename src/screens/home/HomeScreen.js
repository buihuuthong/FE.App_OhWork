import ImageLocal from '@base-components/ImageLocal';
import IMAGE from '@constants/image';
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HomeScreen = () => {
  const {navigate, goBack} = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Oh! Xin chào</Text>
      <ImageLocal image={IMAGE.welcome} />
      <Text style={styles.description}>
        Chào mừng bạn đến với Oh!, ứng dụng đa nền tảng giúp bạn kết nối với mọi
        người và làm mọi thứ. Chúng tôi đang trong quá trình phát triển, bạn là
        một trong số những người góp phần làm ứng dụng trở nên tuyệt vời hơn.
      </Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#6d63ff',
    fontSize: 36,
    paddingLeft: 60,
    alignSelf: 'flex-start',
  },
  description: {
    fontSize: 18,
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
  },
});
