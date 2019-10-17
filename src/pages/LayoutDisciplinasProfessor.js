/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  FlatList,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


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
              <View style={styles.header}>
                  <Text style={styles.title}>Disciplinas Cadastradas</Text>
                  {/* Mudar nme minhas disciplinas */}
                  
              </View>
              <View style={styles.viewInput}>
                <TextInput style={styles.textInput} placeholder="Pesquisar Disciplinas">
                </TextInput>
              </View>
             
      <SafeAreaView>
        <View><FlatList
          data={this.state.data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <View style={styles.item}>
                <Text style={styles.text}>{item.name}</Text>
              </View>
            );
          }}
        /></View>
      </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  textInput: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 16,
    color: '#008b8b',
    padding: 10,
  },
  title: {
    padding: 20,
    fontSize: 24,
    color: '#ffffff',
    fontWeight: "bold"
  },
  header: {
    backgroundColor: '#f09',
    alignItems: "center"
  },
  item: {
    alignItems: "center",
    backgroundColor: "#00008b",
    flexGrow: 1,
    margin: 4,
    padding: 20
  },
  text: {
    color: "#fff8dc"
  },
});

export default LayoutDisciplinasProfessor;

