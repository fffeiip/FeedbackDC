import React from 'react';
import {
  View,
  SafeAreaView,
} from 'react-native';

import Disciplinas from '../components/Disciplinas';
import Header from '../components/Header';


class LayoutDisciplinasProfessor extends React.Component {
  state = {
    data: [
      { id: "00", name: "Metodologias Ágeis" },
      { id: "01", name: "Banco de Dados" },
      { id: "02", name: "Egenharia de Software" },
      { id: "03", name: "Projetão" }
    ]
  };
  render() {
    return (
      <View
        style={{ flex: 1 }}
        behavior='position'
        enabled>
        <Header titulo="Minhas Disciplinas"></Header>
        <SafeAreaView>
          <View>
            <Disciplinas item={this.state.data}></Disciplinas>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}


export default LayoutDisciplinasProfessor;

