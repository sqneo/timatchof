import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, ActivityIndicator, Text, View, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function App() {
    return (
        <View style={styles.container}>

            <View style={{ width: '60%', height: 50, backgroundColor: '#58b4d9', elevation: 8, borderRadius: 25, marginTop: 520, alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#fff' }}>
                    Aceitar
          </Text>
            </View>
            <Text style={{ fontWeight: 'bold', marginTop: 60, alignSelf: 'center', alignItems: 'center', marginTop: 20, fontSize: 13, justifyContent: 'center' }}>
                Aceitar termos e entrar.</Text>

            <TextInput style={{ fontWeight: 'bold', alignSelf: 'center', alignItems: 'center', marginTop: -300, fontSize: 15 }}>
                Insira suas fotos bla bla bla bla bla bla
</TextInput>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: '#fff',
    },

});
