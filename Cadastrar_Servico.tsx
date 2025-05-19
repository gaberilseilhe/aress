import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, Platform, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import Input from '@/components/meus_components/Input';
import Opções from '@/components/meus_components/Opções';
import { Link, useRouter } from 'expo-router';



export default function CadastroServico() {
    const [form, setForm] = useState({
        nome_servico: '',
        valor: '',
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
                    placeholder='Digite o nome do serviço'
                    placeholderTextColor='gray'
                    label="Nome do serviço"
                    value={form.nome_servico}
                    onChangeText={(text) => setForm({ ...form, nome_servico: text })}
                />
                <Input
                    placeholder='Valor serviço'
                    placeholderTextColor={'gray'}
                    label="Valor"
                    value={form.valor}
                    onChangeText={(text) => setForm({ ...form, valor: text })}
                />

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
        gap: 2,
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
        borderColor: 'white',
    },
    Text: {
        color: '#fff',
        textAlign: 'center',
    },
    back_button: {
        width: 55,
        height: 55,
        borderRadius: '100%',
        left: '10%',
    },
    back_button_text: {
        color: 'white',
        textAlign: 'center',
    }
});