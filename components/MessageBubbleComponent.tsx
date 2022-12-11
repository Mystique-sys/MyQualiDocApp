import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Svg, {
  Circle,
  Ellipse,
  G,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';
import { bgColor } from "../constants/ConstantColor";

export default function MessageBubbleComponent({
  props,
  isQualiBot,
  image_path,
  text
}: {
  text: string,
  image_path: any,
  props: any,
  isQualiBot: boolean
}) {
  return (
    <View style={[styles.message, isQualiBot ? styles.mine : styles.not_mine]} {...props}>
      <View style={[styles.cloud, { backgroundColor: isQualiBot ? bgColor  : "#007aff" }]}>
        {
          image_path ? <Image style={{ alignSelf: isQualiBot ? "flex-start" : "flex-end" }}
            borderRadius={10}
            source={image_path}
          /> : null
        }
        {
          text ? <Text style={[styles.text, { color: isQualiBot ? "#eee" : "#fff" }]}>
            {text}
          </Text> : null
        }
        <View
          style={[styles.arrow_container, isQualiBot ? styles.arrow_left_container : styles.arrow_right_container]}
        >
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  message: {
    flexDirection: "row",
    marginVertical: moderateScale(7, 2),
  },
  mine: {
    marginLeft: 20,
  },
  not_mine: {
    alignSelf: "flex-end",
    marginRight: 20,
  },
  cloud: {
    maxWidth: moderateScale(250, 2),
    paddingHorizontal: moderateScale(10, 2),
    paddingTop: moderateScale(5, 2),
    paddingBottom: moderateScale(7, 2),
    borderRadius: 20
  },
  text: {
    paddingTop: 2,
    fontSize: 13,
    lineHeight: 15
  },
  arrow_container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    flex: 1
  },
  arrow_left_container: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  arrow_right_container: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  arrow_left: {
    left: moderateScale(-6, 0.5)
  },
  arrow_right: {
    right: moderateScale(-6, 0.5)
  }
});
