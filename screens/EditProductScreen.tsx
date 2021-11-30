import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
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
