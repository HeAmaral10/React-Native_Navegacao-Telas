import React from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";

const windowWidth = Dimensions.get('window').width;

export default function ProfileScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile Screen</Text>
            <TouchableOpacity style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5, margin: 10, width: windowWidth * 0.5}} onPress={() => navigation.navigate('Details')}>
                <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center'  }}>Ir para detalhes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5, margin: 10, width: windowWidth * 0.5}} onPress={() => navigation.goBack()}>
                <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center'  }}>Ir para tela anterior</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f8ff',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});