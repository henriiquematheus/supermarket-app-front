import React, { useState } from 'react';
import { Text, View, TextInput, Button, TouchableOpacity, Alert } from 'react-native'; // Importe o Alert do React Native
import styles from './CreateAccountStyle'; // Importe os estilos

const API_BASE_URL = 'http://localhost:8000/api'; // Substitua pelo seu endereço real

const CreateAccount = ({ navigation }: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleCreateAccount = async () => {
    if (password !== confirmPassword) {
      // Senhas não correspondem - fornecer feedback ao usuário
      Alert.alert("Erro", "As senhas não correspondem.");
      return;
    }
  
    try {
      const response = await fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: username, password }),
      });

      if (!response.ok) {
        // Problema ao criar o usuário - tratar diferentes casos de erro
        const errorData = await response.json();
        Alert.alert("Erro", `Erro ao criar usuário: ${errorData.error}`);
        return;
      }

      const userData = await response.json();
      Alert.alert("Sucesso", "Usuário criado com sucesso!");
      console.log("Usuário criado com sucesso:", userData);
      navigation.navigate('Login'); // Redirecionar para a tela de login após criar a conta
    } catch (error) {
      console.error("Erro durante a criação do usuário:", error);
      Alert.alert("Erro", "Erro durante a criação do usuário. Por favor, tente novamente.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>
      
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your username"
        onChangeText={text => setUsername(text)}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Enter your password"
        onChangeText={text => setPassword(text)}
      />

      <Text style={styles.label}>Confirm Password</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Confirm your password"
        onChangeText={text => setConfirmPassword(text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
        <Text style={styles.buttonText}>Criar Conta</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateAccount;