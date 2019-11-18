import React from 'react';
import Emoji from 'react-native-emoji';
import styles from '../styles/Default'
import {
    View,
    Text,
} from 'react-native';


const Feedback = props => (
    <View style={styles.itemListFeedback}>
        <Emoji style={{ fontSize: 25, paddingHorizontal: 8 }} name={props.emoji} />
        <Text style={styles.textButton}>
            {props.mensagem}
        </Text>
    </View>
)

export default Feedback;

