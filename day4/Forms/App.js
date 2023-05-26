import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

// screens
import SignIn from "./src/screens/SignIn";
import SignUp from "./src/screens/SignUp";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "signin") {
              iconName = focused ? "log-in" : "log-in-outline";
            } else if (route.name === "signup") {
              iconName = focused ? "person-add" : "person-add-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="signin"
          component={SignIn}
          options={{
            title: "Sign In",
          }}
        />
        <Tab.Screen
          name="signup"
          component={SignUp}
          options={{
            title: "Sign Up",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
