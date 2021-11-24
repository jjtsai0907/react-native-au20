import { View, Text } from "react-native";
import { Product } from "./ProductObject";
import React, { FC, useState } from "react";

const Item: FC<Product> = (props) => {
  return (
    <View>
      <View>
        <Text>Product Name: {props.name}</Text>
      </View>
      <View>
        <Text>Product Price: {props.price}</Text>
        <Text>Product Type: {props.productType}</Text>
      </View>
    </View>
  );
};

export default Item;
