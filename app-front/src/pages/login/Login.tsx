import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import Styles from './LoginStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_BASE_URL = 'http://192.168.0.24:8000/api'; // Substitua pelo seu endereço real

const Login = ({ navigation }: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: username, password }),
      });
  
      if (!response.ok) {
        console.error('Login failed');
        return;
      }

      const data = await response.json();
      const userToken = data.token;

      

      // Se o login for bem-sucedido, redirecione para a página Home
      navigation.navigate('Home');
  } catch (error) {
    console.error('Error during login:', error);
  }
};

  const goToPage = (path: string) => {
    navigation.navigate(path);
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.formContainer}>
        <Text style={Styles.text}>Supermercado</Text>
        <Text style={Styles.label}>Login</Text>
        <TextInput
          style={Styles.input}
          placeholder="User"
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          secureTextEntry={true}
          style={Styles.input}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
        />
        
        <View style={Styles.createAccountForgot}>
          <TouchableOpacity onPress={() => goToPage('CreateAccount')} style={Styles.createAccountButton}>
            <Text style={Styles.link}>Create Account</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => goToPage('ForgotPassword')} style={Styles.forgotPasswordButton}>
            <Text style={Styles.link}>Forgot Password</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handleLogin} style={Styles.button}>
          <Text style={Styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
