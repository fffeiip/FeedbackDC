import React from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Text
} from 'react-native';

import styles from '../styles/Default'



class LayoutDisciplinas extends React.Component {
  render() {
    return (
      <FlatList
        data={this.props.disciplinas}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <View>
              <TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate('Disciplina', {
                name: item.fullname,
                disciplina_id: item.id
              })}>
                <Text style={styles.textButton}>{item.fullname}</Text>
              </TouchableOpacity>
            </View >
          )
        }}
      />
    );
  }
}


export default LayoutDisciplinas;

