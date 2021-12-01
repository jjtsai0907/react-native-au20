import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Product } from "../models/ProductObject";

const EditProductScreen: React.FC = (props: any) => {
  const [selectedProduct, setSelectedProduct] = useState<Product>();

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

  return (
    <View>
      <Text>{selectedProduct?.name}</Text>
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
  saveButton: {
    backgroundColor: "green",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    width: "40%",
  },
  saveButtonDisabled: {
    backgroundColor: "lightgray",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    width: "40%",
  },
  saveButtonLabel: {
    color: "white",
    fontSize: 16,
  },
  cancelButton: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    flexDirection: "row",
    width: "40%",
    justifyContent: "space-between",
  },
  cancelButtonLabel: {
    fontSize: 16,
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
