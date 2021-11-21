import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button, FAB } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Product, Products } from "./ProductObject";
import Item from "./Item";

const HomeScreen: React.FC = (props: any) => {
  const [value, setValue] = useState("");
  const [product, setProduct] = useState<Product[] | null>(null);

  const getProductValue = async () => {
    try {
      await AsyncStorage.getItem("product").then((result) => {
        if (result != null) {
          let jsonObject: Product = JSON.parse(result!);
          setProduct([jsonObject]);
          alert("product: " + product);
          alert("Name: " + jsonObject.name + "  Price: " + jsonObject.price);
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
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <View>
        <Text>Name Type Price</Text>

        <FlatList
          data={product}
          renderItem={({ item }) => (
            <Item
              id={item.id}
              name={item.name}
              price={item.price}
              productType={item.productType}
            />
          )}
        />

        <FAB
          style={styles.fab}
          small
          icon="plus"
          onPress={() => props.navigation.navigate("Details", { id: 3 })}
        />
      </View>
      <Button onPress={() => getProductValue()}>Hey</Button>
      <Text>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ebebeb",
  },
  text: {
    color: "#101010",
    fontSize: 24,
    fontWeight: "bold",
  },
  fab: {
    position: "relative",
    margin: 16,
    right: 1,
    bottom: 1,
  },
});

export default HomeScreen;

function key(val: any, key: any) {
  throw new Error("Function not implemented.");
}
/*

<TouchableOpacity
        onPress={() => props.navigation.navigate("Details", { id: 3 })}
      ></TouchableOpacity>

console.log("Pressed")*/
