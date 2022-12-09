import React, { useRef, useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Color from '../../../Utils/Colors';
import { Button, ButtonWithIcon } from '../../Components/Button';

export const Login = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView style={{ marginBottom: 20 }} contentContainerStyle={styles.container} showsVerticalScrollIndicator={false} enableOnAndroid={true}>
                <View style={{ alignItems: 'center', textAlign: 'center' }}>
                    <Image
                        style={styles.logo}
                        source={require('../../../assets/logos/blueLogo.png')}
                    />
                    <Text style={{ ...styles.text, marginTop: 60, padding: 10 }}>
                        When you select Create Account or Sign In, you agree to our Terms. Find out how we process your data in our Privacy Policy and Cookies Policy.
                    </Text>
                </View>
                <View style={{ marginTop: 45 }}>
                    <Button
                        backgroundColor={Color.whiteColor}
                        borderColor={Color.blueColor}
                        color={Color.blueColor}
                        tintColor={Color.blueColor}
                        logoWidth={24}
                        logoHeight={24}
                        leftIcon={require("../../../assets/logos/phone.png")}
                        btnText="Sign in with phone number"
                        onPress={() => alert('View Data')}
                    />
                    <Button
                        backgroundColor={Color.whiteColor}
                        borderColor={Color.blueColor}
                        color={Color.blueColor}
                        tintColor={Color.blueColor}
                        logoWidth={24}
                        logoHeight={18}
                        leftIcon={require("../../../assets/logos/gmail.png")}
                        btnText="Sign in with Gmail"
                        onPress={() => alert('View Data')}
                    />
                    <Button
                        backgroundColor={Color.whiteColor}
                        borderColor={Color.blueColor}
                        color={Color.blueColor}
                        tintColor={Color.blueColor}
                        logoWidth={11}
                        logoHeight={20}
                        leftIcon={require("../../../assets/logos/fb.png")}
                        btnText="Sign in with Facebook"
                        onPress={() => alert('View Data')}
                    />
                </View>
                <Text style={{ ...styles.text, marginTop: 24 }}>
                    Do you have problems logging in? 
                </Text>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    title: {
        fontFamily: "AzoSans-Regular",
        fontSize: 17,
        fontWeight: "500",
        lineHeight: 30,
    },
    text: {
        fontSize: 15,
        lineHeight: 24,
        textAlign: 'center'
    },
    logo: {
        width: 90,
        height: 90,
        marginTop: 40,
    },
    input: {
        height: 50,
        marginTop: 5,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        width: 300
    },
});