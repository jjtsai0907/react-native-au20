import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Button,
} from "react-native";

const DetailsScreen: React.FC = (props: any) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [productType, setProductType] = useState("");

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
        onPress={() => console.log("Pressed")}
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

/*<Pressable disabled={true}>
        {({ pressed }) => <Text>CANCEL</Text>}
      </Pressable> */
