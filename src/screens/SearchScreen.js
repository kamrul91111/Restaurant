import React, { useState } from "react"; //useEffect allows a code snippet to run once
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";
import { StatusBar } from "expo-status-bar";
import LottieView from "lottie-react-native";
import { Switch, Title, Paragraph, Banner } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage, loading] = useResults(); //uses the reusable hook

  /////////////Banner/////////////////
  const [visible, setVisible] = useState(false);

  const filterResultsByPrice = (price) => {
    //price === '$' || '$$' |'$$$'|
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View style={styles.container}>
      {loading === true ? (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            marginTop: -80,
          }}
        >
          <LottieView
            source={require("../../assets/atom.json")}
            style={{ width: 300 }}
            autoPlay
            loop
          />
        </View>
      ) : (
        <>
          <Banner
            style={{backgroundColor: 'lightgrey',}}
            visible={visible}
            actions={[
              {
                label: "I Understand",
                onPress: () => setVisible(false),
              },
            ]}
            icon='alert'
          >
            Hello User, The app is still under development and as of yet, you
            cannot add your location :(
          </Banner>
          <SearchBar
            term={term}
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}
          />
          {errorMessage ? (
            <Text style={{ color: "white", padding: 10, textAlign: "center" }}>
              {errorMessage}
            </Text>
          ) : null}
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => setVisible(true)}
          >
            <Entypo name="location-pin" size={24} color="white" />
            <Paragraph
              style={{ color: "white", padding: 10, textAlign: "center" }}
            >
              Location: Blacktown, NSW
            </Paragraph>
          </TouchableOpacity>
          <ScrollView style={{ marginBottom: 8, margin: 5 }}>
            <ResultsList
              title="Cheapest $"
              results={filterResultsByPrice("$")}
            />
            <ResultsList
              title="Cheaper $$"
              results={filterResultsByPrice("$$")}
            />
            <ResultsList
              title="Big Dining $$$"
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
