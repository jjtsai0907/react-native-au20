import { StatusBar } from "expo-status-bar";
import React, { useState, createContext, useContext, useEffect } from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import DetailsScreen from "./DetailsScreen";
import { Product } from "./ProductObject";

const AppContext = createContext<[Product] | null>(null);

export default function App() {
  const Stack = createNativeStackNavigator();
  const [appProduct, setAppProduct] = useState<[Product] | null>(null);

  useEffect(() => {
    (() => {
      getProductValue();
    })();
  }, []);

  const getProductValue = async () => {
    try {
      await AsyncStorage.getItem("product").then((result) => {
        if (result != null) {
          let jsonObject: Product = JSON.parse(result!);
          setAppProduct([jsonObject]);
        } else {
          alert("No Data");
        }
      });
    } catch (error) {
      console.log("Reading data error");
      alert("Reading data error!");
    }
  };

  return (
    <AppContext.Provider value={appProduct}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({});
