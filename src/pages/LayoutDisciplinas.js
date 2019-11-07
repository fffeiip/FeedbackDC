import React from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Text
} from 'react-native';

import styles from '../styles/Default'
import Header from '../components/Header';



class LayoutDisciplinas extends React.Component {
  render() {
    const { navigation } = this.props
    return (
      <View
        style={{ flex: 1 }}
        behavior='position'
        enabled>
        <Header titulo="Minhas Disciplinas"></Header>
        <SafeAreaView>
          <FlatList
            data={navigation.getParam('disciplinas', [])}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
              return (
                <View>
                  <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Disciplina',{
                    name: item.fullname
                  })}>
                    <Text style={styles.textButton}>{item.fullname}</Text>
                  </TouchableOpacity>
                </View >
              )
            }}
          />
        </SafeAreaView>
      </View>
    );
  }
}


export default LayoutDisciplinas;

