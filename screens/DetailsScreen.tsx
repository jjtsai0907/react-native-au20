import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  Picker,
} from "react-native";
import { Button } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Feather, Foundation } from "@expo/vector-icons";
import { Product } from "../models/ProductObject";
import { ProductContext } from "../contexts/ProductContext";

const DetailsScreen: React.FC = (props: any) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [productType, setProductType] = useState("Peripheral");
  const [productList, setProductList] = useState([]);
  const [oldList, setOldList] = useState<Product[]>([]);

  const context = useContext(ProductContext);
  const [isPriceValid, setIsPriceValid] = useState(true);
  const [isNameValid, setIsNameValid] = useState(true);

  const inRange = () => {
    return parseInt(price) >= 1000 && parseInt(price) <= 2600;
  };

  useEffect(() => {
    if (context.products) {
      for (let i = 0; i < context.products?.length; i++) {
        if (context.products[i].productName === name) {
          setIsNameValid(false);
          return;
        } else {
          setIsNameValid(true);
        }
      }
    }
  }, [name]);

  const saveNewProduct = () => {
    const newItem = {
      productId: Math.random().toString(),
      productName: name,
      productType: productType,
      productPrice: price,
    };
    context.addProduct(newItem);
    alert("Product saved:  " + newItem.productName);
    props.navigation.navigate("Home", { id: 1 });
  };

  /*const getOldList = async () => {
    try {
      await AsyncStorage.getItem("product").then((result) => {
        if (result != null) {
          let jsonObject: [Product] = JSON.parse(JSON.stringify(result!));
          setOldList(jsonObject);
          alert("oldList" + oldList.length);
        } else {
          alert("No Data");
        }
      });
    } catch (error) {
      console.log("Reading data error");
      alert("Reading data error!");
    }
  };

  const saveProductValue = async () => {
    alert(oldList.length);
    await getOldList();
    let aa: Product = {
      id: Math.random(),
      name: name,
      price: price,
      productType: productType,
    };

    //setOldList([...oldList, aa]);
    oldList.push(aa);
    oldList.push(...oldList);

    alert(oldList.length);
    try {
      await AsyncStorage.setItem("product", JSON.stringify(oldList));
      alert("Data saved!");
    } catch (error) {
      console.log("Saving data error");
      alert("Saving data error!");
    }
    props.navigation.navigate("Home", { id: 1 });
  }; */

  useEffect(() => {
    if (productType == "Integrated") {
      setIsPriceValid(inRange);
    } else {
      setIsPriceValid(true);
    }
  }, [price, productType]);

  return (
    <View style={styles.container}>
      <Text>Create New Product</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Name"
        onChangeText={setName}
      />
      {!isNameValid && (
        <View style={styles.errorMessage}>
          <Text style={styles.errorMessageLabel}>
            The name is not valid, please enter a new one
          </Text>
        </View>
      )}

      <TextInput
        style={styles.textInput}
        onChangeText={setPrice}
        placeholder="Price"
        keyboardType="numeric"
      />

      {!isPriceValid && (
        <View style={styles.errorMessage}>
          <Text style={styles.errorMessageLabel}>
            The price should be between $1000 and $2600
          </Text>
        </View>
      )}

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
            name != "" &&
            price != "" &&
            productType != "" &&
            isPriceValid == true
              ? false
              : true
          }
          onPress={() => saveNewProduct()}
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
});

export default DetailsScreen;

function anync() {
  throw new Error("Function not implemented.");
}
