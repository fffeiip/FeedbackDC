import React, { Component } from 'react'
import Emoji from 'react-native-emoji';

import {
    View,
    SafeAreaView,
    Text,
    FlatList,
    TouchableOpacity,
} from 'react-native'
import firebase from '../api/Firebase'
import styles from '../styles/Default'
import Header from '../components/Header'
import Feedback from '../components/Feedback'
import { TextInput } from 'react-native-gesture-handler'

class DisciplinaSelecionada extends Component {
 

    constructor(props) {
        super(props)
        this.state = {
            mensagem_feedback: "",
            titulo: this.props.navigation.getParam('name', []),
            disciplina_id: this.props.navigation.getParam('disciplina_id', []),
            userid: this.props.navigation.getParam('userid', []),
            data: ""
            // [
            //     //TESTES - puxar do firebase e setar no componentdidmount
            //     { id: "00", mensagem: "Achei massa!", emoji: "+1" },
            //     { id: "01", mensagem: "Topster", emoji: "+1" },
            //     { id: "02", mensagem: "Fala muito alto!", emoji: "confused" },
            //     { id: "03", mensagem: "Escreve muito!", emoji: "confused" },
            //     { id: "04", mensagem: "Só lê slide", emoji: "confused" },
            //     { id: "05", mensagem: "Amei a aula!", emoji: "+1" },
            //     { id: "06", mensagem: "Amei a aufaofasofaofaofaoafoioijdfaoijdfaojidfajdfaoijdfaojidfaojidfifdaojidfaoijdfaoijdfaojidfaojidfifdaojidfaoijdfaoijdfaojidfaojidfifdaojidfaoijdfaoijdfaojidfaojidfifdaojidfaoijdfaoijdfaojidfaojidfifdaojidfaoijdfaoijdfaojidfaojidfifdaojidfaoijdfaoijdfaojidfaojidfifdaojidfaoijdfaoijdfaojidfaojidfifdaojidfaoijdfaoijdfaojidfaojidfifdaojidfaoijdfaoijdfaojidfaojidfaojidffdjala!", emoji: "+1" },
            // ]
        }
    }

    post_firebase = (emoji) => {
        // var disciplina_id = this.state.disciplina_id
        // var usuario_id = this.state.userid
        // var mensagem = this.state.mensagem_feedback
        // console.log(disciplina_id)
        // console.log(usuario_id)
        // console.log(mensagem)
        let post = {
            mensagem : this.state.mensagem_feedback,
            emoji : emoji,
            usuario_id: this.state.userid,
            disciplina_id: this.state.disciplina_id
        }
        console.log(firebase.database)
        // let dbRef = firebase.database().ref();
        // console.log(dbRef)
        // console.log(firebase)
        // dbRef.push({
        //    post
        // }).then((data) => {
        //     //success callback
        //     console.log('data ', data)
        // }).catch((error) => {
        //     //error callback
        //     console.log('error ', error)
        // })
    }
    render() {
        return (
            <View>
                <Header titulo={this.state.titulo} />
                <SafeAreaView style={styles.viewInput}>
                    <TextInput
                        style={styles.textInput}
                        multiline={true}
                        numberOfLines={6}
                        onChangeText={(mensagem_feedback) => this.setState({ mensagem_feedback })}
                        value={this.state.text}
                    />
                </SafeAreaView>
                <View style={styles.containerButtonFeedback}>
                    <TouchableOpacity style={styles.itemFeedbak} onPress={() => this.post_firebase(":blush:")}>
                        <Text style={styles.textButton}><Emoji style={{fontSize: 25}} name={":blush:"} /></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemFeedbak} onPress={() => this.post_firebase(":neutral_face:")}>
                        <Text style={styles.textButton}><Emoji style={{fontSize: 25}} name={":neutral_face:"} /></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemFeedbak} onPress={() => this.post_firebase(":confused:")}>
                        <Text style={styles.textButton}><Emoji style={{fontSize: 25}} name={":confused:"} /></Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={styles.containerList}>
                    <FlatList
                        data={this.state.data}
                        keyExtractor={item => item.mensagem} //mensagem? id? what?
                        renderItem={({ item }) => {
                            return (
                                <Feedback emoji={item.emoji} mensagem={item.mensagem}/>
                            )
                        }}
                    />
                </View>
            </View>
        )
    }
}

export default DisciplinaSelecionada

