import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function App() {
    return (
        <View style={styles.container}>


            <StatusBar style="light" backgroundColor='#000' />

            {/* Texto foto */}
            <Text style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: '#ff739a',
                marginTop: 50,

            }}>Adicione pelo menos uma foto</Text>

            <View style={styles.imageRow}>

                <View style={styles.imageContainer}>
                    <TouchableOpacity>
                        <Icon name='add-box' size={55} color={'#ff739a'} style={{ zIndex: 5 }} />
                    </TouchableOpacity>
                </View>

                <View style={styles.imageContainer}>
                    <TouchableOpacity>
                        <Icon name='add-box' size={55} color={'#ff739a'} style={{ zIndex: 5 }} />
                    </TouchableOpacity>
                </View>

            </View>

            <View style={styles.imageRow}>

                <View style={styles.imageContainer}>
                    <TouchableOpacity>
                        <Icon name='add-box' size={55} color={'#ff739a'} style={{ zIndex: 5 }} />
                    </TouchableOpacity>
                </View>

                <View style={styles.imageContainer}>
                    <TouchableOpacity>
                        <Icon name='add-box' size={55} color={'#ff739a'} style={{ zIndex: 5 }} />
                    </TouchableOpacity>
                </View>

            </View>

            {/* Entrar */}

            <TouchableOpacity style={{
                width: '60%',
                height: 50,
                backgroundColor: '#ff739a',
                elevation: 8, borderRadius: 25,
                marginTop: 30,
                justifyContent: 'center',
                alignItems: 'center',

            }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#fff' }}>Aceitar termos e entrar</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },

    imageRow: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        marginTop: 25,
    },

    imageContainer: {
        width: '40%',
        height: 200,
        backgroundColor: '#fff',
        elevation: 8,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }

});
