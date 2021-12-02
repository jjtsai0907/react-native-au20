import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Picker } from "react-native";
import { Button } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Product } from "../models/ProductObject";
import { Feather, Foundation } from "@expo/vector-icons";
import { ProductContext } from "../contexts/ProductContext";
import { tokens } from "../translations/appStructure";
import { Translate } from "../translations/Translation";

const EditProductScreen: React.FC = (props: any) => {
  const context = useContext(ProductContext);
  const [selectedProduct, setSelectedProduct] = useState<Product>();

  const [name, setName] = useState(context.product?.productName);
  const [price, setPrice] = useState(context.product?.productPrice ?? "");
  const [productType, setProductType] = useState(context.product?.productType);
  const [isPriceValid, setIsPriceValid] = useState(true);
  const [isNameValid, setIsNameValid] = useState(true);

  useEffect(() => {
    if (context.products) {
      for (let i = 0; i < context.products?.length; i++) {
        if (context.products[i].productName === name) {
          if (name === context.product?.productName) {
            setIsNameValid(true);
          } else {
            setIsNameValid(false);
            return;
          }
        } else {
          setIsNameValid(true);
        }
      }
    }
  }, [name]);

  const inRange = () => {
    return parseInt(price) >= 1000 && parseInt(price) <= 2600;
  };

  useEffect(() => {
    if (productType == "Integrated") {
      setIsPriceValid(inRange);
    } else {
      setIsPriceValid(true);
    }
  }, [price, productType]);

  const editProduct = () => {
    let editedItem = {
      productId: context.product?.productId ?? "",
      productName: name ?? "",
      productType: productType ?? "",
      productPrice: price ?? "",
    };

    context.editProduct(editedItem);
    props.navigation.navigate(
      Translate(tokens.screens.mainNavigator.TitleProductList),
      { id: 1 }
    );
  };

  const removeProduct = () => {
    if (context.product) {
      context.removeProduct(context.product);
      alert("Deleted");
      props.navigation.navigate(
        Translate(tokens.screens.mainNavigator.TitleProductList),
        { id: 1 }
      );
    } else {
      console.log("Something went wrong");
    }
  };

  /*useEffect(() => {
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
*/

  return (
    <View style={styles.container}>
      <Text>{Translate(tokens.screens.productList.HeaderName)}</Text>
      <TextInput
        style={styles.textInput}
        placeholder={Translate(tokens.screens.editProduct.NameInputPlaceholder)}
        onChangeText={(text) => {
          setName(text);
        }}
        value={name}
      />

      {!isNameValid && (
        <View style={styles.errorMessage}>
          <Text style={styles.errorMessageLabel}>
            {Translate(tokens.screens.editProduct.NameErrorText)}
          </Text>
        </View>
      )}

      <TextInput
        style={styles.textInput}
        onChangeText={(text) => {
          setPrice(text);
        }}
        placeholder={Translate(
          tokens.screens.editProduct.PriceInputPlaceholder
        )}
        keyboardType="numeric"
        value={price}
      />

      {!isPriceValid && (
        <View style={styles.errorMessage}>
          <Text style={styles.errorMessageLabel}>
            {Translate(tokens.screens.editProduct.PriceErrorText)}
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
          title={Translate(tokens.screens.editProduct.SaveButtonText)}
          disabled={
            name != "" && price != "" && productType != "" ? false : true
          }
          onPress={() => {
            editProduct();
          }}
        />

        <Button
          icon={<Foundation name="prohibited" size={24} color="black" />}
          title={Translate(tokens.screens.editProduct.CancelButtontext)}
          onPress={() =>
            props.navigation.navigate(
              Translate(tokens.screens.mainNavigator.TitleProductList),
              { id: 1 }
            )
          }
        />

        <Button
          icon={<Foundation name="page-remove" size={24} color="red" />}
          title={Translate(tokens.screens.editProduct.RemoveProductText)}
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
