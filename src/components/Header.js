import React from 'react'
import Emoji from 'react-native-emoji'
import styles from '../styles/Default'
import {
    View,
    Text,
 } from 'react-native';

const Header = props => (
    <View style={styles.header}>
        <Text style={styles.title}>
            {props.titulo}
        </Text>
        <Emoji name={"door"} style={styles.emoji}> </Emoji>
    </View>
);

export default Header