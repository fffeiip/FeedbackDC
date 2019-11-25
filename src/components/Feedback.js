import React from 'react';
import Emoji from 'react-native-emoji';
import styles from '../styles/Default'
import {
    View,
    Text,
} from 'react-native';


const Feedback = props => (
    <View style={styles.itemListFeedback}>
        <View style={{width: '20%'}} >
            <Emoji style={{ fontSize: 25, paddingHorizontal: 8 }} name={props.emoji} />
        </View>

        <View style={{width: '80%'}}>
            <Text
                style={styles.textFeedback}>
                {props.mensagem}
            </Text>
        </View>
    </View>
)

export default Feedback;

