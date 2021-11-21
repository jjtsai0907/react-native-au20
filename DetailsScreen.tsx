import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Button,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DetailsScreen: React.FC = (props: any) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [productType, setProductType] = useState("");
  const [productList, setProductList] = useState([]);

  const saveProductValue = async () => {
    /*try {
      await AsyncStorage.getItem("product").then(async (result) => {
        if (result != null) {
          let jsonObject = JSON.parse(result!);
          setProductList(jsonObject);
          alert("result: " + result);
          alert("jsonObject: " + jsonObject);
          alert("productList: " + productList);

          await AsyncStorage.setItem(
            "product",
            JSON.stringify([
              ...productList,
              { name: name, price: price, productType: productType },
            ])
          );
          alert("productList: " + productList[0][0]);
          alert("Name: " + jsonObject.name + "  Price: " + jsonObject.price);
        } else {
          alert("No Data");
        }
      });
    } catch (error) {
      console.log("Reading data error");
      alert("Reading data error!");
    }*/

    try {
      await AsyncStorage.setItem(
        "product",
        JSON.stringify({ name: name, price: price, productType: productType })
      );
      alert("Data saved!");
    } catch (error) {
      console.log("Saving data error");
      alert("Saving data error!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Details Screen</Text>
      <TextInput
        style={styles.itemName}
        placeholder="Name"
        onChangeText={setName}
      />
      <Text>{name}</Text>
      <TextInput
        style={styles.itemName}
        onChangeText={setPrice}
        placeholder="Price"
        keyboardType="numeric"
      />
      <Text>{price}</Text>
      <TextInput
        style={styles.itemName}
        placeholder="Product Type"
        onChangeText={setProductType}
      />
      <Text>{productType}</Text>

      <Button
        onPress={() => saveProductValue()}
        title="SAVE"
        color="#841584"
        disabled={name != "" && price != "" && productType != "" ? false : true}
        accessibilityLabel="Learn more about this purple button"
      />

      <Button
        onPress={() => props.navigation.navigate("Home", { id: 1 })}
        title="CANCEL"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
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
  itemName: {
    backgroundColor: "red",
    fontSize: 25,
    borderColor: "black",
    borderWidth: 2,
    height: 50,
    borderRadius: 15,
  },
});

export default DetailsScreen;

function anync() {
  throw new Error("Function not implemented.");
}
/*<Pressable disabled={true}>
        {({ pressed }) => <Text>CANCEL</Text>}
      </Pressable> */
