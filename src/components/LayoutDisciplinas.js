import React from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Text
} from 'react-native';

import styles from '../styles/Default'



class LayoutDisciplinas extends React.Component {

  exibe(item) {
    this.props.navigation.navigate('Disciplina', {
      name: item.fullname,
      disciplina_id: item.id,
      userid: this.props.navigation.getParam('userid',[])
    })
  }
  render() {
    return (
      <FlatList
        data={this.props.disciplinas}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <View style={{flex: 1}}>
              <TouchableOpacity style={styles.item} onPress={() => this.exibe(item)}>
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

