// HomeStyles.tsx
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardTextContainer: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardInfoContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3498db',
  },
  cardQuantity: {
    fontSize: 16,
    color: '#555',
  },
  buyButton: {
    marginTop: 10,
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});
