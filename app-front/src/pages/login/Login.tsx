import React, { useState } from 'react';
import { Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import Logo from 'react-native-vector-icons/AntDesign';
import Styles from './LoginStyle';

const API_BASE_URL = 'http://localhost:8000/api'; // Substitua pelo seu endereço real

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
        body: JSON.stringify({ name:username, password }),
      });

      if (!response.ok) {
        // Se a resposta não for bem-sucedida, exiba uma mensagem de erro
        console.error('Login failed');
        return;
      }

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
      <View style={Styles.logo}>
        <Logo name="isv" size={100} color={'#2089DC'} />
        <Text style={Styles.text}>Supermercado</Text>
      </View>

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
        {/* Botão para criar conta */}
        <TouchableOpacity onPress={() => goToPage('CreateAccount')}>
          <Text style={Styles.link}>Create Account</Text>
        </TouchableOpacity>

        {/* Botão para recuperar senha */}
        <TouchableOpacity onPress={() => goToPage('ForgotPassword')}>
          <Text style={Styles.link}>Forgot Password</Text>
        </TouchableOpacity>
      </View>

      {/* Botão para fazer login */}
      <Button onPress={handleLogin} title="Login" />
    </View>
  );
};

export default Login;
