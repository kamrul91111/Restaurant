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
            <Text style={{color: 'white'}}>{result.rating} Stars, {result.review_count} Review</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        alignItems: 'center'
    },
    imageStyle: {
        width: 200,
        height: 200,
        borderRadius: 20,
        marginBottom: 5
    },
    namestyle: {
        fontWeight: 'bold',
        color: 'white'
    }
});

export default ResultsDetail;