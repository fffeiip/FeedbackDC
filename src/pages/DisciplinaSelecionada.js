import React, { Component } from 'react'
import Emoji from 'react-native-emoji';

import {
    View,
    SafeAreaView,
    Text,
    FlatList,
    TouchableWithoutFeedback,
    TouchableOpacity,
} from 'react-native'
import database from '@react-native-firebase/database'
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
            professor: this.props.navigation.getParam('professor', ''),
            data: ""

        }
    }

    componentDidMount() {
        if (this.state.professor == true) {
            var dbRef = database().ref(`disciplina_id/${this.state.disciplina_id}`)
        } else {
            var dbRef = database().ref(`disciplina_id/${this.state.disciplina_id}/usuario_id/${this.state.userid}`)
        }
        this.listenerFirebase(dbRef)
    }

    listenerFirebase(dbRef) {
        dbRef.on("value", dataSnapshot => {
            var feedbacks = []
            if (this.state.professor) {
                dataSnapshot.forEach(child => {

                    child.forEach(neto => {
                        neto.forEach(bisneto => {
                            feedbacks.push({
                                emoji: bisneto.val().feedback.emoji,
                                mensagem: bisneto.val().feedback.mensagem,
                                key: bisneto.key
                            });
                        })
                    })
                });
            }
            else {
                dataSnapshot.forEach(child => {
                    feedbacks.push({
                        emoji: child.val().feedback.emoji,
                        mensagem: child.val().feedback.mensagem,
                        key: child.key
                    });
                });

            }

            this.setState({
                data: feedbacks.reverse()
            });
        });
    }

    post_firebase = (emoji) => {
        let feedback = {
            mensagem: this.state.mensagem_feedback,
            emoji: emoji,
        }
        let dbRef = database().ref(`disciplina_id/${this.state.disciplina_id}/usuario_id/${this.state.userid}`)

        dbRef.push({
            feedback
        }).then((data) => {
            this.setState({ mensagem_feedback: "" })
            //success callback
            console.log('data ', data)
        }).catch((error) => {
            //error callback
            console.log('error ', error)
        })
    }
    render() {
        if (this.state.professor) {
            return (
                <View style={styles.container}>
                    <Header navigation={this.props.navigation} titulo={this.state.titulo} />
                    <View
                        style={styles.containerList}>
                        <Text style={{ fontSize: 20, alignSelf: 'center' }}>
                            {"Ultimos Feedbacks Realizados: "}
                        </Text>
                        <FlatList
                            data={this.state.data}
                            keyExtractor={item => item.key}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableWithoutFeedback onPress={() => { }}>
                                        <Feedback emoji={item.emoji} mensagem={item.mensagem} />
                                    </TouchableWithoutFeedback>
                                )
                            }}
                        />
                    </View>
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <Header navigation={this.props.navigation} titulo={this.state.titulo} />

                    <SafeAreaView style={styles.viewInput}>
                        <TextInput
                            style={styles.textInput}
                            multiline={true}
                            numberOfLines={6}
                            placeholder="Escrever Feedback..."
                            onChangeText={(mensagem_feedback) => this.setState({ mensagem_feedback })}
                            value={this.state.mensagem_feedback}
                        />
                    </SafeAreaView>
                    <View style={styles.containerButtonFeedback}>
                        <TouchableOpacity style={styles.itemFeedbak} onPress={() => this.state.mensagem_feedback ? this.post_firebase(":blush:") : ""}>
                            <Text style={styles.textButton}><Emoji style={{ fontSize: 25 }} name={":blush:"} /></Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.itemFeedbak} onPress={() => this.state.mensagem_feedback ? this.post_firebase(":neutral_face:") : ""}>
                            <Text style={styles.textButton}><Emoji style={{ fontSize: 25 }} name={":neutral_face:"} /></Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.itemFeedbak} onPress={() => this.state.mensagem_feedback ? this.post_firebase(":confused:") : ""}>
                            <Text style={styles.textButton}><Emoji style={{ fontSize: 25 }} name={":confused:"} /></Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={styles.containerList}>
                        <Text style={{ fontSize: 20, alignSelf: 'center' }}>
                            {"Ultimos Feedbacks Realizados: "}
                        </Text>
                        <FlatList
                            data={this.state.data}
                            keyExtractor={item => item.key}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableWithoutFeedback onPress={() => { }}>
                                        <Feedback emoji={item.emoji} mensagem={item.mensagem} />
                                    </TouchableWithoutFeedback>
                                )
                            }}
                        />
                    </View>
                </View>
            )
        }

    }
}

export default DisciplinaSelecionada

