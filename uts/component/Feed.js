import React,{ useState } from 'react';
import { View, Text, StyleSheet, Colors, TextInput, TouchableOpacity, Pressable,ScrollView } from "react-native"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Picker } from "@react-native-picker/picker";
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const Form = ({navigation}) => {
    const [text, onChangeText] = useState({
        asal: '',
        tujuan: '',
        layanan: '',
        tanggal: '',
        jam: '',
    });

    const handleText = (textInput) => {
        return (value) => {
            onChangeText({ ...text, [textInput]: value });
        }
    }
    
    return (
        <View style={Style.container}>
            <ScrollView>
                <View>
                    <Text style={Style.title}>
                        Kapalzy
                    </Text>
                </View>
                <View style={Style.label}>
                    
                    <Text style={Style.text}>Pelabuhan Awal</Text>
                    <View style={Style.field}>
                        <FontAwesome style={Style.icon} name="ship" size={30} />
                        <Picker
                            selectedValue={text}
                            style={{width: 280 }}
                            onValueChange={(itemValue) => onChangeText({...text, asal: itemValue})}
                        >
                            <Picker.Item label='Pilih Pelabuhan Awal' value='0' />
                            <Picker.Item label="Jawa" value="Jawa" />
                            <Picker.Item label="Sumatera" value="Sumatera" />
                            <Picker.Item label="Kalimanatan" value="Kalimantan" />
                            <Picker.Item label="Sulawesi" value="Sulawesi" />
                            <Picker.Item label="Bali" value="Bali" />
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
                    <FontAwesome style={Style.icon} name="ship" size={30} />
                    <Picker
                            selectedValue={text}
                            style={{width: 280 }}
                            onValueChange={(itemValue) => onChangeText({...text, tujuan: itemValue})}
                        >
                            <Picker.Item label='Pilih Pelabuhan Tujuan' value='0' />
                            <Picker.Item label="Jawa" value="Jawa" />
                            <Picker.Item label="Sumatera" value="Sumatera" />
                            <Picker.Item label="Kalimanatan" value="Kalimantan" />
                            <Picker.Item label="Sulawesi" value="Sulawesi" />
                            <Picker.Item label="Bali" value="Bali" />
                        </Picker>
                    </View>
                    <Text style={Style.text}>Kelas Layanan</Text>
                    <View style={Style.field}>
                    <FontAwesome style={Style.icon} name="bed" size={30} />
                    <Picker
                            selectedValue={text}
                            style={{width: 280 }}
                            onValueChange={(itemValue) => onChangeText({...text, layanan: itemValue})}
                        >
                            <Picker.Item label='Pilih Layanan' value='0' />
                            <Picker.Item label="Ekonomi" value="Ekonomi" />
                        </Picker>
                    </View>
                    <Text style={Style.text}>Tanggal Masuk Pelabuhan</Text>
                    <View style={Style.field}>
                        <FontAwesome style={Style.icon} name="calendar" size={30} />
                        {/* <TextInput
                            style={Style.Input}
                            placeholder="Pilih Tanggal Masuk"
                            value={text.tujuan}
                            onChangeText={handleText('tujuan')}
                        /> */}
                    </View>
                    <Text style={Style.text}>Jam Masuk Pelabuhan</Text>
                    <View style={Style.field}>
                        <FontAwesome style={Style.icon} name="clock-o" size={30} />
                        {/* <TextInput
                            style={Style.input}
                            placeholder="Pilih Jam Masuk"
                            value={text.tanggal}
                            onChangeText={handleText('tanggal')}
                        /> */}
                    </View>
                    <Pressable
                        style={Style.button}
                        onPress={() => navigation.navigate('Result',{data: text})}
                    >
                        <Text style={Style.text2}>Buat Tiket</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    )
}

function Result({navigation}) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>ResultPage</Text>
        <Pressable
          onPress={() => {
            navigation.navigate('Form');
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

})

export default Feed