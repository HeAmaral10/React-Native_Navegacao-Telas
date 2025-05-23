import React from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";

const windowWidth = Dimensions.get('window').width;

export default function DetailsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Details Screen</Text>
            <TouchableOpacity style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5, margin: 10, width: windowWidth * 0.5 }} onPress={() => navigation.navigate('Home')}>
                <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Ir para home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5, margin: 10, width: windowWidth * 0.5 }} onPress={() => navigation.navigate('Profile')}>
                <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center'  }}>Ir para perfil</Text>
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