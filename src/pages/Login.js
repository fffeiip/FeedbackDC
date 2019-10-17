import React, { Fragment, Component } from 'react';
import Header from '../components/Header'
import ava from '../services/avaApi'
import styles from '../styles/Default'
import {
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
  logaAva = token => {
    response = ava.loginAva(token)
  }

  loginAva = () => {
    var data = new FormData()
    data.append('username', this.state.usuario)
    data.append('password', this.state.senha)
    data.append('service', 'moodle_mobile_app')
    const response = fetch('http://ava.ufrpe.br/login/token.php', {
      method: 'POST',
      body: data
    })
      .then((response) => response.json())
      .then((responseJSON) => {
        //fazer as outras requisições
        resposta = responseJSON.token ? this.logaAva(responseJSON.token): this.setState({ error: responseJSON.error })

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
              <Header titulo="Feedback Rural" ></Header>
              <View style={styles.viewInput}>
                <Text>LOGIN</Text>
                <TextInput style={styles.textInput} onChangeText={usuario => this.setState({ usuario })} placeholder="Usuário">
                </TextInput>
                <Text>SENHA</Text>
                <TextInput style={styles.textInput} onChangeText={senha => this.setState({ senha })} placeholder="Senha" secureTextEntry={true} textContentType="password">
                </TextInput>
              </View>
              <View style={styles.containerButton}>
                <TouchableOpacity onPress={this.loginAva} style={styles.button}>
                  <Text style={styles.textButton}>Entrar</Text>
                </TouchableOpacity>
              </View>
              <View>
                <Text style={styles.warningText}>{this.state.error}</Text>
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
};


export default Login;
