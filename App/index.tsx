import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SignIn, CreateAccount } from "./Screens";
import { Header } from "../Shared/Header";

const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();

export default () => (
  <NavigationContainer>
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerTitle: () => <Header title="Sign Up" />,
          headerStyle: {
            backgroundColor: "#fff",
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            // height: 100,
          },
        }}
      />
      <AuthStack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{
          // headerTitle: () => <Header title="Sign Up" />,
          headerStyle: {
            backgroundColor: "#fff",
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          },
        }}
      />
    </AuthStack.Navigator>
  </NavigationContainer>
);
