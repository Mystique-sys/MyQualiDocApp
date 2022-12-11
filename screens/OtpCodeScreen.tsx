import { View, Text, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import { Route, useNavigation } from "@react-navigation/native";
import BtnComponent from "../components/BtnComponent";
import { btnBg, danger, light, success, textColor, violet } from "../constants/ConstantColor";
import FieldComponent from "../components/FieldComponent";
import DisplayAnImage from "../components/DisplayAnImage";
import KeyboardAvoidingComponent from "../components/KeyboardAvoidingComponent";
import ValidateUserOTP from "../services/ValidateUserOTP";

export default function OtpCodeScreen() {
    const navi_name = useNavigation();
    const [textOtpCode, setOtpCode] = useState("");
    const [isValid, setIsValid] = useState(false);
    return (
        <KeyboardAvoidingComponent>
            <View style={styles.inner}>
                <DisplayAnImage />
                <View style={styles.curvedStyle}>
                    <View style={styles.textContainer}>
                        <Text style={styles.subText}>Enter OTP to verify</Text>
                    </View>
                    <FieldComponent
                        placeholder="Enter OTP Code"
                        keyboardType={"numeric"}
                        onChangeText={(newText: any) => setOtpCode(newText)}
                        defaultValue={textOtpCode}
                        maxLength={6}
                    />
                    <View style={styles.btnContainer}>
                        <BtnComponent
                            bgColor={btnBg}
                            textColor="#fff"
                            btnLabel="Verify"
                            onPress={() => {
                                const isValid = ValidateUserOTP(textOtpCode);
                                if (textOtpCode === "") {
                                    Alert.alert("OTP is required");
                                } else {
                                    if (isValid) {
                                        navi_name.navigate("Root", { "screen": "TabFour" });
                                    } else {
                                        Alert.alert("Invalid OTP");
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
