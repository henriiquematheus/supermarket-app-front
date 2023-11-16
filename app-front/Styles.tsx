import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  logo: {
    alignItems: 'center',
    marginBottom: 30,
  },

  text: {
    fontSize: 24,
    color: '#2089DC',
    fontWeight: 'bold',
  },

  label: {
    color: '#333',
    marginBottom: 5,
    alignSelf: 'flex-start',
  },

  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },

  createAccountForgot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },

  link: {
    color: '#2089DC',
    textDecorationLine: 'underline',
  },
});

export default Styles;
