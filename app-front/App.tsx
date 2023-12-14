import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ForgotPassword from "./src/pages/forgotPassword/ForgotPassword";
import Home from "./src/pages/home/Home";
import Login from "./src/pages/login/Login";
import CreateAccount from "./src/pages/createAccount/CreateAccount";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import ShoppingCart from "./src/pages/shoppingCart/ShoppingCart";
import Chat from "./src/pages/chat/Chat";
import { View } from 'react-native';
import { navigationStyles } from './NavigationStyles';


const App = () => {
  const Stack = createNativeStackNavigator();
  const [shoppingCart, setShoppingCart] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: navigationStyles.headerStyle,
          headerTitleStyle: navigationStyles.headerTitleStyle,
          headerTintColor: navigationStyles.headerTintColor,
          headerTitleAlign: navigationStyles.headerTitleAlign,
        }}
      >
        <Stack.Screen
          name="Home"
          options={({ navigation }) => ({
            title: 'Supermercado',
            headerShown: true,
            headerLeft: () => (
              <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                <Icon
                  onPress={() => navigation.navigate('ShoppingCart', { shoppingCart })}
                  name="shoppingcart"
                  size={25}
                  color={'#fff'}
                />
                <Icon
                  onPress={() => navigation.navigate('Chat')}
                  style={{ marginLeft: 10 }}
                  name="wechat"
                  size={25}
                  color={'#fff'}
                />
              </View>
            ),
            headerRight: () => (
              <Icon
                onPress={() => navigation.navigate('Login')}
                style={{ marginRight: 10 }}
                name="logout"
                size={25}
                color={'#fff'}
              />
            ),
          })}
        >
  {(props) => (
    
    <Home
      {...props}
      shoppingCart={shoppingCart}
      setShoppingCart={setShoppingCart}
    />
  )}
</Stack.Screen>
        <Stack.Screen
  options={({ navigation }) => ({
    title: "Chat",
    headerShown: true,
    headerTitleAlign: "center",
    headerLeft: () => (
      <Icon
  onPress={() => navigation.navigate("Chat")} // Navigate to the chat screen
  style={{ marginLeft: 10 }}
  name="WechatOutlined" // Use the "wechat" icon from AntDesign
  size={25}
  color={"#000"}
/>
    ),
  })}
  name="Chat"
  component={Chat} // Substitua "Chat" pelo nome correto do componente de chat
/>
        <Stack.Screen
          options={({ navigation }) => ({
            headerShown: false,
          })}
          name="Login"
          component={Login}
        />

        <Stack.Screen
          options={({ navigation }) => ({
            
          })}
          name="CreateAccount"
          component={CreateAccount}
        />

        <Stack.Screen
          options={({ navigation }) => ({
            
          })}
          name="ForgotPassword"
          component={ForgotPassword}
        />

        <Stack.Screen
          options={({ navigation }) => ({
            title: "Carrinho",
            headerShown: true,
            headerTitleAlign: "center",
            headerLeft: () => (
              <Icon
                onPress={() => navigation.goBack()}
                style={{ marginLeft: 10 }}
                name="arrowleft"
                size={25}
                color={"#000"}
              />
            ),
          })}
          name="ShoppingCart"
        >
          {(props) => (
            <ShoppingCart
              {...props}
              shoppingCart={shoppingCart}
              setShoppingCart={setShoppingCart}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;