import { View, Text, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import { Route, useNavigation } from "@react-navigation/native";
import BtnComponent from "../components/BtnComponent";
import { btnBg, danger, light, success, textColor, violet } from "../constants/ConstantColor";
import FieldComponent from "../components/FieldComponent";
import DisplayAnImage from "../components/DisplayAnImage";
import KeyboardAvoidingComponent from "../components/KeyboardAvoidingComponent";
import ValidateUserService from "../services/ValidateUserService";

export default function HomeScreen() {
  const navi_name = useNavigation();
  const [textPhone, setTextPhone] = useState("");
  const [isValid, setIsValid] = useState(false);

  return (
    <KeyboardAvoidingComponent>
      <View style={styles.inner}>
        <DisplayAnImage />
        <View style={styles.curvedStyle}>
          <View style={styles.textContainer}>
            <Text style={styles.subText}>Login to your account</Text>
          </View>
          <FieldComponent
            placeholder="Phone"
            keyboardType={"numeric"}
            onChangeText={(newText: any) => setTextPhone(newText)}
            defaultValue={textPhone}
            maxLength={10}
          />
          <View style={styles.btnContainer}>
            <BtnComponent
              bgColor={btnBg}
              textColor="#fff"
              btnLabel="Submit"
              onPress={() => {
                const isValid = ValidateUserService(textPhone);
                if (textPhone === "") {
                  Alert.alert("Phone number is required");
                } else {
                  if (isValid) {
                    navi_name.navigate("OtpCode");
                  } else {
                    Alert.alert("Invalid phone number");
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
  },
  curvedStyle: {
    flex: 1,
    backgroundColor: violet,
    borderTopLeftRadius: 100,
    padding: 25,
  },
  textContainer: {
    alignItems: "center",
    marginTop: 50,
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
