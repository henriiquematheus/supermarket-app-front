import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  
  formContainer: {
    width: '85%', // Aumentei a largura para 85%
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: 'center', // Centraliza os elementos horizontalmente
  },

  label: {
    color: '#333',
    fontSize: 18,
    marginBottom: 10,
  },
  
  input: {
    width: '100%',
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
  },
  
  link: {
    color: '#007bff',
    fontSize: 16,
    marginBottom: 20,
  },
  
  createAccountForgot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  
  createAccountButton: {
    marginRight: 20,
  },
  
  forgotPasswordButton: {
    marginLeft: 20,
  },

  button: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 50,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  
  text: {
    fontSize: 40, // Aumentei o tamanho da fonte
    color: '#007bff', // Alterei a cor para um azul mais forte
    marginBottom: 30,
  },
});

export default Styles;
