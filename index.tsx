import { Link } from 'expo-router';
import React from 'react';
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native';

const { width } = Dimensions.get('window');
const services = [
  {
    label: 'Fazer agendamento',
    icon: 'https://cdn-icons-png.flaticon.com/512/126/126790.png',
    route: '/Cadastrar_Agendamento',
  },
  {
    label: 'Cadastro do usuário',
    icon: 'https://cdn-icons-png.flaticon.com/512/847/847969.png', 
    route: '/Cadastrar_Usuarios',
  },
  {
    label: 'Imagens de cabelo     ♀️/♂️',
    icon: 'https://cdn-icons-png.flaticon.com/512/2922/2922688.png', 
    route: '/homens',
  },
  {
    label: 'Diagnóstico por IA',
    icon: 'https://cdn-icons-png.flaticon.com/512/4553/4553651.png', 
    route: '',
  },
  {
    label: 'Listas',
    icon: 'https://cdn-icons-png.flaticon.com/512/8910/8910130.png', 
    route: '/listas',
  },
  {
    label: 'Configuração',
    icon: 'https://cdn-icons-png.flaticon.com/512/2270/2270789.png', 
    route: '/',
  },
];


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'data:image/png;base64,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' }}
          style={styles.logo}
        />
        <Text style={styles.username}>Olá</Text>
        <Pressable style={styles.titulo}>
          <Text style={styles.titulotext}>BEM VINDO!</Text>
        </Pressable>
      </View>

      <View style={styles.servicesContainer}>
        {services.map((item, index) => (
          <Link key={index} href={item.route} asChild>
            <Pressable style={styles.serviceCard}>
              <Image source={{ uri: item.icon }} style={styles.icon} resizeMode='contain' />
              <Text style={styles.serviceText}>{item.label}</Text>
            </Pressable>
          </Link>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0F14',
  },
  header: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 30,
    backgroundColor: '#1A1C23',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  logo: {
    width: 70,
    height: 70,
    marginBottom: 10,
    borderRadius: 35,
    backgroundColor: '#fff',
  },
  username: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
  titulo: {
    backgroundColor: '#4169E1',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  titulotext: {
    color: '#F4F4F4',
    fontWeight:'500',
  },
  servicesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    paddingVertical: 20,
  },
  serviceCard: {
    width: width * 0.4,
    aspectRatio: 1,
    backgroundColor: '#222736',
    borderRadius: 15,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  serviceText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
});