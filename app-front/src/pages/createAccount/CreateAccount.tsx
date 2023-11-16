import React from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';

const CreateAccount = ({ navigation }: any) => {
  const goToPage = (path: string) => {
    navigation.navigate(path);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>
      
      <Text style={styles.label}>Username</Text>
      <TextInput style={styles.input} placeholder="Enter your username" />

      <Text style={styles.label}>Password</Text>
      <TextInput style={styles.input} secureTextEntry={true} placeholder="Enter your password" />

      <Text style={styles.label}>Confirm Password</Text>
      <TextInput style={styles.input} secureTextEntry={true} placeholder="Confirm your password" />

      <Button onPress={() => goToPage('Home')} title="Criar Conta" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});

export default CreateAccount;
