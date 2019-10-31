import React from 'react';
import {
  View,
  SafeAreaView,
} from 'react-native';

import Disciplinas from '../components/Disciplinas';
import Header from '../components/Header';


class LayoutDisciplinasProfessor extends React.Component {
   render() {
    const {navigation} = this.props
    return (
      <View
        style={{ flex: 1 }}
        behavior='position'
        enabled>
        <Header titulo="Minhas Disciplinas"></Header>
        <SafeAreaView>
          <View>
            <Disciplinas item={navigation.getParam('disciplinas',[])}></Disciplinas>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}


export default LayoutDisciplinasProfessor;

