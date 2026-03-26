import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import {storage} from "../../storage/Storage";

const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const handleLogin = () => {

    console.log("Login button pressed");

    if (email && password) {

      const token = "123456789";

      storage.set("userToken", token);

      console.log("Token saved in MMKV:", storage.getString("userToken"));
      console.log("email" , email);
      console.log("password" , password);

      navigation.replace("MainApp");

    } else {
      console.log("Enter email and password");
    }
  };

  return (
    <View style={styles.container}>

     <View style={{justifyContent:"center" , alignItems:"center"}}>
       <Text style={styles.title}>Welcome Back</Text>
     </View>

     <View>
       <TextInput
        placeholder="Enter Your Email"
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
       <TouchableOpacity onPress={handleLogin} 
        style={styles.loginBtn}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
     </View>

      <View>
        <Text style={styles.or}>OR</Text>
      </View>

      <View>
        <Text onPress={() => navigation.navigate("RegisterScreen")} style={styles.link}>
        Create New Account
      </Text>
      </View>

    </View>
  );
};

export default LoginScreen;

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
    backgroundColor: "#0a84ff",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },

  registerBtn: {
    backgroundColor: "#0A84FF",
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