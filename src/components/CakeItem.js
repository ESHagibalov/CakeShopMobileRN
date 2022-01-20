import React, {useState} from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import AddingToCart from "./AddingToCart";
import CakeFullInfo from "./CakeFullInfo";

const CakeItem = ({results}) => {

    const [card, setCard] = useState(true);

    return (
        <TouchableOpacity onPress={() => {
            setCard(card => !card);
        }}>
            {card &&
            <View style={styles.container}>
                <Image style={styles.image} source={require('../static/cake-tmp.png')}/>
                <View style={styles.cakeData}>
                    <Text style={styles.name}>{results.name}</Text>
                    <Text style={styles.additionalData}>Цена: {results.price} р{'\n'}
                        Вес: {results.weight} гр.</Text>
                    <AddingToCart idOfCake={results.id}/>
                </View>
            </View>}
            {!card && <CakeFullInfo result={results}/>}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: 'row',
        borderColor: 'pink',
        borderWidth: 1,
        borderRadius: 24,
        margin: '4%',
        paddingVertical: 12,
    },
    name: {
        fontWeight: "bold",
        fontSize: 20,
        paddingVertical: 6,
        flexWrap: "wrap",
    },
    image: {
        height: 200,
        width: 200,
        marginLeft: 30
    },
    cakeData: {
        alignItems: "center",
        width: '50%',
        paddingRight: 24

    },
    additionalData: {
        fontSize: 16,
    },
});

export default CakeItem;
