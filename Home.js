import React from 'react';
import AppNavigator from './src/routes/AppNavigator';

export default class App extends React.Component {
  
  constructor(props){
    super(props)
    this.state ={
      name : '',
      disciplinas : '',
      token: '',
      userid: ''
    }
  }

  render() {
    return (
      <AppNavigator
        screenProps={{
          name: this.state.name,
          token: this.state.token,
          disciplinas: this.state.disciplinas,
          userid: this.state.userid
        }}
      />
    );
  }
}
