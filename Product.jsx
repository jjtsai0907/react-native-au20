import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class Product extends React.Component {
  render() {
    return (
      <View style={StyleSheet.go}>
        <Text>{this.props.name}</Text>
        <Text>{this.props.price}</Text>
      </View>
    );
  }
}

Product.price = undefined;

const styles = StyleSheet.create({
  go: {},
});
