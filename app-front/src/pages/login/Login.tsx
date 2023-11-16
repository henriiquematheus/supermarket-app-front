import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import Logo from 'react-native-vector-icons/AntDesign';
import Styles from './LoginStyle';

const Login = ({ navigation }: any) => {
  const goToPage = (path: string) => {
    navigation.navigate(path);
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.logo}>
        <Logo name="isv" size={100} color={'#2089DC'} />
        <Text style={Styles.text}>Supermercado</Text>
      </View>

      <Text style={Styles.label}>Login</Text>
      <TextInput style={Styles.input} placeholder="User" />
      <Text style={Styles.label}>Password</Text>
      <TextInput
        secureTextEntry={true}
        style={Styles.input}
        placeholder="Password"
      />
      <View style={Styles.createAccountForgot}>
        <Text onPress={() => goToPage('CreateAccount')} style={Styles.link}>
          Create Account
        </Text>
        <Text onPress={() => goToPage('ForgotPassword')} style={Styles.link}>
          Forgot Password
        </Text>
      </View>
      <Button onPress={() => goToPage('Home')} title="Login" />
    </View>
  );
};

export default Login;
