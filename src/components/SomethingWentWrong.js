import {Text, View, StyleSheet} from "react-native";
import {ActivityIndicator} from "react-native";

const SomethingWentWrong = ({result}) => {

    return(
        <View style={styles.main}>
            <ActivityIndicator size="large" color="#F9B740" />
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        justifyContent: 'center',
        height: '100%'
    }
})

export default SomethingWentWrong