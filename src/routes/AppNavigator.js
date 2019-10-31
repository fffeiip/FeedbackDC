
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../pages/Login';
import Perfil from '../pages/Perfil';
import Layout from '../pages/LayoutDisciplinasProfessor';
import { createAppContainer } from 'react-navigation';

const MainNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    Perfil: { screen: Perfil },
    Layout: { screen: Layout }
  },
  {
    headerMode: 'none'
  }
);

const AppNavigator = createAppContainer(MainNavigator)

export default AppNavigator
