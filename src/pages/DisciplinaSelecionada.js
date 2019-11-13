import React, { Component } from 'react'
import Emoji from 'react-native-emoji';

import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native'
import firebase from 'react-native-firebase'
import styles from '../styles/Default'
import Header from '../components/Header'
import { TextInput } from 'react-native-gesture-handler'

class DisciplinaSelecionada extends Component {

    constructor(props) {
        super(props)
        this.state = {
            mensagem_feedback: "",
            titulo: this.props.navigation.getParam('name', []),
            disciplina_id: "",
            userid: ""
        }
    }
    componentDidMount() {
        const { navigation } = this.props
        this.setState({ titulo: navigation.getParam('name', []) })
        this.setState({ disciplina_id: navigation.getParam('disciplina_id', []) })
        this.setState({ userid: navigation.getParam('userid', []) })
    }

    post_firebase = (disciplina_id) => {
        disciplina_id = this.state.disciplina_id
        usuario_id = this.state.userid
        mensagem = this.state.mensagem_feedback
        firebase.database().ref('feedbacks/').push({
            mensagem,
            disciplina_id,
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
                <View style={styles.viewInput}>
                    <TextInput
                        style={styles.textInput}
                        multiline={true}
                        numerOfLines={4}
                        onChangeText={(feedback) => this.setState({ feedback })}
                        value={this.state.text}
                    />
                </View>
                {/* <View style={[styles.containerButtonFeedback]}>
                        <TouchableOpacity style={styles.itemFeedbak} onPress={() => console.log(this.state)}>
                            <Text style={styles.textButton}><Emoji name={":alien:"} /></Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.itemFeedbak} onPress={() => this.post_firebase()}>
                            <Text style={styles.textButton}><Emoji name={":ghost:"} /></Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.itemFeedbak} onPress={() => this.post_firebase()}>
                            <Text style={styles.textButton}><Emoji name={":skull:"} /></Text>
                        </TouchableOpacity>
                    </View> */}
            </View>
        )
    }
}

export default DisciplinaSelecionada

