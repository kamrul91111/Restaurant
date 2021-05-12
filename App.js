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
      title: "Hello Sydney",
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center'
      },
    }
  }
);

export default createAppContainer(navigator);