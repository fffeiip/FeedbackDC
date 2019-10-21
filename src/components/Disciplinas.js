import React from 'react'
import styles from '../styles/Default'
import {
    View,
    FlatList,
    Text,
} from 'react-native';

const Disciplinas = props => (
    <FlatList
        data={props.item}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
            return (
                <View style={styles.item}>
                    <Text style={styles.textButton}>{item.name}</Text>
                </View>
            )
        }}
    />

);

export default Disciplinas