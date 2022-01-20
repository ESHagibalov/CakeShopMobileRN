import React from "react";
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import useResults from "../hooks/useResults";
import CakesList from "../components/CakesList";
import SearchBar from "../components/SearchBar";


function AllCakesSearchScreen() {
    const [allCakesApi, allCakesList, errorMessage, getCakeByIdApi, cakeById] = useResults();

    allCakesApi()
    return (
        <View style={styles.main}>
            <SearchBar />
            <CakesList results={allCakesList}/>
        </View>
    )
}

AllCakesSearchScreen.navigationsOptions = ({navigation}) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Image source={require("../static/user.png")}/>
            </TouchableOpacity>
        )
    }
}//TODO isn't work


const styles = StyleSheet.create({
    main: {
        backgroundColor: 'white',
        height: '100%',
        paddingBottom: '12%'
    }
});

export default AllCakesSearchScreen