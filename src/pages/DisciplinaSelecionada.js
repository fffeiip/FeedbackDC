import React, { Component } from 'react'
import Emoji from 'react-native-emoji';
import {
    LineChart,
    PieChart,
} from "react-native-chart-kit";

import {
    View,
    SafeAreaView,
    Text,
    FlatList,
    TouchableWithoutFeedback,
    TouchableOpacity,
    ScrollView,
    Dimensions
} from 'react-native'
import database from '@react-native-firebase/database'
import styles from '../styles/Default'
import Header from '../components/Header'
import Feedback from '../components/Feedback'
// import TimeLineFeedbacks from '../components/TimeLineFeedbacks'

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
            data: "",
            sentimentos: [0, 0, 0]

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
            console.log("QUANTIDADE DE EMOJIS: " + this.contarEmoji() + this.state.sentimentos)
        });
    }

    post_firebase = (emoji) => {
        var hoje = new Date()
        let feedback = {
            mensagem: this.state.mensagem_feedback,
            emoji: emoji,
            dataFeedback: hoje.getDate() + '-' + hoje.getMonth() + '-' + hoje.getFullYear()
        }
        let dbRef = database().ref(`disciplina_id/${this.state.disciplina_id}/usuario_id/${this.state.userid}`)

        dbRef.push({
            feedback
        }).then((data) => {
            this.setState({ mensagem_feedback: "" })
            //success callback

            console.log('feedback ', feedback)
            console.log('data ', data)
        }).catch((error) => {
            //error callback
            console.log('error ', error)
        })
    }

    contarEmoji = () => {
        var blush = 0;
        var neutral = 0;
        var confused = 0;
        var pos = this.state.data.indexOf(":blush:")
        this.state.data.forEach(element => {
            if (element.emoji == ":blush:") {
                blush = blush + 1
            } else if (element.emoji == ":neutral_face:") {
                neutral = neutral + 1
            } else if (element.emoji == ":confused:") {
                confused = confused + 1
            }
        })

        var emojisFeedback = [blush, neutral, confused]
        this.setState({
            sentimentos: emojisFeedback
        })
        return emojisFeedback
    }

    render() {
        if (this.state.professor) {
            return (
                <SafeAreaView style={styles.container}>
                    <Header navigation={this.props.navigation} titulo={this.state.titulo} />
                    <ScrollView>
                        <View style={{ paddingHorizontal: 5, borderBottomWidth: 10, borderTopWidth: 5, borderColor: '#53fd79', backgroundColor: '#aaa' }}>
                            <Text style={{ fontSize: 20, alignSelf: 'center' }}>Todos Feedbacks</Text>
                            <LineChart
                                data={
                                    {
                                        labels: ["Feliz", "Indeciso", "Infeliz"],
                                        datasets: [
                                            {
                                                data: [
                                                    this.state.sentimentos[0],
                                                    this.state.sentimentos[1],
                                                    this.state.sentimentos[2],
                                                ]
                                            }
                                        ]
                                    }
                                }
                                fontSize={10}
                                width={Dimensions.get("window").width - 10} // from react-native
                                height={220}
                                chartConfig={{
                                    backgroundColor: "#e26a00",
                                    backgroundGradientFrom: "#15fb",
                                    backgroundGradientTo: "#ffa726",
                                    decimalPlaces: 0, // optional, defaults to 2dp
                                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                    style: {
                                        borderRadius: 16,
                                    },
                                    propsForDots: {
                                        r: "5",
                                        strokeWidth: "10",
                                        stroke: "#ffa726"
                                    }
                                }}
                                bezier
                                style={{
                                    marginVertical: 8,
                                    borderRadius: 16
                                }}
                            />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <Emoji style={{ fontSize: 25 }} name={":blush:"} />
                                <Text style={{ fontSize: 20, alignSelf: 'center' }}>Feliz</Text>
                                <Emoji style={{ fontSize: 25 }} name={":neutral_face:"} />
                                <Text style={{ fontSize: 20, alignSelf: 'center' }}>Indeciso</Text>
                                <Emoji style={{ fontSize: 25 }} name={":confused:"} />
                                <Text style={{ fontSize: 20, alignSelf: 'center' }}>Infeliz</Text>
                            </View>
                        </View>
                        <View
                            style={styles.containerList}>
                            <Text style={{ fontSize: 20, alignSelf: 'center' }}>
                                {"Ultimos Feedbacks Realizados: "}
                            </Text>
                            <View style={{ height: 300 }}>
                                <ScrollView
                                    nestedScrollEnabled={true}>
                                    <FlatList

                                        data={this.state.data}
                                        keyExtractor={item => item.key}
                                        renderItem={({ item }) => {
                                            return (
                                                <View>
                                                    <TouchableWithoutFeedback onPress={() => { }}>
                                                        <Feedback emoji={item.emoji} mensagem={item.mensagem} />
                                                    </TouchableWithoutFeedback>
                                                </View>
                                            )
                                        }}
                                    />
                                </ScrollView>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
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

