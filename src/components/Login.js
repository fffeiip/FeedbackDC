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
  /**
   * A API do ava retorna sempre o código 200(sucesso) independende de ter tido sucesso ou não. 
   * Caso consiga uma resposta positiva, retorna um token , caso contrário retorna uma mensagem de erro (Mesmo não sinalizando o erro http)
   */
  loginAva = async () => {
    var data = new FormData()
    data.append('username',this.state.usuario)
    data.append('password',this.state.senha)
    data.append('service','moodle_mobile_app')
      const response = await fetch('http://ava.ufrpe.br/login/token.php',{
        method: 'POST',  
        body: data             
      })
      .then((response)=>response.json())
      .then((responseJSON)=>{
    alert(responseJSON.token?responseJSON.token:responseJSON.error)      
      }) 
      .catch((error)=>{
        //Nunca entra aqui ?
        console.log(error)
      })
  }
  

  render(){
    return (
      <Fragment>
        <StatusBar backgroundColor='#0b99' />
        {/* padronizar cores */}
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
                <Text>Login</Text> 
                {/* caps */}
                <TextInput style={styles.textInput} onChangeText={usuario => this.setState({usuario})} placeholder="Usuário">
                </TextInput>
                <Text>Senha</Text>
                <TextInput style={styles.textInput} onChangeText={senha => this.setState({senha})} placeholder="Senha" secureTextEntry={true} textContentType="password">
                </TextInput>
              </View>
              <View style={styles.containerButton}>
                <TouchableOpacity onPress={this.loginAva} style={styles.button}>
                  <Text>Login</Text>
                  {/* entrar */}
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
    backgroundColor: '#0b99',
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
