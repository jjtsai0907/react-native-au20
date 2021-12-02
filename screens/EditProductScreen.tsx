import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Picker } from "react-native";
import { Button } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Product } from "../models/ProductObject";
import { Feather, Foundation } from "@expo/vector-icons";
import { ProductContext } from "../contexts/ProductContext";

const EditProductScreen: React.FC = (props: any) => {
  const context = useContext(ProductContext);
  const [selectedProduct, setSelectedProduct] = useState<Product>();

  const [name, setName] = useState(context.product?.productName);
  const [price, setPrice] = useState(context.product?.productPrice ?? "");
  const [productType, setProductType] = useState(context.product?.productType);

  const editProduct = () => {
    let editedItem = {
      productId: context.product?.productId ?? "",
      productName: name ?? "",
      productType: productType ?? "",
      productPrice: price ?? "",
    };

    context.editProduct(editedItem);
    props.navigation.navigate("Home", { id: 1 });
  };

  const removeProduct = () => {
    if (context.product) {
      context.removeProduct(context.product);
      alert("deleted");
      props.navigation.navigate("Home", { id: 1 });
    } else {
      console.log("Something went wrong");
    }
  };

  /*useEffect(() => {
    (() => {
      getSelectedItem();
    })();
  });*/

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
        onChangeText={(text) => {
          setName(text);
        }}
        value={name}
      />

      <TextInput
        style={styles.textInput}
        onChangeText={(text) => {
          setPrice(text);
        }}
        placeholder="Price"
        keyboardType="numeric"
        value={price}
      />

      <Picker
        style={styles.productPicker}
        selectedValue={productType}
        onValueChange={(itemValue, itemIndex) => setProductType(itemValue)}
        //onValueChange={(itemValue, itemIndex) => setProductType(itemValue)}
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
          onPress={() => {
            editProduct();
          }}
        />

        <Button
          icon={<Foundation name="prohibited" size={24} color="black" />}
          title="CANCEL"
          onPress={() => props.navigation.navigate("Home", { id: 1 })}
        />

        <Button
          icon={<Foundation name="page-remove" size={24} color="red" />}
          title="DELETE"
          onPress={() => {
            removeProduct();
          }}
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
