import React,{ useState } from 'react';
import { View, Text, StyleSheet, Colors, TextInput, TouchableOpacity, Pressable,ScrollView } from "react-native"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Picker } from "@react-native-picker/picker";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Jadwal } from './db/Database';

const Stack = createNativeStackNavigator();

function DetailPesanan({route, navigation}) {
    const {data} = route.params;
    return (
        <View style={Style.container}>
            <Text style={Style.title}>Kapalzy</Text>
            <View style={Style.container2}>
            <Text>{data.asal} -- {data.tujuan}</Text>
            <Text>Jadwal Masuk Pelabuhan{"\n"}{data.tanggal}{"\n"}{"\n"}{data.jam}{"\n"}</Text>
            <Text>Layanan{"\n"}{data.layanan}</Text>
            <View style={{borderBottomColor: 'black',borderBottomWidth: 1,}}/>
            <Text>{"\n"}Dewasa x1                        Rp. 100.000</Text>
        </View>
        <View>
        <Text style={Style.total}>         Total                                        Rp. 100.000 </Text>
        </View>
        
        <Pressable
            style={Style.cancelbutton}
            onPress={() => navigation.navigate('Pembatalan')}
        >
            <Text style={Style.lanjutkan}>Batalkan Pesanan</Text>
        </Pressable>
        </View>
    );
}

function Pesanan(){
    return (
        <Stack.Navigator
          initialRouteName="DetailPesanan"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="DetailPesanan" component={DetailPesanan}/>
        </Stack.Navigator>
      );
}

const Style = StyleSheet.create({
    title:{
        textAlign: 'center',
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
        marginTop: "5%",
        marginBottom: "5%",
        left: '10%',
        shadowColor: '#000',
        elevation: 5,
    },
    container2:{
        backgroundColor: '#F0F0F0',
        borderRadius: 5,
        padding: 10,
        width: '80%',
        marginTop: "5%",
        marginBottom: 100,
        left: '10%',
        shadowColor: '#000',
        elevation: 5,
    },
    label:{
        marginTop: 10,
    },
    field:{
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
        padding: 5,
    },
    text:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    input:{
        padding:10,
        backgroundColor: '#fff',
        color: '#424242',
    },
    button:{
        marginTop: 10,
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EE9E54',
        borderRadius: 5,
    },

    text2:{
        fontWeight: 'bold',
        fontSize: 20,
        padding: 5,
        color: '#fff',
    },

    orang:{
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        paddingTop: 7,
        paddingBottom: 7,
    },
    backbutton:{
        height: 40,
        paddingHorizontal: 20,
        marginTop: -50,
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: '#00579C',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginLeft: 50,
    },

    kembali:{
        color: '#00579C',
    },
    lanjutbutton:{  
        height: 40,
        marginTop: -50,
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00579C',
        borderColor: '#00579C',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 50,
    },
    lanjutkan:{
        color: '#fff',
    },
    wrapper:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    container3:{
        backgroundColor: '#F0F0F0',
        borderRadius: 5,
        padding: 10,
        width: '80%',
        marginTop: "5%",
        left: '10%',
        shadowColor: '#000',
        elevation: 5,
    },

    cancelbutton:{
        marginTop: -50,
        height: 40,
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C70000',
        borderColor: '#C70000',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginHorizontal: 30,
    },
    
    total:{
        top: -80,
    }


})

export default Pesanan;