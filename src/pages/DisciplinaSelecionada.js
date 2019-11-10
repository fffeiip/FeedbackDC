import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native'
import firebase from 'react-native-firebase'
import styles from '../styles/Default'
import Header from '../components/Header'

class DisciplinaSelecionada extends Component {
    render() {
        const { navigation } = this.props
        return (
            <View>
                <Header titulo={navigation.getParam('name',[])}></Header>
                <TouchableOpacity style={styles.item} onPress={()=> console.log("foi")  }>
                    <Text style={styles.textButton}>Log Objeto</Text>
                  </TouchableOpacity>
            </View>
        )
    }
}

export default DisciplinaSelecionada