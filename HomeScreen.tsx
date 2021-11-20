import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FAB } from "react-native-paper";

const HomeScreen: React.FC = (props: any) => {
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
