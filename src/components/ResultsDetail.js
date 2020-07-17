import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ResultsDetail = ({result}) => {
    return (
        <View style={styles.container}>
            {/* outer ones mean javascript element in this jsx block, inner ones mean object */}
            <Image 
                style={styles.imageStyle} 
                source={{uri: result.image_url}} 
            />   
            <Text style={styles.namestyle}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Review</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    imageStyle: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    namestyle: {
        fontWeight: 'bold'
    }
});

export default ResultsDetail;