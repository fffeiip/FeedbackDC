import React, { Component } from 'react'
import Emoji from 'react-native-emoji';

import {
    View,
    SafeAreaView,
    Text,
    FlatList,
    TouchableOpacity,
} from 'react-native'
import firebase from 'react-native-firebase'
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
            data: [
                //TESTES - puxar do firebase e setar no componentdidmount
                { id: "00", mensagem: "Achei massa!", emoji: "+1" },
                { id: "01", mensagem: "Topster", emoji: "+1" },
                { id: "02", mensagem: "Fala muito alto!", emoji: "confused" },
                { id: "03", mensagem: "Escreve muito!", emoji: "confused" },
                { id: "04", mensagem: "Só lê slide", emoji: "confused" },
                { id: "05", mensagem: "Amei a aula!", emoji: "+1" },
                { id: "06", mensagem: "Amei a aufaofasofaofaofaoafoioijdfaoijdfaojidfajdfaoijdfaojidfaojidfifdaojidfaoijdfaoijdfaojidfaojidfifdaojidfaoijdfaoijdfaojidfaojidfifdaojidfaoijdfaoijdfaojidfaojidfifdaojidfaoijdfaoijdfaojidfaojidfifdaojidfaoijdfaoijdfaojidfaojidfifdaojidfaoijdfaoijdfaojidfaojidfifdaojidfaoijdfaoijdfaojidfaojidfifdaojidfaoijdfaoijdfaojidfaojidfifdaojidfaoijdfaoijdfaojidfaojidfaojidffdjala!", emoji: "+1" },
            ]
        }
    }

    post_firebase = (emoji) => {
        disciplina_id = this.state.disciplina_id
        usuario_id = this.state.userid
        mensagem = this.state.mensagem_feedback
        firebase.database().ref('feedbacks/').push({
            mensagem,
            disciplina_id,
            emoji,
            usuario_id
        }).then((data) => {
            //success callback
            console.log('data ', data)
        }).catch((error) => {
            //error callback
            console.log('error ', error)
        })
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
                        onChangeText={(feedback) => this.setState({ feedback })}
                        value={this.state.text}
                    />
                </SafeAreaView>
                <View style={styles.containerButtonFeedback}>
                    <TouchableOpacity style={styles.itemFeedbak} onPress={() => console.log(this.state)}>
                        <Text style={styles.textButton}><Emoji style={{fontSize: 25}} name={":blush:"} /></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemFeedbak} onPress={() => this.post_firebase()}>
                        <Text style={styles.textButton}><Emoji style={{fontSize: 25}} name={":neutral_face:"} /></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemFeedbak} onPress={() => this.post_firebase()}>
                        <Text style={styles.textButton}><Emoji style={{fontSize: 25}} name={":confused:"} /></Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={styles.containerList}>
                    <FlatList
                        data={this.state.data}
                        keyExtractor={item => item.id}
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

