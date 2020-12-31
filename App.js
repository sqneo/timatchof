import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, ActivityIndicator, Text, View, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>

      <StatusBar style="light" backgroundColor='#000' />


      {/* Gradient */}

      <LinearGradient colors={['#014871', '#A0EBCF']}>
        <View style={{
          width: '100%',
          height: '100%',
          borderTopLeftRadius: 0,
          alignItems: 'center'
        }}>
        </View></LinearGradient>




    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },

});
