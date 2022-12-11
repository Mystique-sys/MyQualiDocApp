import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { ScrollView, StyleSheet, FlatList } from "react-native";
import { Text, View } from "../components/Themed";
import BtnComponent from "../components/BtnComponent";
import EditScreenInfo from "../components/EditScreenInfo";
import FieldComponent from "../components/FieldComponent";
import KeyboardAvoidingComponent from "../components/KeyboardAvoidingComponent";
import MessageBubbleComponent from "../components/MessageBubbleComponent";
import { btnBg } from "../constants/ConstantColor";
import { RootTabScreenProps } from "../types";

export default function ChatScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const navi_name = useNavigation();
  const [textPhone, setTextPhone] = useState("");
  const data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'PAIN',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'BODY FEELING HOT',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'VOMIT',
    },
  ];
  const data1 = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bh',
      title: 'HEAD',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f65',
      title: 'EYES',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d73',
      title: 'EAR',
    },
  ];

  const Item = ({ data }: { data: any }) => (
    <Text>{data.title}</Text>
  );
  const renderItem = ({ item }: { item: any }) => (
    <Item data={item} />
  );


  const Item1 = ({ data1 }: { data1: any }) => (
    <Text>{data1.title}</Text>
  );
  const renderItem1 = ({ item1 }: { item1: any }) => (
    <Item data={item1} />
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <MessageBubbleComponent
          isQualiBot={true}
          image_path=""
          props=""
          text="Hello, Welcome to My Quali doc" />
        <MessageBubbleComponent
          isQualiBot={true}
          image_path=""
          props=""
          text="Please enter your name" />
        <MessageBubbleComponent
          isQualiBot={false}
          image_path=""
          props=""
          text="Michel" />
        <MessageBubbleComponent
          isQualiBot={true}
          image_path=""
          props=""
          text="Hello Michel, please select your issue" />
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
        <MessageBubbleComponent
          isQualiBot={false}
          image_path=""
          props=""
          text="PAIN" />
        <MessageBubbleComponent
          isQualiBot={true}
          image_path=""
          props=""
          text="Where exactly is the Pain?" />
        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
          <FlatList
            data={data1}
            renderItem={renderItem}
            keyExtractor={item1 => item1.id}
          />
        </View>
        <MessageBubbleComponent
          isQualiBot={false}
          image_path=""
          props=""
          text="HEAD" />
        <MessageBubbleComponent
          isQualiBot={true}
          image_path=""
          props=""
          text="Does your body feel hot? Please choose the correct option: (Yes)/(No)" />
        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
          <View><Text>YES</Text></View>
          <View><Text> / </Text></View>
          <View><Text>NO</Text></View>
        </View>
        <MessageBubbleComponent
          isQualiBot={false}
          image_path=""
          props=""
          text="YES" />
        <MessageBubbleComponent
          isQualiBot={true}
          image_path=""
          props=""
          text="Please consult immediately.

 A headache combined with a fever is a sign of infection that must be checked.

Our consultation fee is R 320 for both adults and children. It includes medication, Xray when recommended by doctor and a FREE follow-up within 7 days if you're still not better.
" />
      </ScrollView>
      {/* Bottom input */}
      <View style={styles.inputHolder}>
        <FieldComponent
          placeholder="type text"
          keyboardType={"text"}
          onChangeText={(newText: any) => setTextPhone(newText)}
          defaultValue={textPhone}
          backgroundColor="#fff"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  scrollView: {
    backgroundColor: "#eee",
    marginHorizontal: 1,
    height: 400,
    paddingBottom: 300
  },
  inputHolder: {
    flex: 1,
    justifyContent: "center",
    position: "absolute",
    width: "100%",
    bottom: 0,
    padding: 10,
  },
  inputField: {
    width: 360,
  },
  text: {
    fontSize: 15,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  flattern_container: {
    flex: 1,
    backgroundColor: '#eee',
    flexDirection: 'row',
    flexWrap: 'nowrap'
  },
  inner_text: {
  },
});
