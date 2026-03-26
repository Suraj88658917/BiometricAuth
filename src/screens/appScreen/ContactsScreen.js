import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, PermissionsAndroid } from "react-native";
import Contacts from "react-native-contacts";

const ContactScreen = () => {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    console.log("Screen loaded");
    getContacts();
  }, []);

  const getContacts = async () => {

    console.log("Requesting contact permission...");

    const permission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS
    );

    console.log("Permission result:", permission);

    if (permission === PermissionsAndroid.RESULTS.GRANTED) {

      console.log("Permission granted");

      Contacts.getAll()
        .then(contacts => {
          console.log("Total contacts found:", contacts.length);
          setContacts(contacts);
        });

    }
  };

  const renderItem = ({ item, index }) => {

    console.log("Rendering contact:", index, item.displayName);

    return (
      <View style={styles.card}>
        <Text style={styles.name}>{item.displayName}</Text>
        <Text style={styles.phone}>
          {item.phoneNumbers[0]?.number}
        </Text>
      </View>
    )
  };

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={contacts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15
  },
  card: {
    padding: 15,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    marginBottom: 10
  },
  name: {
    fontSize: 16,
    fontWeight: "bold"
  },
  phone: {
    fontSize: 14,
    color: "gray",
    marginTop: 5
  }
});