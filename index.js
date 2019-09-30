/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Login from './src/components/Login';
import DisciplinasProfessor from './src/components/LayoutDisciplinasProfessor';
import Feedbacks from './src/components/LayoutFeedback';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Feedbacks);
