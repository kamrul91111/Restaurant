import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Feather } from "@expo/vector-icons";
import { Provided as PaperProvider } from "react-native-paper";

//searchBar
import { Searchbar } from 'react-native-paper';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
        <Searchbar 
            placeholder="What are you looking for today?"
            style="inputStyle"
            value={term}
            onChangeText={onTermChange}
            autoCorrect={false}
            onEndEditing={onTermSubmit}
            color='red'
        />
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    marginBottom: 10,
  },
  inputStyle: {
    // borderColor: 'black',
    // borderWidth: 1,
    flex: 1,
    fontSize: 18,
    padding: 18
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;
