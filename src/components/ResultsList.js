import React from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation'; //gives access to navigation prop to child component directly
import ResultsDetail from '../components/ResultsDetail';
import { Title } from 'react-native-paper';


const ResultsList = ({ title, results, navigation }) => {
   if (!results.length) { //if no result
       return null;
   } 
//    makes the header with no search result disappear

    return (
        <View style={styles.container}>
            <Title style={styles.titleStyle}> {title} </Title>
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
        //marginLeft: 15,
        //marginBottom: 5
        padding: 15
    },
    container: {
        marginBottom: 10
    }
});

export default withNavigation(ResultsList);