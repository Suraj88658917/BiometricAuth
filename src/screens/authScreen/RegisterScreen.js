import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const RegisterScreen = ({ navigation }) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>

      <View style={{justifyContent:"center" , alignItems:"center"}}>
        <Text style={styles.title}>Create Account</Text>
      </View>

     <View>
       <TextInput
        placeholder=" Enter Your Full Name"
        placeholderTextColor="#888"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
     </View>

      <View>
        <TextInput
        placeholder=" Enter Your Email"
        placeholderTextColor="#888"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      </View>

     <View>
       <TextInput
        placeholder=" Enter Your Password"
        placeholderTextColor="#888"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />
     </View>

     <View>
       <TouchableOpacity style={styles.registerBtn}>
        <Text style={styles.registerText}>Register</Text>
      </TouchableOpacity>
     </View>

      <View>
        <Text onPress={() => navigation.goBack()} style={styles.link}>
        Already have an account? Login
      </Text>
      </View>

    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    padding: 25
  },

  logo: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10
  },

  title: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30
  },

  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: "#FAFAFA"
  },

  loginBtn: {
    backgroundColor: "#000",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },

  registerBtn: {
    backgroundColor: "#0a84ff",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },

  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  },

  registerText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  },

  link: {
    marginTop: 20,
    color: "#0A84FF",
    textAlign: "center",
    fontSize: 14
  },

  or: {
    textAlign: "center",
    marginTop: 20,
    color: "#888"
  }
});