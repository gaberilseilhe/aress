import React, { useState } from 'react';
import { ImageBackground, Image, Pressable, StyleSheet, View, Text, TextInput, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import { Servicos } from '@/constants/servicos';
import { Link } from 'expo-router';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
    const navigation = useNavigation();
  return (
<View style={styles.container}>
      <View style={styles.view_botoes1}>

       
          <Pressable onPress={() => navigation.navigate('listas')}>
            <View style={styles.viewimage}>
              <Image
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS06aZjr3UJfqZ1-908BUPbDpwV1JFXpt2ZUw&s' }}
                style={styles.image}
              />
            </View>
            <Text style={[styles.Text]}>Voltar</Text>
          </Pressable>

    
      </View>
      <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', paddingVertical: 10, color: 'white', }}> Serviços </Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 5, }}>
        <Text style={styles.indenficacao}>Id serviço</Text>
        <Text style={styles.indenficacao}>Nome serviço</Text>
      </View>
      <FlatList
        data={Servicos()}
        keyExtractor={(item) => item.id_servico.toString()}
        renderItem={({ item }) => (
          < View style={styles.view_registros}>
            <View style={styles.view_registros2}>
              <Text style={styles.text}>{item.id_servico}</Text>
              <Text style={styles.text}>{item.nome_servico}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'rgb(37, 37, 37)',
  },
  view_registros: {
    paddingVertical: 2,
    alignItems: 'center',

  },
  view_registros2: {
    backgroundImage: 'url(https://img.freepik.com/free-vector/gradient-black-background-with-wavy-lines_23-2149158069.jpg)',
    height: 75,
    borderWidth: 2,
    borderRadius: 15,
    width: '90%',
    shadowRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    top: height * 0.025,
    fontWeight: 'bold',
    color: 'white',
  },
  indenficacao: {
    color: 'white',
  },
  image: {
    width: 55,
    height: 55,
    backgroundColor: '#F3F3F3',
    borderRadius: 40,
    borderWidth: 5,
    borderColor: 'white',
  },
  viewimage: {
    alignItems: 'center',
  },
  view_botoes1: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal:width * 0.10,
    top:height * 0.01,
  },
  Text: {
    textAlign: 'center',
    color: 'white',
  },
});