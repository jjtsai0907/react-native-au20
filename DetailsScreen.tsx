import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Button,
} from "react-native";

function DetailsScreen() {
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Details Screen</Text>
      <TextInput style={styles.itemName} placeholder="Name" />
      <TextInput
        style={styles.itemName}
        placeholder="Price"
        keyboardType="numeric"
      />
      <TextInput style={styles.itemName} placeholder="Product Type" />
      <Button
        onPress={() => console.log("Pressed")}
        title="SAVE"
        color="#841584"
        disabled={true}
        accessibilityLabel="Learn more about this purple button"
      />

      <Button
        onPress={() => console.log("Pressed")}
        title="CANCEL"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

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
