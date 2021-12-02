import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Picker } from "react-native";
import { Button } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Product } from "../models/ProductObject";
import { Feather, Foundation } from "@expo/vector-icons";

const EditProductScreen: React.FC = (props: any) => {
  const [selectedProduct, setSelectedProduct] = useState<Product>();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [productType, setProductType] = useState("Peripheral");

  useEffect(() => {
    (() => {
      getSelectedItem();
    })();
  });

  const getSelectedItem = async () => {
    try {
      await AsyncStorage.getItem("selectedItem").then((result) => {
        if (result != null) {
          let jsonObject: Product = JSON.parse(result!);
          setSelectedProduct(jsonObject);
        } else {
          alert("No Data");
        }
      });
    } catch (error) {
      console.log("Reading data error");
      alert("E Reading data error!" + error);
    }
  };
  /*
<View>
      <Text>{selectedProduct?.name}</Text>
    </View>
*/
  return (
    <View style={styles.container}>
      <Text>Create New Product</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Name"
        onChangeText={setName}
      />

      <TextInput
        style={styles.textInput}
        onChangeText={setPrice}
        placeholder="Price"
        keyboardType="numeric"
      />

      <Picker
        style={styles.productPicker}
        selectedValue={productType}
        onValueChange={(itemValue, itemIndex) => setProductType(itemValue)}
      >
        <Picker.Item label="Peripheral" value="Peripheral" />
        <Picker.Item label="Integrated" value="Integrated" />
      </Picker>
      <View style={styles.buttonContainer}>
        <Button
          icon={<Feather name="download" size={24} color="black" />}
          title="SAVE"
          disabled={
            name != "" && price != "" && productType != "" ? false : true
          }
        />

        <Button
          icon={<Foundation name="prohibited" size={24} color="black" />}
          title="CANCEL"
          onPress={() => props.navigation.navigate("Home", { id: 1 })}
        />
      </View>
    </View>
  );
};

export default EditProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  textInput: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 40,
    marginTop: 20,
    paddingStart: 10,
    paddingVertical: 15,
  },
  productPicker: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 40,
    marginVertical: 20,
    paddingStart: 10,
    paddingVertical: 15,
  },
  buttonContainer: {
    width: "80%",
    marginHorizontal: 40,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  errorMessage: {
    marginHorizontal: 40,
    marginTop: 5,
  },
  errorMessageLabel: {
    color: "red",
  },
  removeButton: {
    backgroundColor: "red",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    flexDirection: "row",
    width: "40%",
    alignSelf: "center",
    textAlign: "center",
    marginTop: 40,
  },
});