import React, {useContext, useState} from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Context} from "../context/CartContext";

const AddingToCart = ({idOfCake}) => {
    const {addToCart, editInCart, deleteFromCart} = useContext(Context);

    const [cakeCounter, setCakeCounter] = useState(0);

    return (
        <View style={styles.addingBack}>
            <TouchableOpacity
                onPress={() => {
                    if (cakeCounter === 1) {
                        deleteFromCart(idOfCake);
                        setCakeCounter(0);
                    } else if (cakeCounter > 0){
                        editInCart(idOfCake, cakeCounter - 1);
                        setCakeCounter(cakeCounter - 1);
                    }
                }
                }>
                <Image style={styles.minus} source={require('../static/minus.png')}/>
            </TouchableOpacity>
            <Text style={styles.counter}>{cakeCounter}</Text>
            {/*TODO fix changing counter after card info*/}
            <TouchableOpacity
                onPress={() => {
                    if (cakeCounter === 0) {
                        addToCart(idOfCake, 1);
                    } else {
                        editInCart(idOfCake, cakeCounter + 1);
                    }
                    setCakeCounter(cakeCounter + 1)
                }
                }
            >
                <Image style={styles.plus} source={require('../static/plus.png')}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    addingBack: {
        flexDirection: 'row',
    },
    plus: {
        height: 20,
        width: 20,
        backgroundColor: 'orange',
        margin: 4,
        borderRadius: 8,
        padding: 12
    },
    minus: {
        height: 25,
        width: 25,
        backgroundColor: 'orange',
        margin: 4,
        borderRadius: 8,
        paddingLeft: 4
    },
    counter: {
        paddingTop: 5,
        fontWeight: 'bold',
        fontSize: 20,
        paddingHorizontal: 8
    }
})

export default AddingToCart