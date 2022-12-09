import React, { useRef, useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Color from '../../../Utils/Colors';
import { Button } from '../../Components/Button';

export const Main = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView style={{ marginBottom: 20 }} contentContainerStyle={styles.container} showsVerticalScrollIndicator={false} enableOnAndroid={true}>
                <View style={{ alignItems: 'center', textAlign: 'center' }}>
                    <Image
                        style={styles.logo}
                        source={require('../../../assets/logos/blueLogo.png')}
                    />
                    <Text style={{ ...styles.text, marginTop: 50, padding: 10 }}>
                        When you select Create Account or Sign In, you agree to our Terms. Find out how we process your data in our Privacy Policy and Cookies Policy.
                    </Text>
                </View>
                <View style={{ marginTop: 100 }}>
                    <Button 
                        backgroundColor={Color.blueColor} 
                        borderColor={Color.blueColor} 
                        color="white" 
                        btnText="Create an account" 
                        onPress={() => navigation.navigate('Login')} 
                    />
                    <Button 
                        backgroundColor={Color.whiteColor} 
                        borderColor={Color.blueColor} 
                        color={Color.blueColor} 
                        btnText="Sign In" 
                        onPress={() => alert('Login here')} 
                    />
                </View>
                <Text style={{ ...styles.text, marginTop: 20 }}>
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
        fontSize: 20,
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