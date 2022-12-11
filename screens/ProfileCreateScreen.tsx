import React, { useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  Alert,
} from "react-native";
import FieldComponent from "../components/FieldComponent";

const KeyboardAvoidingComponent = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [textPhone, setTextPhone] = useState("");
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <FieldComponent
            placeholder="Firstname"
            keyboardType={"text"}
            onChangeText={(newText: any) => setTextPhone(newText)}
            defaultValue={textPhone}
          />
          <FieldComponent
            placeholder="Lastname"
            keyboardType={""}
            onChangeText={(newText: any) => setTextPhone(newText)}
            defaultValue={textPhone}
          />
          <FieldComponent
            placeholder="Email"
            keyboardType={"email"}
            onChangeText={(newText: any) => setTextPhone(newText)}
            defaultValue={textPhone}
          />
          <FieldComponent
            placeholder="Gender"
            keyboardType={""}
            onChangeText={(newText: any) => setTextPhone(newText)}
            defaultValue={textPhone}
          />
          <View style={styles.btnContainer}>
            <Button
              title="Submit"
              onPress={() => Alert.alert("To be implemented")}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 5,
    flex: 1,
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12,
  },
});

export default KeyboardAvoidingComponent;
