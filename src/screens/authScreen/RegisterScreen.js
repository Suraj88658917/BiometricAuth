import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const RegisterScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Register Screen</Text>

      <Button title="Register" onPress={() => navigation.replace("HomeScreen")} />

      <Button
        title="Back to Login"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 22, marginBottom: 20 },
});