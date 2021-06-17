import React, { useState } from "react"; //useEffect allows a code snippet to run once
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";
import { StatusBar } from "expo-status-bar";
import LottieView from "lottie-react-native";
import { Switch } from "react-native-paper";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage, loading] = useResults(); //uses the reusable hook

  const filterResultsByPrice = (price) => {
    //price === '$' || '$$' |'$$$'|
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View style={styles.container}>
      {loading === true ? (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1, marginTop: -80}}>
          <LottieView source={require('../../assets/atom.json')} style={{width: 300}} autoPlay loop />
        </View>
      ) : (
        <>
          <SearchBar
            term={term}
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}
          />
          {errorMessage ? <Text>{errorMessage}</Text> : null}
          <ScrollView style={{ marginBottom: 10 }}>
            <ResultsList
              title="Cost Effective"
              results={filterResultsByPrice("$")}
            />
            <ResultsList
              title="Bit Pricier"
              results={filterResultsByPrice("$$")}
            />
            <ResultsList
              title="Big Spender"
              results={filterResultsByPrice("$$$")}
            />
          </ScrollView>
          <StatusBar style="light" />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#333",
    flex: 1,
  },
});

export default SearchScreen;
