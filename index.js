import {AppRegistry} from 'react-native';
import createApp from './src/index';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => createApp);
