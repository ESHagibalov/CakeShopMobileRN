import React from "react";
import {FlatList, StyleSheet, View} from "react-native";
import CakeItem from "./CakeItem";
import SomethingWentWrong from "./SomethingWentWrong";

const CakesList = ({results}) => {
    if (!results.length) {
        return <SomethingWentWrong/>; //TODO "Something went wrong screen"
    }


    return (
        <View style={styles.back}>
            <FlatList data={results} renderItem={
                ({item}) => {
                    return (
                        <View><CakeItem results={item}/></View>
                    );
                }
            }/>
        </View>
    )
}

const styles = StyleSheet.create({
    back: {
        backgroundColor: 'white',
        height: '100%'
    }
})
export default CakesList