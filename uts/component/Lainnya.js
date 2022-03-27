import React,{ useState } from 'react';
import { View, Text, StyleSheet, Colors, TextInput, TouchableOpacity, Pressable,ScrollView,Modal } from "react-native"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Picker } from "@react-native-picker/picker";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Jadwal } from './db/Database';
function Lainnya(){
    return(
        <View style={Style.container}>
            <Text style={Style.title}>Nama  :     Fadhillah Azhar Alsani </Text>
            <Text style={Style.title}>NIM     :     119140217 </Text>
            <Text style={Style.title}>Kelas  :      PAM - RD </Text>
        </View>
    )
}

const Style = StyleSheet.create({
    title:{
        
        fontSize: 20,
        fontWeight: 'bold',
        color: '#00579C',
        marginBottom: 5
    },
    container:{
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        width: '80%',
        marginTop: "30%",
        marginBottom: "5%",
        left: '10%',
        shadowColor: '#000',
        elevation: 5,
    },
});

export default Lainnya;