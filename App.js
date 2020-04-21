import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import componentsScreen from './src/screens/componentsScreen';
import listScreens from './src/screens/listScreens';
import imageScreen from './src/screens/imageScreen';
import counterScreen from './src/screens/counterScreen';
import colorScreen from './src/screens/colorScreen';
import squareScreen from './src/screens/squareScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: componentsScreen,
    List: listScreens,
    Images: imageScreen,
    Counter: counterScreen,
    Color: colorScreen,
    Square: squareScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
