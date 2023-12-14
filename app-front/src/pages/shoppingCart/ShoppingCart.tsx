import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_BASE_URL = 'http://192.168.0.24:8000/api';

const ShoppingCartScreen = ({ route, navigation }: any) => {
  console.log("erro initial cart", initialCart)
  const { shoppingCart: initialCart } = route.params;
  const setShoppingCart = route.params.setShoppingCart;

  const [cart, setCart] = useState(
    initialCart.map((product) => ({ ...product, id: product._id || product.id }))
  );
  
  const getProductIdByName = async (productName) => {
    try {
      console.log('Product name:', productName);
      const response = await fetch(`${API_BASE_URL}/products?name=${productName}`);
      if (!response.ok) {
        throw new Error('Erro ao buscar o ID do produto');
      }
      const productData = await response.json();
      console.log('Product data:', productData);
  
      // Find the product with the matching name
      const product = productData.products.find((product) => product.name === productName);
      if (!product) {
        throw new Error('Produto não encontrado');
      }
  
      return product._id;
    } catch (error) {
      throw new Error('Erro ao buscar o ID do produto');
    }
  };

  const removeFromCart = (index: number) => {
    const updatedCart = cart.filter((_, i: number) => i !== index);
    setCart(updatedCart);
    navigation.setOptions({ params: { shoppingCart: updatedCart } });
    setShoppingCart(updatedCart);
  };
  
  const incrementQuantity = (index: number) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
    navigation.setOptions({ params: { shoppingCart: updatedCart } });
  };
  
  const decrementQuantity = (index: number) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCart(updatedCart);
      navigation.setOptions({ params: { shoppingCart: updatedCart } });
    }
  };

  const handleBuy = async () => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
    
      // Ensure that cart is defined and is an array
      if (!Array.isArray(cart)) {
        throw new Error('Carrinho não definido ou não é um array');
      }
    
      for (const product of cart) {
        const productId = await getProductIdByName(product.name);
        console.log('Product ID for PUT:', productId);
      
        // Get the current quantity of the product from the backend
        const responseGet = await fetch(`${API_BASE_URL}/products/quantity/${productId}`);
if (!responseGet.ok) {
  throw new Error('Erro ao buscar a quantidade do produto');
}
const productData = await responseGet.json(); // Parse the response to productData

// Ensure that productData is defined and is an object
if (typeof productData !== 'object' || productData === null) {
  throw new Error('Dados do produto não definidos ou não são um objeto');
}

// Ensure that productData has a quantity property
if (!('quantity' in productData)) {
  throw new Error('Dados do produto não têm uma propriedade de quantidade');
}

const currentQuantity = productData.quantity;
  
        // Subtract the purchased quantity from the current quantity
        const newQuantity = currentQuantity - product.quantity;
  
        // Update the quantity of the product in the backend
        const responsePut = await fetch(`${API_BASE_URL}/products/${productId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userToken}`
          },
          body: JSON.stringify({ quantity: newQuantity }),
        });
  
        if (!responsePut.ok) {
          const errorResponse = await responsePut.json();
          throw new Error(errorResponse.error || 'Erro desconhecido ao realizar a compra');
        }
      }
  
      console.log("Compra realizada com sucesso!");
      Alert.alert("Compra realizada com sucesso!");
      setCart([]);
      navigation.setOptions({ params: { shoppingCart: [] } });
      setShoppingCart([]);
  
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error during purchase:', error);
      if (error instanceof Error && error.message) {
        Alert.alert(`Erro ao realizar a compra: ${error.message}`);
      } else {
        Alert.alert('Erro ao realizar a compra. Tente novamente mais tarde.');
      }
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
      {/* Botão de comprar fora do loop de mapeamento do carrinho */}
      <Button title="Comprar" onPress={handleBuy} disabled={cart.length === 0} />
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