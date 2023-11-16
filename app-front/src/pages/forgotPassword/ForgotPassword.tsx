import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const ForgotPassword = () => {
  const [email, setEmail] = React.useState('');

  const handleResetPassword = () => {
   
    
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Esqueceu sua senha?</Text>
      <Text>Insira seu e-mail para redefinir sua senha:</Text>
      <TextInput
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, margin: 10, paddingHorizontal: 5 }}
        onChangeText={setEmail}
        value={email}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Button
        title="Redefinir Senha"
        onPress={handleResetPassword}
      />
    </View>
  );
};

export default ForgotPassword;
