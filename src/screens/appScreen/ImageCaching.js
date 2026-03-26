import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import FastImage from "react-native-fast-image";

const imageList = [
  { id: "1", uri: "https://unsplash.it/400/400?image=1" },
  { id: "2", uri: "https://unsplash.it/400/400?image=2" },
  { id: "3", uri: "https://unsplash.it/400/400?image=3" },
  { id: "4", uri: "https://unsplash.it/400/400?image=4" }
];

const renderItem = ({ item, index }) => {

    console.log("Rendering image:", index, item.uri);

    return (
     <View>
       <FastImage
        style={styles.image}
        source={{
          uri: item.uri,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}

        onLoadStart={() => console.log("Image loading started:", item.id)}
        onLoad={() => console.log("Image loaded:", item.id)}
        onLoadEnd={() => console.log("Image load finished:", item.id)}
        onError={() => console.log("Image error:", item.id)}
      />
     </View>
    );
  };

const ImageCacheScreen = () => {

  console.log("Image Cache Screen Loaded");

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Image Caching Demo</Text>
      
      <View>
        <FlatList
        data={imageList}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />

      </View>
    </View>
  );
};

export default ImageCacheScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c1b7b7",
    padding: 15
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 15,
    borderRadius: 10
  }
});