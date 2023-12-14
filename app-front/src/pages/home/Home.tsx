import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View, Button, ToastAndroid, Platform, TouchableOpacity, Image } from 'react-native';
import { Card } from 'react-native-elements';
import { styles } from './HomeStyles'; // Importando os estilos

const Home = ({ shoppingCart, setShoppingCart, navigation }: any) => {
  const [products, setProducts] = useState([
    {
      name: 'Leite Condensado',
      price: 5.99,
      quantity: 10,
      image: 'https://http2.mlstatic.com/D_NQ_NP_880141-MLB45468275639_042021-O.webp',
    },
    {
      name: 'Ovo',
      price: 2.99,
      quantity: 20,
      image: 'https://cdn.sistemawbuy.com.br/arquivos/aa0543e6e28970c84ad7321d40710790/produtos/6414a3384c039/ovos-vermelhos-cartela-641a4c181ec97.jpg',
    },
    {
      name: 'Carne',
      price: 12.5,
      quantity: 5,
      image: 'https://www.frigobeef.com.br/app/fotos/28f42401d64534599412efef2f9ad8e5.jpg',
    },
    {
      name: 'Frango',
      price: 8.0,
      quantity: 15,
      image: 'https://static.vecteezy.com/ti/fotos-gratis/p2/10324526-peito-de-frango-cru-em-um-pacote-na-mesa-foto.jpg',
    },
  ]);

  const openToast = (message: string) => {
    if (Platform.OS === 'android' && ToastAndroid) {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    } else {
      console.log(message);
    }
  };

  return (
    <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
      <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold', marginBottom: 0 }}>Ofertas</Text>
      <ScrollView>
        {products.map((product, i) => (
          <TouchableOpacity
            key={i}
            style={styles.cardContainer}
            onPress={() => {
              openToast('Item Adicionado');
              const updatedCart = [...shoppingCart, { ...product, quantity: 1 }];
              setShoppingCart(updatedCart);
              navigation.navigate('ShoppingCart', {
                shoppingCart: updatedCart,
                setShoppingCart: setShoppingCart,
              });
            }}
          >
            <Image style={styles.cardImage} source={{ uri: product.image }} />
            <View style={styles.cardTextContainer}>
              <View style={styles.cardInfoContainer}>
                <Text style={styles.cardTitle}>{product.name}</Text>
                <Text style={styles.cardPrice}>{`Preço: R$ ${product.price}`}</Text>
                <Text style={styles.cardQuantity}>{`Quantidade: ${product.quantity}`}</Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  openToast('Item Adicionado');
                  const updatedCart = [...shoppingCart, { ...product, quantity: 1 }];
                  setShoppingCart(updatedCart);
                  navigation.navigate('ShoppingCart', {
                    shoppingCart: updatedCart,
                    setShoppingCart: setShoppingCart,
                  });
                }}
                style={styles.buyButton}
              >
                <Text style={styles.buttonText}>Comprar</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;