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
import { Translate } from "../translations/Translation";
import { tokens } from "../translations/appStructure";

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
    props.navigation.navigate(
      Translate(tokens.screens.mainNavigator.TitleProductList),
      { id: 1 }
    );
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
      <TextInput
        style={styles.textInput}
        placeholder={Translate(tokens.screens.newProduct.NameInputPlaceholder)}
        onChangeText={setName}
      />
      {!isNameValid && (
        <View style={styles.errorMessage}>
          <Text style={styles.errorMessageLabel}>
            {Translate(tokens.screens.newProduct.NameErrorText)}
          </Text>
        </View>
      )}

      <TextInput
        style={styles.textInput}
        onChangeText={setPrice}
        placeholder={Translate(tokens.screens.newProduct.PriceInputPlaceholder)}
        keyboardType="numeric"
      />

      {!isPriceValid && (
        <View style={styles.errorMessage}>
          <Text style={styles.errorMessageLabel}>
            {Translate(tokens.screens.newProduct.PriceErrorText)}
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
          title={Translate(tokens.screens.newProduct.SaveButtonText)}
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
          title={Translate(tokens.screens.newProduct.CancelButtontext)}
          onPress={() =>
            props.navigation.navigate(
              Translate(tokens.screens.mainNavigator.TitleProductList),
              { id: 1 }
            )
          }
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
