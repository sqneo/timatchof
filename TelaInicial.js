import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, ActivityIndicator, Text, View, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Foundation';
import Icon2 from 'react-native-vector-icons/Fontisto';

export default function App() {
    return (
        <View style={styles.container}>

            <StatusBar style="light" backgroundColor='#000' />


            {/* Icones */}
            <View style={{
                flexDirection: 'row',
                marginTop: 55,
                zIndex: 5,
            }}>
                <Icon name='social-facebook' size={35} color={'#93a9ad'} style={{ marginTop: 18, zIndex: 5, }} />
                <Icon name='social-skype' size={35} color={'#93a9ad'} style={{ marginTop: 18, marginLeft: 50 }} />
                <Icon2 name='google-play' size={35} color={'#93a9ad'} style={{ marginTop: 18, marginLeft: 50 }} />
            </View>

            <LinearGradient colors={['blue', 'green']}>

                <View style={{
                    width: '100%',
                    height: 900,
                    marginTop: -280,
                    backgroundColor: '#000'

                }}>
                </View></LinearGradient>

            {/* Entrar */}
            <View style={{
                width: '80%',
                height: 50, backgroundColor: '#fff',
                elevation: 8, borderRadius: 25,
                marginTop: 200,
                position: 'absolute',
                zIndex: 0,
                justifyContent: 'center',
                alignItems: 'center',

            }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>CRIAR CONTA</Text>
            </View>


            {/* Cadastrar */}
            <View style={{
                width: '80%',
                height: 50, backgroundColor: '#fff',
                elevation: 8, borderRadius: 25,
                marginTop: 120,
                position: 'absolute',
                zIndex: 0,
                justifyContent: 'center',
                alignItems: 'center',

            }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Entrar</Text>
            </View>



        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 280
    },



});
