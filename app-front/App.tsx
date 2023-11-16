import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ForgotPassword from "./src/pages/forgotPassword/ForgotPassword";
import Home from "./src/pages/home/Home";
import Login from "./src/pages/login/Login";
import CreateAccount from "./src/pages/createAccount/CreateAccount";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import ShoppingCart from "./src/pages/shoppingCart/ShoppingCart";

const App = () => {
  const Stack = createNativeStackNavigator();
  const [shoppingCart, setShoppingCart] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          options={({ navigation }) => ({
            title: "Ofertas",
            headerShown: true,
            headerTitleAlign: "center",
            headerLeft: () => (
              <Icon
                onPress={() =>
                  navigation.navigate("ShoppingCart", { shoppingCart })
                }
                style={{ marginLeft: 10 }}
                name="shoppingcart"
                size={25}
                color={"#000"}
              />
            ),
            headerRight: () => (
              <Icon
                onPress={() => navigation.navigate("Login")}
                style={{ marginRight: 10 }}
                name="logout"
                size={25}
                color={"#000"}
              />
            ),
          })}
          name="Home"
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
