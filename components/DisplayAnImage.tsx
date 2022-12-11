import React from "react";
import { View, Image, StyleSheet } from "react-native";

const DisplayAnImage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/Quali-white-logo.png")}
      />
      {/* <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}     
      /> */}
    </View>
  );
};

export default DisplayAnImage;

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    marginBottom: 50,
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 150,
  },
});
