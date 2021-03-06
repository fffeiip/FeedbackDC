import React, { Component } from 'react'
import styles from '../styles/Default'
import {
    View,
    Text,
    SafeAreaView
} from 'react-native';
import Header from '../components/Header';
import ListDisciplinas from '../components/LayoutDisciplinas'


export default class Perfil extends Component {

    constructor(props) {
        super(props)
        this.state = {
            department: '',
            disciplinas: '',
            userid: ''
        }
    }

    componentDidMount() {
        const { navigation } = this.props
        var data3 = new FormData()
        data3.append('wstoken', navigation.getParam('token', ''))
        data3.append('wsfunction', 'core_user_get_users_by_id')
        data3.append('userids[0]', navigation.getParam('userid', ''))
        const response = fetch('http://ava.ufrpe.br/webservice/rest/server.php?moodlewsrestformat=json', {
            method: 'POST',
            body: data3
        })
            .then((response) => response.json())
            .then(responseJSON => {
                var date = new Date()
                var ano = date.getFullYear()
                var semestre = date.getMonth() > 6 ? 2 : 1
                var semestreAtual = ano + "." + semestre
                this.setState({ userid: responseJSON[0].id })
                this.setState({ department: responseJSON[0].department })
                this.setState({ disciplinas: responseJSON[0].enrolledcourses.filter(item => item.fullname.includes(semestreAtual)) })
            })
            .catch(error => console.log(error))
    }

    formatString = str => {
        return str
            .replace(/(\B)[^ ]*/g, match => (match.toLowerCase()))
            .replace(/^[^ ]/g, match => (match.toUpperCase()));
    }

    render() {
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <Header navigation={this.props.navigation} titulo={this.formatString(this.state.department)}></Header>
                <View
                    style={styles.headerTitle}
                >

                    <Text style={{ fontSize: 20, alignSelf: 'center' }}>
                        {"Olá " + this.formatString(navigation.getParam('name', ''))+ ". Selecionar dentre as disciplinas do semestre:"}
                        
                    </Text>
                </View>
                <SafeAreaView style={{ flex: 1 }}>
                    <ListDisciplinas navigation={navigation} disciplinas={this.state.disciplinas} />
                </SafeAreaView>
            </View>
        )
    }
}
