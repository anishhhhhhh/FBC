import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Image, TextInput } from "react-native";
// import {AppLoading} from "expo"
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";

interface SignInProps {
  navigation: any;
}

const SignInstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
  MainImage: {
    width: 400,
    height: 300,
    resizeMode: "contain",
  },
  MainText: {
    fontSize: 23,
    fontWeight: "bold",
  },
  LoginInputContainer: {
    width: "75%",
  },
  input: {
    height: 40,
    marginTop: 20,
    borderWidth: 0,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },
});

const CreateAccountstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const SignIn = ({ navigation }: SignInProps) => {
  return (
    <View style={SignInstyles.container}>
      <Image
        style={SignInstyles.MainImage}
        source={require("../assets/Login.png")}
      />
      <View style={SignInstyles.LoginInputContainer}>
        <Text style={SignInstyles.MainText}>Login to your account</Text>
        <TextInput
          style={SignInstyles.input}
          placeholder="Email"
          // onChangeText={onChangeText}
          // value={text}
        />
        <TextInput
          style={SignInstyles.input}
          placeholder="Password"
          // onChangeText={onChangeText}
          // value={text}
        />
        <Button
          title="Sign Up"
          onPress={() => navigation.push("CreateAccount")}
        />
      </View>
    </View>
  );
};

export const CreateAccount = () => {
  return (
    <View style={CreateAccountstyles.container}>
      <Text>Create Account Screen</Text>
      {/* <Button title="Create Account" onPress={() => signIn()} /> */}
    </View>
  );
};
