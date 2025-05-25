import React, { useState } from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Pressable,
  TextInput,
  Button,
} from 'react-native';
import { Link, useRouter } from 'expo-router';
import { Picker } from '@react-native-picker/picker';
import { Agenda } from '@/constants/agenda';

import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {

  const navigation = useNavigation();

  const [OpçãoSelecionada, setOpçãoSelecionada] = useState('');
  const [OpçãoSelecionada_2, setOpçãoSelecionada_2] = useState('');

  const [hour, setHour] = useState('');

  const router = useRouter();

  return (
    <View style={styles.antepenultima}>



      <View style={styles.inputContainer}>
        <Text style={styles.Text}>Profissional</Text>
        <Picker
          selectedValue={OpçãoSelecionada}
          onValueChange={(itemValue) => setOpçãoSelecionada(itemValue)}
          dropdownIconColor="white"
          style={styles.Picker}
        >
          {Agenda().map((a) => {
            return (
               <Picker.Item label={a.id_usuario} value={a.id_usuario} />
            )
          })}
        </Picker>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.Text}>Dia da semana</Text>
        <Picker
          selectedValue={OpçãoSelecionada}
          onValueChange={(itemValue) => setOpçãoSelecionada_2(itemValue)}
          dropdownIconColor="white"
          style={styles.Picker}
        >
          {Agenda().map((a) => {
            return (
              <Picker.Item label={a.dia_da_semana} value={a.dia_da_semana} />
            )
          })}
        </Picker>
        <View style={styles.inputContainer}>
          <Text style={styles.Text}>Data</Text>
          <TextInput
            style={styles.Picker}
            placeholder="hh:mm"
            keyboardType="numeric"
            onChangeText={setHour}
            maxLength={6}
          />
        </View>
      </View>


      <View style={styles.viewbotoes}>
        <View style={styles.botao}>
          <Pressable onPress={() => router.back()}>
            <View >
              <Text style={{ color: '#fff' }}>
                Voltar ao Menu
              </Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.botao}>
          <TouchableOpacity >
            <Text style={{ color: '#fff' }} >
              Continuar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  antepenultima: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#222736',
    backgroundImage: 'url(https://img.freepik.com/free-vector/gradient-black-background-with-wavy-lines_23-2149158069.jpg)'

  },
  Picker: {
    width: 235,
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 12,
    backgroundColor: '#0D0F14',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 15,
  },
  inputContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: 270,
    borderBottomColor: 'white',
    marginTop: 10,
    gap: 5,
  },
  botao: {
    width: 130,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(46, 46, 46)',
    borderWidth: 1,
    height: 50,
    marginHorizontal: 10,
    borderColor: 'white',
  },
  viewbotoes: {
    top: height * 0.06,
    flexDirection: 'row',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  Text: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
  },
});