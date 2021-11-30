import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Feather, Foundation } from "@expo/vector-icons";

/*const IconButton = ({ title, onPress, icon }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text>{title}</Text>
    {icon}
  </TouchableOpacity>
);*/

const DetailsScreen: React.FC = (props: any) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [productType, setProductType] = useState("");
  const [productList, setProductList] = useState([]);

  const saveProductValue = async () => {
    try {
      await AsyncStorage.setItem(
        "product",
        JSON.stringify([
          { name: name, price: price, productType: productType },
          { name: "name", price: "price", productType: "productType" },
        ])
      );
      alert("Data saved!");
    } catch (error) {
      console.log("Saving data error");
      alert("Saving data error!");
    }
    props.navigation.navigate("Home", { id: 1 });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create New Product</Text>
      <TextInput
        style={styles.itemName}
        placeholder="Name"
        onChangeText={setName}
      />

      <TextInput
        style={styles.itemName}
        onChangeText={setPrice}
        placeholder="Price"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.itemName}
        placeholder="Product Type"
        onChangeText={setProductType}
      />

      <Button
        icon={<Feather name="download" size={24} color="black" />}
        title="SAVE"
        disabled={name != "" && price != "" && productType != "" ? false : true}
        onPress={() => saveProductValue()}
      />

      <Button
        icon={<Foundation name="prohibited" size={24} color="black" />}
        title="CANCEL"
        onPress={() => props.navigation.navigate("Home", { id: 1 })}
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
    backgroundColor: "white",
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
      </Pressable> 
      
      
      
      
      <Button
        onPress={() => saveProductValue()}
        title={"SAVE"}
        color="#841584"
        disabled={name != "" && price != "" && productType != "" ? false : true}
        accessibilityLabel="Learn more about this purple button"
      />
      
      <Button
        //<Feather name="download" size={24} color="black" />
        onPress={() => props.navigation.navigate("Home", { id: 1 })}
        title="CANCEL"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
     
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Home", { id: 1 })}
      >
        <Text>{"CANCEL"}</Text>
        {<Feather name="download" size={24} color="black" />}
      </TouchableOpacity>*/
