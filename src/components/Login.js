/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, Component } from 'react';
import Header from './Header'
import styles from '../Styles/Default'
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
  constructor(props) {
    super(props)
    this.state = {
      usuario: '',
      senha: '',
      error: '',
    }
  }
  /**
   * A API do ava retorna sempre o código 200(sucesso) independende de ter tido sucesso ou não. 
   * Caso consiga uma resposta positiva, retorna um token , caso contrário retorna uma mensagem de erro (Mesmo não sinalizando o erro http)
   */
  loginAva = async () => {
    var data = new FormData()
    data.append('username', this.state.usuario)
    data.append('password', this.state.senha)
    data.append('service', 'moodle_mobile_app')
    const response = await fetch('http://ava.ufrpe.br/login/token.php', {
      method: 'POST',
      body: data
    })
      .then((response) => response.json())
      .then((responseJSON) => {
        //fazer as outras requisições
        resposta = responseJSON.token ? alert("Token: " + responseJSON.token) : this.setState({ error: responseJSON.error })

      })
      .catch((error) => {
        //Nunca entra aqui ?
        console.log(error)
      })
  }


  render() {
    return (
      <Fragment>
        <StatusBar backgroundColor='#306f' />
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
                <TextInput style={styles.textInput} onChangeText={usuario => this.setState({ usuario })} placeholder="Usuário">
                </TextInput>
                <Text>Senha</Text>
                <TextInput style={styles.textInput} onChangeText={senha => this.setState({ senha })} placeholder="Senha" secureTextEntry={true} textContentType="password">
                </TextInput>
              </View>
              <View style={styles.containerButton}>
                <TouchableOpacity onPress={this.loginAva} style={styles.button}>
                  <Text style={styles.textButton}>Entrar</Text>
                </TouchableOpacity>
              </View>
              <View>
                <Text style={styles.warningText}>{this.state.logou}</Text>
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
};


export default Login;
