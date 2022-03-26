import React,{ useState } from 'react';
import { View, Text, StyleSheet, Colors, TextInput, TouchableOpacity, Pressable } from "react-native"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Picker } from "@react-native-picker/picker";
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const Form = ({navigation}) => {
    const [text, onChangeText] = useState({
        asal: '',
        tujuan: '',
        tanggal: '',
    });

    const handleText = (textInput) => {
        return (value) => {
            onChangeText({ ...text, [textInput]: value });
        }
    }
    
    return (
        <View style={Style.container}>
            <View>
                <Text style={Style.title}>
                    Kapalzy
                </Text>
            </View>
            <View style={Style.label}>
                <Text style={Style.text}>Pelabuhan Awal</Text>
                <View style={Style.field}>
                    <FontAwesome style={Style.icon} name="ship" size={20} />
                    <Picker
                        selectedValue={text}
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue) => onChangeText({...text, tujuan: itemValue})}
                    >
                        <Picker.Item label="Haneda" value="Haneda" />
                        <Picker.Item label="Soekarno Hatta" value="Soekarno Hatta" />
                        <Picker.Item label="Soekarno Hatta" value="Soekarno Hatta" />
                        <Picker.Item label="Soekarno Hatta" value="Soekarno Hatta" />
                        <Picker.Item label="Soekarno Hatta" value="Soekarno Hatta" />
                    </Picker>
                    {/* <TextInput
                        style={Style.input}
                        placeholder="Pilih Pelabuhan Awal"
                        value={text.asal}
                        onChangeText={handleText('asal')}
                    />  */}
                </View>
                <Text style={Style.text}>Pelabuhan Tujuan</Text>
                <View style={Style.field}>
                    <TextInput
                        style={Style.Input}
                        placeholder="Pilih Pelabuhan Tujuan"
                        value={text.tujuan}
                        onChangeText={handleText('tujuan')}
                    />
                </View>
                <Text style={Style.text}>Tanggal asal</Text>
                <View style={Style.field}>
                    <TextInput
                        style={Style.input}
                        placeholder="Masukkan Tanggal asal"
                        value={text.tanggal}
                        onChangeText={handleText('tanggal')}
                        keyboardType="numeric"
                    />
                </View>
                <Pressable
                    style={Style.button}
                    onPress={() => navigation.navigate('Result')}
                >
                    <Text style={Style.text2}>Buat Tiket</Text>
                </Pressable>
            </View>
        </View>
    )
}

function Result({navigation}) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>ResultPage</Text>
        <Pressable
          onPress={() => {
            navigation.navigate('SearchPage');
          }}>
          <Text>Back</Text>
        </Pressable>
      </View>
    );
  }

function Feed() {
    return (
      <Stack.Navigator
        initialRouteName="Form"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Result" component={Result} />
      </Stack.Navigator>
    );
  }

const Style = StyleSheet.create({
    title:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#00579C',
        marginBottom: 20
    },
    container:{
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 50,
        width: '80%',
        position: 'absolute',
        marginTop: "10%",
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
        borderWidth: 2.1,
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 30,
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
        marginTop: 20,
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
})

export default Feed