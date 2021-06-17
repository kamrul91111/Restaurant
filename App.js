import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";
import SearchScreen from "./src/screens/SearchScreen";
import { TransitionPresets } from 'react-navigation-stack';
import { LogBox } from "react-native";

// /LogBox.ignoreAllLogs(true)

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Restaurant Finder",
      headerStyle: {
        backgroundColor: "#333",
      },
      headerTintColor: "white",
      headerTitleAlign: "center",
      gestureEnabled: true,
      cardOverlayEnabled: true,
      ...TransitionPresets.FadeFromBottomAndroid   //adds animation    
    },
  }
);

export default createAppContainer(navigator);
