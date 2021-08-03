import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
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
    fontSize: 20,
    fontWeight: "bold",
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
      <Text style={SignInstyles.MainText}>Login to your account</Text>
      <Button
        title="Sign Up"
        onPress={() => navigation.push("CreateAccount")}
      />
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
