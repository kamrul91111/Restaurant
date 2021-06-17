import React from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation'; //gives access to navigation prop to child component directly
import ResultsDetail from '../components/ResultsDetail';


const ResultsList = ({ title, results, navigation }) => {
   if (!results.length) {
       return null;
   } 
//    makes the header with no search result disappear

    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({item}) =>  {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', {id: item.id})}
                        >
                            <ResultsDetail result={item} />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 15,
        color: 'white'
    },
    container: {
        marginBottom: 10
    }
});

export default withNavigation(ResultsList);