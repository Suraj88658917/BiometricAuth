import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Screen</Text>

      <Button title="Login" onPress={() => navigation.replace("HomeScreen")} />

      <Button
        title="Go to Register"
        onPress={() => navigation.navigate("RegisterScreen")}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 22, marginBottom: 20 },
});