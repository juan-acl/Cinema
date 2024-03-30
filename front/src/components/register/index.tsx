import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet } from "react-native";

const Register = () => {
    return (
        <SafeAreaView style={styles.container} >
            <Text style={styles.text} >
                Register component
            </Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#272727"
    },
    text: {
        color: "white"
    }
})

export default Register;