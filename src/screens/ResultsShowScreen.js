import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
  Linking,
} from "react-native";
import yelp from "../api/yelp";
import {
  Headline,
  Subheading,
  Title,
  Paragraph,
  IconButton,
} from "react-native-paper";
import LottieView from "lottie-react-native";

var { width } = Dimensions.get("window");

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const id = navigation.getParam("id");


  //loading timeout
  setTimeout(() => {
    setLoading(false);
  }, 1000);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  //console.log(result.special_hours)

  return (
    <ScrollView style={styles.container}>
      {loading === true ? (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 150,
            flex: 1,
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
          <View
            style={{
              backgroundColor: "darkred",
              width: width,
              height: 65,
              justifyContent: "center",
            }}
          >
            <Title style={{ color: "white", textAlign: "center" }}>
              {result.name} || Expense Rating: {result.price}
            </Title>
          </View>
          <FlatList
            horizontal
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({ item }) => {
              return <Image style={styles.image} source={{ uri: item }} />;
            }}
          />
          <View
            style={{
              backgroundColor: "black",
              marginTop: 30,
              margin: 10,
              padding: 15,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                //justifyContent: "center",
              }}
            >
              <IconButton
                icon="phone"
                color={"yellow"}
                size={20}
                onPress={() => Linking.openURL(`tel: ${result.phone}`)}
              />
              <Subheading style={styles.text}>
                Phone: {result.display_phone}
              </Subheading>
            </View>
            <Subheading style={[styles.text, { marginTop: 5 }]}>
              Rating: {result.rating}
            </Subheading>
            <Subheading style={[styles.text]}>
              Restaurant has been rated by
              <Title style={{ color: "yellow" }}> {result.review_count} </Title>
              Patrons on Yelp
            </Subheading>
            <Title style={styles.text}>
              Location
            </Title>
            <Subheading style={styles.text}>
              {result.location.address1}, {result.location.address2}
            </Subheading>
            <Subheading style={styles.text}>
              {result.location.city}, {result.location.state} -{" "}
              {result.location.zip_code}, {result.location.country}
            </Subheading>
            <Subheading style={styles.text}></Subheading>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center',}}>
              <IconButton
                style={{marginRight: -15}}
                icon="web"
                color={"red"}
                size={20}
                onPress={() => Linking.openURL(`${result.url}`)}
              />
              <Subheading style={styles.text}>Check reviews on yelp</Subheading>
            </View>
          </View>
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#333",
    flex: 1,
  },
  image: {
    height: 250,
    width: width,
    margin: 8,
    borderRadius: 10,
    borderColor: 'lightgrey',
    borderWidth: 0.5
  },
  text: {
    color: "white",
    margin: 15,
  },
});

export default ResultsShowScreen;
