import React,{ useState } from 'react';
import { View, Text, StyleSheet, Colors, TextInput, TouchableOpacity, Pressable,ScrollView,Modal } from "react-native"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Picker } from "@react-native-picker/picker";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Jadwal } from './db/Database';

const Stack = createNativeStackNavigator();

const Form = ({navigation}) => {
    const [text, onChangeText] = useState({
        asal: 'Jawa',
        tujuan: 'Sumatera',
        layanan: 'Ekonomi',
        tanggal: 'Kamis,17 Maret 2020',
        jam: '15.30 WIB',
    });

    // const handleText = (textInput) => {
    //     return (value) => {
    //         onChangeText({ ...text, [textInput]: value });
    //     }
    // }
    
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
                            {/* <Picker.Item label='Pilih Layanan' value='0' /> */}
                            <Picker.Item label="Ekonomi" value="Ekonomi" />
                        </Picker>
                    </View>
                    <Text style={Style.text}>Tanggal Masuk Pelabuhan</Text>
                    <View style={Style.field}>
                        <FontAwesome style={Style.icon} name="calendar" size={30} />
                        <Picker
                            selectedValue={text}
                            style={{width: 280 }}
                            onValueChange={(itemValue) => onChangeText({...text, tanggal: itemValue})}
                        >
                            {/* <Picker.Item label='Pilih Layanan' value='0' /> */}
                            <Picker.Item label="Kamis,17 Maret 2020" value="Kamis,17 Maret 2020"/>
                            <Picker.Item label="Jumat,18 Maret 2020" value="Jumat,18 Maret 2020"/>
                            <Picker.Item label="Sabtu,19 Maret 2020" value="Sabtu,19 Maret 2020"/>
                            <Picker.Item label="Minggu,20 Maret 2020" value="Minggu,20 Maret 2020"/>
                        </Picker>
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
                        <Picker
                            selectedValue={text}
                            style={{width: 280 }}
                            onValueChange={(itemValue) => onChangeText({...text, jam: itemValue})}
                        >
                            {/* <Picker.Item label='Pilih Layanan' value='0' /> */}
                            <Picker.Item label="15.30 WIB" value="15.30 WIB"/>
                            <Picker.Item label="16.30 WIB" value="16.30 WIB"/>
                            <Picker.Item label="17.30 WIB" value="17.30 WIB"/>
                        </Picker>
                        {/* <TextInput
                            style={Style.input}
                            placeholder="Pilih Jam Masuk"
                            value={text.tanggal}
                            onChangeText={handleText('tanggal')}
                        /> */}
                    </View>

                    <View style={Style.orang}>
                        <Text>   Dewasa                                                   1 Orang </Text>
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



function Result({route, navigation}) {
    
    const { data } = route.params;
    console.log(data)

    const check = () => {
        let newJadwal = Jadwal.filter((item) =>{
            return( 
                item.asal == data.asal &&
                item.tujuan == data.tujuan &&
                item.layanan == data.layanan &&
                item.tanggal == data.tanggal &&
                item.jam == data.jam
            )
        })
        return newJadwal
    }

    console.log(check())
    const x = check()

    // data['jam'] = x.jam
    // data['tanggal'] = x.tanggal
    data['harga'] = x.harga
    
    return (        
        <View style={Style.container}>
            <Text style={Style.title}>Kapalzy</Text>
            <Text>Kuota tersedia (10000)</Text>
            <Text>{"\n"}{"\n"}Rincian Tiket</Text>
            <View style={Style.container2}>
                <Text>{data.asal} -- {data.tujuan}</Text>
                <Text>Jadwal Masuk Pelabuhan{"\n"}{data.tanggal}{"\n"}{"\n"}{data.jam}{"\n"}</Text>
                <Text>Layanan{"\n"}{data.layanan}{"\n"}</Text>
                <View style={{borderBottomColor: 'black',borderBottomWidth: 1,}}/>
                <Text>{"\n"}Dewasa x1                        Rp. 100.000</Text>
            </View>
            <View>
                <Text style={Style.total}>         Total                                        Rp. 100.000 </Text>
            </View>
            <View style={Style.wrapper}> 
                <Pressable
                    style={Style.backbutton}
                    onPress={() => navigation.navigate('Form')}
                >
                    <Text style={Style.kembali}>Kembali</Text>
                </Pressable>
                <Pressable
                    style={Style.lanjutbutton}
                    onPress={() => navigation.navigate('Detail',{data: data})}
                >
                    <Text style={Style.lanjutkan}>Lanjutkan</Text>
                </Pressable>
            </View>
            
            <Text>{data.harga}</Text>
        </View>
    );
}

function Detail({route, navigation}) {
    const { data } = route.params;
    const [text, onChangeText] = useState({
        nama: '',
        identitas: '',
        umur: '',
    });
    
    const handleText = (textInput) => {
        return (value) => {
            onChangeText({ ...text, [textInput]: value });
        }
    }
    return (        
        <View style={Style.container}>
            <ScrollView> 
            <Text style={Style.title}>Kapalzy</Text>
            <Text>{"\n"}{"\n"}Informasi Pemesanan</Text>
            <View style={Style.container3}>
                <Text>{data.asal} -- {data.tujuan}</Text>
                <Text>Jadwal Masuk Pelabuhan{"\n"}{data.tanggal}{"\n"}{"\n"}{data.jam}{"\n"}</Text>
                <Text>Layanan{"\n"}{data.layanan}</Text>
                <View style={{borderBottomColor: 'black',borderBottomWidth: 1,}}/>
                <Text>{"\n"}Dewasa x1                        Rp. 100.000</Text>
            </View>
            <Text>{"\n"}Data Pemesan</Text>
            <Text style={Style.text}>Nama Lengkap</Text>
            <View style={Style.field}>
                <TextInput
                    style={Style.Input}
                    placeholder="Fadhillah Azhar Alsani"
                    value={text.nama}
                    onChangeText={handleText('nama')}
                />
            </View>
            <Text style={Style.text}>Identitas</Text>
            <View style={Style.field}>
                <TextInput
                    style={Style.Input}
                    placeholder="Laki - laki"
                    value={text.identitas}
                    onChangeText={handleText('identitas')}
                />
            </View>
            <Text style={Style.text}>Umur</Text>
            <View style={Style.field}>
                <TextInput
                    style={Style.Input}
                    placeholder="15 Tahun"
                    value={text.umur}
                    onChangeText={handleText('umur')}
                />
            </View>
            
            <Pressable
                style={Style.button}
                // onPress={() => navigation.navigate('Pesanan', { data: data })}
                onPress={() => navigation.navigate('Pesanan', {
                    screen: 'DetailPesanan',
                    params: { data:data },
                  })}
            >
                <Text style={Style.text2}>Submit</Text>
            </Pressable>
            </ScrollView>
            
            
        </View>
    );
}

function Feed() {
    return (
      <Stack.Navigator
        initialRouteName="Form"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Form" component={Form}/>
        <Stack.Screen name="Result" component={Result}/>
        <Stack.Screen name="Detail" component={Detail}/>
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
    total:{
        top: -80,
    }

})

export default Feed