import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Image, TextInput } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
interface HeaderProps {
  title: string;
}
export const Header = ({ title }: HeaderProps) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Budget Tracker</Text>
      <Text style={styles.signUpText} onPress={() => console.log("hello")}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  signUpText: {
    fontSize: 15,
    color: "#FF3378",
  },
});
