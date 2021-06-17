import React, { useState } from "react"; //useEffect allows a code snippet to run once
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchBar from '../components/SearchBar';
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults(); //uses the reusable hook

  const filterResultsByPrice = (price) => {
    //price === '$' || '$$' |'$$$'|
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView style={{marginBottom: 60}}>
        <ResultsList
          title="Cost Effective"
          results={filterResultsByPrice("$")}
        />
        <ResultsList title="Bit Pricier" results={filterResultsByPrice("$$")} />
        <ResultsList
          title="Big Spender"
          results={filterResultsByPrice("$$$")}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1F2525'
    }
});

export default SearchScreen;
