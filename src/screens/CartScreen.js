import React, {useContext} from "react";
import {FlatList, Text, View} from "react-native";
import {Context} from "../context/CartContext";
import useResults from "../hooks/useResults";
import CakeItem from "../components/CakeItem";

function CartScreen({navigation}) {
    const {state} = useContext(Context);
    const [allCakesApi, allCakesList, errorMessage, getCakeByIdApi, cakeById] = useResults();

    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={(cake) => cake.name}
                renderItem={({item}) => {
                    return (
                        <Text>{getCakeByIdApi(item.id).name} {item.id}</Text>
                    );
                }}/>
        </View>
    )
}

export default CartScreen