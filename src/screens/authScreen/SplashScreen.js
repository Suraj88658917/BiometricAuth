import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import {storage} from "../../storage/Storage";

const SplashScreen = ({ navigation }) => {

   useEffect(() => {

    console.log("App started");

    const token = storage.getString("userToken");

    console.log("Token from MMKV:", token);

    if (token) {
      console.log("User already logged in");
      navigation.replace("MainApp");
    } else {
      console.log("User not logged in");
      navigation.replace("LoginScreen");
    }

  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>MyApp</Text>
      <Text style={styles.tag}>Welcome to the app</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A84FF",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
  },
  tag: {
    fontSize: 16,
    color: "#fff",
    marginTop: 10,
  },
});