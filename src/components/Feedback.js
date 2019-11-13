import React from 'react';
import Emoji from 'react-native-emoji';
import styles from '../styles/Default'
import {
    View,
    Text,
} from 'react-native';


const Feedback = props => (
    <View style={styles.itemListFeedback}>
        <Text style={styles.textButton}>
            <Emoji style={{ fontSize: 25 }} name={props.emoji} />
            {props.mensagem}
        </Text>
    </View>
)

export default Feedback;

