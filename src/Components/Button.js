import React from "react";
import { View } from "react-native";
import { Pressable, Text, StyleSheet, Image } from "react-native";

export const Button = (props) => {
  return (
    <Pressable
      style={{
        ...styles.button,
        backgroundColor: props.backgroundColor,
        borderColor: props.borderColor,
        justifyContent: props.leftIcon ? "flex-start" : "center",
      }}
      onPress={props.onPress}
      disabled={props.disabled}
    >
      {props.leftIcon ? (
        <View style={styles.btnWithIcon}>
          <View style={{ marginLeft: 20, width: '5%', alignItems: 'center' }}>
            <Image
              style={{ width: props.logoWidth, height: props.logoHeight, tintColor: props.tintColor }}
              source={props.leftIcon}
            />
          </View>
          <View style={{ width: "85%", alignItems: 'center' }}>
            <Text style={{ ...styles.btnText, color: props.color }}>
              {props.btnText}
            </Text>
          </View>
        </View>
      ) : (
        <View style={{ justifyContent: 'center' }}>
          <Text style={{ ...styles.btnText, color: props.color, marginLeft: 10 }}>
          {props.btnText}
          </Text>
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#008000",
    color: "white",
    marginTop: 15,
    borderRadius: 50,
    borderWidth: 2,
    width: 330,
    height: 55,
    flexDirection: 'row'
  },
  btnWithIcon: { flexDirection: 'row', alignItems: 'center' },
  btnText: {
    color: "white",
    fontWeight: "500",
    fontSize: 17,
    fontFamily: "AzoSans-Medium",
    lineHeight: 30,
  },
});
