import React from 'react'
import Emoji from 'react-native-emoji'
import styles from '../styles/Default'
import {
    View,
    Text,
 } from 'react-native';

const Header = props => (
    <View style={styles.header}>
        <Text style={styles.headerTitle}>
            {props.titulo}
        </Text>
        <Emoji name={"door"} style={{fontSize: 25}}> </Emoji>
    </View>
);

export default Header