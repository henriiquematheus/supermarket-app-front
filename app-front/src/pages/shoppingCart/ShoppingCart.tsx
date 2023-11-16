import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from 'react-native';

const ShoppingCartScreen = ({ route }: any) => {
  const { shoppingCart: initialCart, setShoppingCart } = route.params;
  const [cart, setCart] = useState(initialCart);

  const removeFromCart = (index: number) => {
    const updatedCart = cart.filter((_, i: number) => i !== index);
    setCart(updatedCart);
    setShoppingCart(updatedCart);
  };

  const incrementQuantity = (index: number) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
    setShoppingCart(updatedCart);
  };

  const decrementQuantity = (index: number) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCart(updatedCart);
      setShoppingCart(updatedCart);
    }
  };

  return (
    <View style={styles.container}>
      {cart.map((prod: any, i: number) => (
        <View key={i} style={styles.productContainer}>
          <Text style={styles.productName}>{prod.name}</Text>
          <Text style={styles.productPrice}>{prod.price}</Text>
          <Text style={styles.productQuantity}>Quantidade: {prod.quantity}</Text>
          <View style={styles.buttonContainer}>
            <View style={styles.quantityButtons}>
              <Button
                title="-"
                onPress={() => decrementQuantity(i)}
              />
              <Button
                title="+"
                onPress={() => incrementQuantity(i)}
              />
            </View>
            <Button
              title="Remover"
              onPress={() => removeFromCart(i)}
              style={styles.removeButton}
            />
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  productContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    marginBottom: 5,
  },
  productQuantity: {
    fontSize: 16,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantityButtons: {
    flexDirection: 'row',
  },
  removeButton: {
    alignSelf: 'flex-end',
  },
});

export default ShoppingCartScreen;
