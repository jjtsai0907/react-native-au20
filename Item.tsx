import { View, Text } from "react-native";
import { Product } from "./ProductObject";
import React, { FC, useState } from "react";

const Item: FC<Product> = (props) => {
  return (
    <View>
      <View>
        <Text>{props.name}</Text>
      </View>
      <View>
        <Text>{props.price}</Text>
      </View>
    </View>
  );
};

export default Item;
