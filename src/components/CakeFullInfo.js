import {Text, View, StyleSheet} from "react-native";

const CakeFullInfo = ({result}) => {
    console.log(result.composition)
    console.log(result.shelf_life)

    return(
        <View style={styles.container}>
            <Text style={styles.name}>{result.name}</Text>
            <Text>Калорийность: {result.calories} ккал</Text>
            <Text>Состав: {result.composition}</Text>
            <Text>Срок годности: {result.shelf_life}</Text>
            <Text>Цена: {result.price} р</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: '#FFEAC4',
        flexDirection: 'column',
        borderColor: 'pink',
        borderWidth: 1,
        borderRadius: 24,
        margin: 16,
        paddingVertical: 12
    },
    name: {
        fontWeight: "bold",
        fontSize: 20,
        paddingVertical: 6,
    }
})

export default CakeFullInfo