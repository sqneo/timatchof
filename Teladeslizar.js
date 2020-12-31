import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, ActivityIndicator, Text, View, Image, TouchableOpacity } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/FontAwesome5';
import Icon4 from 'react-native-vector-icons/Feather';
import Icon5 from 'react-native-vector-icons/Fontisto';


import * as Animatable from 'react-native-animatable';

const AnimatedIcon = Animatable.createAnimatableComponent(Icon);

export default function App() {
    return (

        <View style={styles.container}>

            <StatusBar style="light" backgroundColor='#000' />



            {/* Barra fotos */}
            <View style={{
                width: '90%',
                height: 370,
                marginLeft: 17,
                marginTop: 60,
                backgroundColor: '#58b4d9',
                elevation: 8,
                borderRadius: 15,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {/* Foto */}
                <Image source={require('./assets/patria.jpeg')}
                    style={{
                        height: 420,
                        borderRadius: 0,
                        borderTopLeftRadius:20,
                        borderTopRightRadius:20,
                        borderBottomRightRadius:20,
                        width: '100%',
                        zIndex: 2,
                    }} />


            </View>

            <View style={{
                width: '90%',
                height: 100,
                marginLeft: 17,
                marginTop: 1,
                backgroundColor: '#fff',
                elevation: 1,
                borderRadius: 15,
                alignItems: 'flex-start',
                justifyContent: 'center',
                zIndex: 5,
            }}>

                <Text style={{fontSize:20 , marginLeft: 10 , marginTop:20 }}>Capitão Patria, 35</Text>
                <Text style={{fontSize:16 , marginLeft: 35 , color: '#878787'}}>Super Heroi</Text>
                <Icon2 name='suitcase' size={20} color={'#93a9ad'} style={{ marginTop:-22, zIndex: 5, marginLeft: 10}} />
                <Icon5 name='map-marker-alt' size={20} color={'#93a9ad'} style={{ marginTop: 5, zIndex: 5, marginLeft: 12}} />
                <Text style={{fontSize:16 , marginLeft: 33 , marginTop:-22 , color:'#878787'}}>12 Km de distancia</Text>
            </View>



            {/* Circulo Super Like */}

            <View style={{
                width: 65,
                height: 65,
                backgroundColor: '#ffff',
                elevation: 15,
                borderRadius: 50,
                position: 'absolute',
                right: '40%',
                bottom: '3%',
                zIndex: 2,
                justifyContent: 'center',
                alignItems: 'center',
            }}>

                <Icon name='star' size={50} color={'#05c5ff'} animation='pulse' useNativeDriver duration={1000} iterationCount='infinite' />

            </View>

            {/* Circulo like */}
            <View style={{
                width: 50,
                height: 50,
                backgroundColor: '#ffff',
                elevation: 15,
                borderRadius: 50,
                position: 'absolute',
                right: '19%',
                bottom: '4%',
                zIndex: 2,
                justifyContent: 'center',
                alignItems: 'center',
            }}>

                <Icon name='heart' size={30} color={'#ff5996'} />

            </View>

            {/* Circulo DesLike */}
            <View style={{
                width: 50,
                height: 50,
                backgroundColor: '#ffff',
                elevation: 15,
                borderRadius: 50,
                position: 'absolute',
                right: '65%',
                bottom: '4%',
                zIndex: 2,
                justifyContent: 'space-around',
                alignItems: 'center',
            }}>

                <Icon name='close' size={30} color={'red'} />

            </View>





        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: '#F0F8FF',
    },
});
