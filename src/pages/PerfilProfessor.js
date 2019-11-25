import React, { Component } from 'react'
import styles from '../styles/Default'
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';


export default class Perfil extends Component {
    getDisciplinas = () => {
        const { navigation } = this.props
        var date = new Date()
        var ano = date.getFullYear()
        var semestre = date.getMonth() > 6 ? 2 : 1
        var semestreAtual = ano + "." + semestre
        var data3 = new FormData()
        data3.append('wstoken', navigation.getParam('token',''))
        data3.append('wsfunction', 'core_user_get_users_by_id')
        data3.append('userids[0]', navigation.getParam('userid',''))
        const response = fetch('http://ava.ufrpe.br/webservice/rest/server.php?moodlewsrestformat=json', {
            method: 'POST',
            body: data3
        })
            .then((response) => response.json())
            .then(responseJSON => {
                navigation.navigate('Layout', {
                    disciplinas: responseJSON[0].enrolledcourses.filter(item => item.fullname.includes(semestreAtual))
                })
                
            })
            .catch(error => console.log(error))
    }
    render() {
        const { navigation } = this.props
        return (
            <View>
                <Header titulo={"Olá " + navigation.getParam('name', '')}></Header>
                <TouchableOpacity onPress={this.getDisciplinas} style={styles.button}>
                    <Text style={styles.textButton}>Disciplinas</Text>
                </TouchableOpacity>
            </View>
        )
    }
}