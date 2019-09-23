/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';


const Login = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.titleLogoBox}>
        <Text>FeedbackDC</Text>
      </View>
      <View style={styles.loginBox}>
        <Text>LOGIN</Text>
        <TextInput style={styles.textInput} placeholder="Usuário">
        </TextInput>
        <Text>Senha</Text>
        <TextInput style={styles.textInput} placeholder="Senha">
        </TextInput>
      </View>
      <View style={styles.footerBox}>
        <Text>Foter1</Text>
        <Text>Foter2</Text>
        <Text>Foter3</Text>
        <Text>Foter4</Text>
        <Text>Foter5</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  textInput: {
    backgroundColor: '#a9a9a9',
  },
  footerBox: {
    alignItems: "center"
  }
  
});

export default Login;
