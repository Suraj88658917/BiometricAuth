import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import {storage} from "../../storage/Storage";
import ReactNativeBiometrics from "react-native-biometrics";

const SplashScreen = ({ navigation }) => {
  
  useEffect(() => {

    const token = storage.getString("userToken");

    if (token) {

      const rnBiometrics = new ReactNativeBiometrics();

      // check if biometric available (fingerprint / face lock)
      rnBiometrics.isSensorAvailable()
        .then((resultObject) => {

          const { available, biometryType } = resultObject;

          if (available) {

            console.log("Biometric available:", biometryType);

            rnBiometrics.simplePrompt({
              promptMessage: "Login using Fingerprint / Face Lock",
            })
            .then((resultObject) => {

              if (resultObject.success) {
                console.log("Biometric success");
                navigation.replace("MainApp");
              } else {
                console.log("Biometric failed");
                navigation.replace("LoginScreen");
              }

            })
            .catch(() => {
              console.log("Biometric error");
              navigation.replace("LoginScreen");
            });

          } else {
            console.log("No biometric available");
            navigation.replace("LoginScreen");
          }

        });
    } 
    else {
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