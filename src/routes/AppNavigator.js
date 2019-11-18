
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../pages/Login';
import Perfil from '../pages/Perfil';
import Disciplina from '../pages/DisciplinaSelecionada'
import { createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    Perfil: {screen: Perfil},
    Disciplina: { screen: Disciplina }
  },
  {
    headerMode: 'none'
  }
);

const AppNavigator = createAppContainer(MainNavigator)

export default AppNavigator
