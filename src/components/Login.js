/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment,Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  StatusBar
} from 'react-native';


class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      usuario: '',
      senha: '',
    }
  }

  loginAva = () => {
      try{        
        let response = fetch('http://ava.ufrpe.br/login/token.php',{
          method: 'POST',
          body: JSON.stringify({
            'username': this.state.usuario,
            'password': this.state.senha,
            'service': 'moodle_mobile_app'            
          })
        })
        console.log(response)     
      } catch(error){
        console.log(error)  
      }

  }
  render(){
    return (
      <Fragment>
        <StatusBar backgroundColor='#f09' />
        <SafeAreaView>
          <ScrollView>
            <KeyboardAvoidingView
              style={{ flex: 1 }}
              behavior='position'
              enabled>
              <View style={styles.header}>
                <Text style={styles.title}>
                  FeedbackDC
                </Text>
              </View>
              <View style={styles.viewInput}>
                <Text>LOGIN</Text>
                <TextInput style={styles.textInput} onChangeText={usuario => this.setState({usuario})} placeholder="Usuário">
                </TextInput>
                <Text>Senha</Text>
                <TextInput style={styles.textInput} onChangeText={senha => this.setState({senha})} placeholder="Senha" secureTextEntry={true} textContentType="password">
                </TextInput>
              </View>
              <View style={styles.containerButton}>
                <TouchableOpacity onPress={this.loginAva} style={styles.button}>
                  <Text>Login</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
};


const styles = StyleSheet.create({
  title: {
    padding: 20,
    fontSize: 24,
    color: '#ffffff',
    fontWeight: "bold"
  },
  header: {
    backgroundColor: '#f09',
    alignItems: "center"
  },
  textInput: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 16,
    color: '#008b8b',
    padding: 10,
  },
  viewInput: {
    paddingHorizontal: 20
  },
  gasText: {
    paddingVertical: 20,
    fontSize: 20
  },
  containerButton: {
    paddingVertical: 50,
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#008b8b',
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  textButton: {
    textAlign: 'center',
    fontSize: 16,
    alignSelf: "center",
    color: '#ffffff'
  }
});

export default Login;
