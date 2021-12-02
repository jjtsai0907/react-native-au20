import React, { useContext, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView,
  Pressable,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button, FAB } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Product, Products } from "../models/ProductObject";
import Item from "../models/Item";
import { useFocusEffect } from "@react-navigation/native";
import { ProductContext } from "../contexts/ProductContext";

const HomeScreen: React.FC = (props: any) => {
  const [value, setValue] = useState("");
  const [products, setProduct] = useState<Product[] | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product>();

  const context = useContext(ProductContext);

  /*useFocusEffect(() => {
    (() => {
      getProductValue();
    })();
  });*/

  const getProductValue = async () => {
    try {
      await AsyncStorage.getItem("product").then((result) => {
        if (result != null) {
          let jsonObject: [Product] = JSON.parse(result!);
          setProduct(jsonObject);
        } else {
          alert("No Data");
        }
      });
    } catch (error) {
      console.log("Reading data error");
      alert("Reading data error!");
    }
  };

  const saveSelectedItem = async () => {
    try {
      await AsyncStorage.setItem(
        "selectedItem",
        JSON.stringify(selectedProduct)
      );
      alert("Data saved!");
    } catch (error) {
      console.log("Saving data error");
      alert("Saving data error!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.centerHeaderItem}>Items</Text>

      <View>
        <ScrollView>
          <FlatList
            data={context.products}
            renderItem={({ item }) => (
              <Pressable
                style={styles.listItemContainer}
                onPress={() => {
                  //setSelectedProduct(item);
                  //saveSelectedItem();
                  context.setProduct(item);
                  props.navigation.navigate("EditProduct", { id: 4 });
                }}
              >
                <Text style={styles.leftItem}>{item.productName}</Text>
                <Text style={styles.centerItem}>{item.productType}</Text>
                <Text style={styles.rightItem}>{item.productPrice}</Text>
              </Pressable>
            )}
          />
        </ScrollView>
        <FAB
          style={styles.fab}
          small
          icon="plus"
          onPress={() => props.navigation.navigate("Details", { id: 3 })}
        />
      </View>

      <Text>{value}</Text>
    </View>
  );
};

export default HomeScreen;

function key(val: any, key: any) {
  throw new Error("Function not implemented.");
}

function useFocuseEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
/*

<TouchableOpacity
        onPress={() => props.navigation.navigate("Details", { id: 3 })}
      ></TouchableOpacity>

console.log("Pressed")


<Item
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    productType={item.productType}
                  />

*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  fab: {
    position: "absolute",
    backgroundColor: "green",
    margin: 16,
    right: 0,
    bottom: 0,
  },
  listItemContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "lightgray",
    margin: 3,
    padding: 10,
    borderRadius: 5,
    justifyContent: "space-between",
  },
  leftItem: {
    textAlign: "left",
    padding: 10,
  },
  centerItem: {
    textAlign: "center",
    padding: 10,
  },
  rightItem: {
    textAlign: "right",
    padding: 10,
  },
  centerHeaderItem: {
    fontWeight: "bold",
  },
});
