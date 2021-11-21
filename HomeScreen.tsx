import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button, FAB } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen: React.FC = (props: any) => {
  const [value, setValue] = useState("");

  const getProductValue = async () => {
    try {
      await AsyncStorage.getItem("product").then((result) => {
        if (result != null) {
          let jsonObject = JSON.parse(result!);
          alert(jsonObject.price);
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

/*

<TouchableOpacity
        onPress={() => props.navigation.navigate("Details", { id: 3 })}
      ></TouchableOpacity>

console.log("Pressed")*/
