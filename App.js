import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import SearchScreen from './src/screens/SearchScreen';


const navigator = createStackNavigator(
  {
      Search : SearchScreen,
      ResultsShow: ResultsShowScreen

  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Search for stuff",
      headerStyle: {
        backgroundColor: '#333',
      },
      headerTintColor: 'white',
      headerTitleAlign: 'center'
    }
  }
);

export default createAppContainer(navigator);