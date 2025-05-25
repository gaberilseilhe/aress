import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, Platform, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import Input from '@/components/meus_components/Input';
import Opções from '@/components/meus_components/Opções';
import { Link, useRouter } from 'expo-router';



export default function CadastroUsuario() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        celular: '',
        password: '',
        documento: '',
        id_grupo: 'cliente',
        cargo: 'vendedor',
        status: 'ativo',
        data_nascimento: new Date(),
        avatar: null,
    });
    const router = useRouter();

    /*
       const [showDatePicker, setShowDatePicker] = useState(false);
   
         const handleChooseAvatar = async () => {
             let result = await ImagePicker.launchImageLibraryAsync({
                 mediaTypes: ImagePicker.MediaTypeOptions.Images,
                 allowsEditing: true,
                 aspect: [1, 1],
                 quality: 1,
             });
     
             if (!result.canceled) {
                 setForm({ ...form, avatar: result.assets[0].uri });
             }
         };
     
         const handleDateChange = (event, selectedDate) => {
             const currentDate = selectedDate || form.data_nascimento;
             setShowDatePicker(Platform.OS === 'ios');
             setForm({ ...form, data_nascimento: currentDate });
         };
     
         const handleSubmit = () => {
             console.log(form);
         };
     */
    return (
        <View style={styles.Container}>
            <View style={styles.Container_two}>
                <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 27, bottom: 27, }}>Cadastro de usuario</Text>
                <Input
                    placeholder='Digite seu nome'
                    placeholderTextColor='gray'
                    label="Nome"
                    value={form.name}
                    onChangeText={(text) => setForm({ ...form, name: text })}
                />
                <Input
                    placeholder='Digite seu email'
                    placeholderTextColor='gray'
                    label="Email"
                    value={form.email}
                    keyboardType="email-address"
                    onChangeText={(text) => setForm({ ...form, email: text })}
                />
                <Input
                    placeholder='Digite seu numero'
                    placeholderTextColor={'gray'}
                    label="Celular"
                    value={form.celular}
                    keyboardType="phone-pad"
                    onChangeText={(text) => setForm({ ...form, celular: text })}
                />
                <Input
                    placeholder='Digite sua senha'
                    placeholderTextColor={'gray'}
                    label="Senha"
                    value={form.password}
                    secureTextEntry
                    onChangeText={(text) => setForm({ ...form, password: text })}
                />
                <Input
                    placeholder='Digite seu documento'
                    placeholderTextColor={'gray'}
                    label="Documento"
                    value={form.documento}
                    keyboardType="numeric"
                    onChangeText={(text) => setForm({ ...form, documento: text })}
                />
                
                

                <Opções
                    label="Grupo"
                    selectedValue={form.id_grupo}
                    onValueChange={(itemValue) => setForm({ ...form, id_grupo: itemValue })}
                >
                    <Picker.Item label="Admin" value="admin" />
                    <Picker.Item label="Gerente" value="gerente" />
                    <Picker.Item label="Funcionario" value="funcionario" />
                    <Picker.Item label="Cliente" value="cliente" />
                </Opções>

                <Opções
                    label="Cargo"
                    selectedValue={form.cargo}
                    onValueChange={(itemValue) => setForm({ ...form, cargo: itemValue })}
                >
                    <Picker.Item label="Vendedor" value="vendedor" />
                    <Picker.Item label="Porteiro" value="porteiro" />
                    <Picker.Item label="Guarda" value="guarda" />
                    <Picker.Item label="Dono" value="dono" />
                </Opções>
                <Opções
                    label="Status"
                    selectedValue={form.status}
                    onValueChange={(itemValue) => setForm({ ...form, status: itemValue })}
                >
                    <Picker.Item label="Ativo" value="ativo" />
                    <Picker.Item label="Inativo" value="inativo" />
                </Opções>
                <TouchableOpacity style={{ backgroundColor: 'rgba(38, 46, 121, 0.55)', width: 300, height: 40, borderRadius: 5, borderWidth: 2, borderColor: 'blue', }}
                    activeOpacity={0.6}
                >
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white', textAlign: 'center', top: '20%', }}>
                        Cadastrar
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.back_button}>

                <Pressable onPress={() => router.back()}>
                    <View>
                        <Image
                            source={{ uri: 'https://th.bing.com/th/id/OIP.03C6Jw20jB6qJApzVCi5JgAAAA?rs=1&pid=ImgDetMain' }}
                            style={styles.image}
                        />
                    </View>
                    <Text style={[styles.back_button_text]}>Home</Text>
                </Pressable>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        justifyContent: 'center',
        flex: 1,
        backgroundImage: 'url(https://img.freepik.com/free-vector/gradient-black-background-with-wavy-lines_23-2149158069.jpg)'
    },
    Container_two: {
        alignItems: 'center',
        gap: 4,
    },
    input: {
        borderWidth: 2,
        borderColor: 'gray',
        padding: 8,
        marginBottom: 10,
        borderRadius: 5,
        width: 300,
        backgroundColor: 'rgba(0, 0, 0, 0.55)',
        color: 'white',
    },
    text: {
        fontSize: 13,
        fontWeight: 'bold',
        color: 'white',
    },
    image: {
        width: 55,
        height: 55,
        backgroundColor: '#F3F3F3',
        borderRadius: 40,
        borderColor:'white',
    },
    Text: {
        color: '#fff',
        textAlign: 'center',
    },
    back_button: {
        width:55,
        height:55,
        borderRadius: '100%',
        left:'10%',
        marginTop:10,
    },
    back_button_text:{
        color:'white',
        textAlign:'center',
    }
});