import React from 'react'
import Emoji from 'react-native-emoji'
import styles from '../styles/Default'
import {
    View,
    TouchableOpacity,
    Text,
} from 'react-native';

const Header = props => (
    <View style={styles.header}>
        <Text style={styles.headerTitle}>
            {props.titulo}
        </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>

            <Emoji name={"door"} style={{ fontSize: 25 }}> </Emoji>
        </TouchableOpacity>
    </View>
);

export default Header