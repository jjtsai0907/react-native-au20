import { StatusBar } from "expo-status-bar";
import React, { useState, createContext, useContext, useEffect } from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import { Product } from "./models/ProductObject";
import EditProductScreen from "./screens/EditProductScreen";
import { ProductContextProvider } from "./contexts/ProductContext";
import { setI18nConfig, Translate } from "./translations/Translation";
import { tokens } from "./translations/appStructure";

const AppContext = createContext<[Product] | null>(null);

export default function App() {
  const Stack = createNativeStackNavigator();
  const [appProduct, setAppProduct] = useState<[Product] | null>(null);

  setI18nConfig();
  return (
    <ProductContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name={Translate(tokens.screens.mainNavigator.TitleProductList)}
            component={HomeScreen}
          />
          <Stack.Screen
            name={Translate(tokens.screens.mainNavigator.TitleNewProduct)}
            component={DetailsScreen}
          />
          <Stack.Screen
            name={Translate(tokens.screens.mainNavigator.TitleEditProduct)}
            component={EditProductScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ProductContextProvider>
  );
}

const styles = StyleSheet.create({});
