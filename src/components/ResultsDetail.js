import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Subheading,
} from "react-native-paper";

const ResultsDetail = ({ result }) => {
  return (
    <Card mode="outlined" style={styles.card}>
      <Card.Cover source={{ uri: result.image_url ? result.image_url : "https://thumbs.dreamstime.com/z/no-image-available-icon-photo-camera-flat-vector-illustration-132483097.jpg" }} />
      <Card.Content>
        <Subheading
          numberOfLines={1}
          style={{ fontWeight: "bold", color: "white" }}
        >
          {result.name}
        </Subheading>
        <Paragraph style={{ color: "white" }}>
          {result.rating} Stars, {result.review_count} Review
        </Paragraph>
        <Paragraph style={{ color: "white" }}>{result.location.city}</Paragraph>
        {/* <Text numberOfLines={1} ellipsizeMode="clip">
          {result.display_phone}
        </Text> */}
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  imageStyle: {
    maxWidth: 350,
    height: 220,
    borderRadius: 4,
    marginBottom: 5,
  },
  namestyle: {
    fontWeight: "bold",
  },
  card: {
    maxWidth: 200,
    //padding: 5,
    backgroundColor: "#333",
    borderWidth: 1,
    borderColor: "white",
    margin: 2,
  },
});

export default ResultsDetail;
