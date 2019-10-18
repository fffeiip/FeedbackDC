import React, { Fragment, Component } from 'react';
import Header from '../components/Header'
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
      token: '',
      userid: '',
    }
  }

  /**
   * A API do ava retorna sempre o código 200(sucesso) independende de ter tido sucesso ou não. 
   * Caso consiga uma resposta positiva, retorna um token , caso contrário retorna uma mensagem de erro (Mesmo não sinalizando o erro http)
   */

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
        // console.log(responseJSON.password) ELE EXIBE A SENHA - criptografar
        responseJSON.token ? this.setState({ token: responseJSON.token }) : this.setState({ error: responseJSON.error })
      })
      .then(() => {
        var data2 = new FormData()
        data2.append('wstoken', this.state.token)
        data2.append('wsfunction', 'core_webservice_get_site_info')
        const response = fetch('http://ava.ufrpe.br/webservice/rest/server.php?moodlewsrestformat=json', {
          method: 'POST',
          body: data2
        })
          .then((response) => response.json())
          .then((responseJSON) => {
            console.log(responseJSON.firstname)
            console.log(responseJSON.userpictureurl)
            this.setState({ userid: responseJSON.userid })
          })
          .then(() => {
            var data3 = new FormData()
            data3.append('wstoken', this.state.token)
            data3.append('wsfunction', 'core_user_get_users_by_id')
            data3.append('userids[0]', this.state.userid)
            const response = fetch('http://ava.ufrpe.br/webservice/rest/server.php?moodlewsrestformat=json', {
              method: 'POST',
              body: data3
            })
              .then((response) => response.json())
              .then((responseJSON) => {
                for (i = 1; i < responseJSON[0].enrolledcourses.length; i++) {
                  resp = responseJSON[0].enrolledcourses[i].fullname
                  if (resp.includes('2019.2')) {
                    console.log(responseJSON[0].enrolledcourses[i].fullname)
                  }
                }
              }).catch((error) => {
                console.log(error)
              })
          })
          .catch((error) => {
            //Nunca entra aqui ?
            console.log(error)
          })
      }
      )
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
