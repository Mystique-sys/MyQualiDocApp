import { View, Text, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import { Route, useNavigation } from "@react-navigation/native";
import BtnComponent from "../components/BtnComponent";
import { btnBg, danger, light, success, textColor, violet } from "../constants/ConstantColor";
import FieldComponent from "../components/FieldComponent";
import DisplayAnImage from "../components/DisplayAnImage";
import KeyboardAvoidingComponent from "../components/KeyboardAvoidingComponent";
import SignUpUserData from "../services/SignUpUserData";
import { Person } from "../models/viewModels";

export default function SignupScreen() {
  const navi_name = useNavigation();
  const [textName, setTextName] = useState("");
  const [textLastname, setTextLastname] = useState("");
  const [textPhone, setTextPhone] = useState("");
  const [textPassword, setTextPassword] = useState("");
  const [textConfirmPassword, setTextConfirmPassword] = useState("");
  const [isValid, setIsValid] = useState(false);

  return (
    <KeyboardAvoidingComponent>
      <View style={styles.inner}>
        <DisplayAnImage />
        <View style={styles.curvedStyle}>
          <View style={styles.textContainer}>
            <Text style={styles.subText}>Create account</Text>
          </View>
          <FieldComponent
            placeholder="Firstname"
            keyboardType={"text"}
            onChangeText={(newText: any) => setTextName(newText)}
            defaultValue={textName}
          />
          <FieldComponent
            placeholder="Surname"
            keyboardType={"text"}
            onChangeText={(newText: any) => setTextLastname(newText)}
            defaultValue={textLastname}
          />
          <FieldComponent
            placeholder="Phone"
            keyboardType={"numeric"}
            onChangeText={(newText: any) => setTextPhone(newText)}
            defaultValue={textPhone}
          />
          <FieldComponent
            placeholder="Password"
            keyboardType={"text"}
            onChangeText={(newText: any) => setTextPassword(newText)}
            defaultValue={textPassword}
            secureTextEntry={true}
            returnKeyType='go'
            autoCorrect={false}
          />
          <FieldComponent
            placeholder="Confirm Password"
            keyboardType={"text"}
            onChangeText={(newText: any) => setTextConfirmPassword(newText)}
            defaultValue={textConfirmPassword}
            secureTextEntry={true}
            returnKeyType='go'
            autoCorrect={false}
          />
          <View style={styles.btnContainer}>
            <BtnComponent
              bgColor="#25285E"
              textColor="#fff"
              btnLabel="Sign Up"
              onPress={() => {
                
                if (true) {
                  navi_name.navigate("Root", { "screen": "TabFour" });
                } else {
                  if (textPhone === "") {
                    Alert.alert("Phone number is required");
                  } else {
                    navi_name.navigate("ProfileCreate");
                  }
                }
              }}
            ></BtnComponent>
          </View>
        </View>
      </View>
    </KeyboardAvoidingComponent>
  );
}

const styles = StyleSheet.create({
  inner: {
    padding: 0,
    flex: 1,
    position: 'relative'
  },
  curvedStyle: {
    flex: 1,
    position: 'absolute',
    backgroundColor: violet,
    borderTopLeftRadius: 100,
    padding: 25,
    width: '100%',
    bottom: 0,
    height: 500
  },
  textContainer: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 30,
  },
  text: {
    fontSize: 40,
    color: textColor,
  },
  subText: {
    fontSize: 20,
    color: light,
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  btnContainer: {
    alignItems: "center",
  },
});
