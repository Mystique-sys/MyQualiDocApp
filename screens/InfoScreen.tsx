import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import BtnComponent from '../components/BtnComponent';
import { Text, View } from '../components/Themed';
import { btnBg } from '../constants/ConstantColor';

export default function InfoScreen() {
  const navi_name = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <BtnComponent
          bgColor={btnBg}
          textColor="#fff"
          btnLabel="Logout"
          onPress={() => {           
              navi_name.navigate("Home");
            }
          }
        ></BtnComponent>
      </View>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  }, btnContainer: {
    alignItems: "center",
  },
});
