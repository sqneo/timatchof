import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, ActivityIndicator, Text, View, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function App() {
    return (
        <View style={styles.container}>


            <StatusBar style="light" backgroundColor='#000' />

            {/* Texto foto  testetetstetse*/}
            <Text style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: '#ff739a',
                marginTop: 50,
                marginLeft: 50,

            }}>Adicione pelo menos uma foto</Text>

            <View style={{
                width: '40%',
                height: 200, backgroundColor: '#fff',
                elevation: 8, borderRadius: 10,
                marginTop: 110,
                position: 'absolute',
                zIndex: 0,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'flex-start',
                marginLeft: 20,

            }}>
                <Icon name='add-box' size={55} color={'#ff739a'} style={{ zIndex: 5 }} />
            </View>

            <View style={{
                width: '40%',
                height: 200, backgroundColor: '#fff',
                elevation: 8, borderRadius: 10,
                marginTop: 110,
                position: 'absolute',
                zIndex: 0,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'flex-start',
                marginLeft: 200,

            }}>
                <Icon name='add-box' size={55} color={'#ff739a'} style={{ zIndex: 5 }} />
            </View>

            <View style={{
                width: '40%',
                height: 200, backgroundColor: '#fff',
                elevation: 8, borderRadius: 10,
                marginTop: 330,
                position: 'absolute',
                zIndex: 0,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'flex-start',
                marginLeft: 200,

            }}>
                <Icon name='add-box' size={55} color={'#ff739a'} style={{ zIndex: 5 }} />
            </View>

            <View style={{
                width: '40%',
                height: 200, backgroundColor: '#fff',
                elevation: 8, borderRadius: 10,
                marginTop: 330,
                position: 'absolute',
                zIndex: 0,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'flex-start',
                marginLeft: 20,

            }}>
                <Icon name='add-box' size={55} color={'#ff739a'} style={{ zIndex: 5 }} />
            </View>

            {/* Entrar */}

            <View style={{
                width: '90%',
                height: 50, backgroundColor: '',
                elevation: 8, borderRadius: 25,
                marginTop: 565,
                position: 'absolute',
                zIndex: 0,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center'

            }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#fff' }}>Aceitar termos e entrar</Text>
            </View>


            {/* Gradient */}

            <View style={{
                width: '100%',
                height: '100%',
                borderTopLeftRadius: 0,
                alignItems: 'center'
            }}>
            </View>



        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },

});
