import {NormalButton, SocialButton} from '@base-components/Button';
import {OrCtn} from '@base-components/Component';
import {NormalInput} from '@base-components/TextInput';
import IMAGE from '@constants/image';
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {StyleSheet, Text, View} from 'react-native';

const RegisterScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      fullname: '',
      email: '',
      phone: '',
      password: '',
    },
  });

  const {navigate} = useNavigation();

  const onSubmit = data => {
    console.log(data);
    navigate('Home');
  };

  const handleLogin = () => {
    navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.text}>Create your</Text>
        <Text style={styles.text}>Account</Text>
      </View>
      <View style={{paddingTop: 50}}>
        <Controller
          control={control}
          rules={{
            required: 'Enter your email',
            maxLength: 20,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <NormalInput
              placeholder="Email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              image={IMAGE.mail}
            />
          )}
          name="email"
        />
        <Text style={styles.error}>{errors.email?.message}</Text>
        <Controller
          control={control}
          rules={{
            required: 'Enter your password',
            minLength: {
              value: 8,
              message: 'Password must be more than 8 characters',
            },
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <NormalInput
              placeholder="Password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              image={IMAGE.lock}
            />
          )}
          name="password"
        />
        <Text style={styles.error}>{errors.password?.message}</Text>
      </View>
      <NormalButton title="Sign Up" onPress={handleSubmit(onSubmit)} />
      <View style={{alignItems: 'center'}}>
        <OrCtn />
        <SocialButton />
        <Text>
          Already have an account?{' '}
          <Text style={styles.btnRegister} onPress={handleLogin}>
            Sign in now
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#FFF',
  },
  title: {
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000',
  },
  error: {
    alignSelf: 'flex-start',
    color: 'red',
  },
  btnRegister: {
    color: '#805AD1',
    fontWeight: 'bold',
  },
});
