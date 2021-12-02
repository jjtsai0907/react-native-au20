import { View, Text, StyleSheet } from "react-native";
import { Product } from "./ProductObject";
import React, { FC, useState } from "react";

const Item: FC<Product> = (props) => {
  return (
    <View style={styles.listItemContainer}>
      <View style={styles.itemDirection}>
        <Text style={styles.leftItem}>Product: {props.name}</Text>
      </View>
      <View>
        <Text style={styles.rightItem}>Price: {props.price}</Text>
        <Text style={styles.centerItem}>Type: {props.productType}</Text>
      </View>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  itemDirection: {},

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
  listItemContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "lightgray",
    margin: 10,
    padding: 10,
    borderRadius: 5,
    justifyContent: "space-between",
  },
});
