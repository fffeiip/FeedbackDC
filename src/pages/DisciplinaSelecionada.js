import React, { Component } from 'react'
import {
    View,
    Text,
} from 'react-native'
import Header from '../components/Header'

class DisciplinaSelecionada extends Component {
     render() {
        const { navigation } = this.props
        return (
            <View>
                <Header titulo={navigation.getParam('name',[])}></Header>
            </View>
        )
    }
}

export default DisciplinaSelecionada