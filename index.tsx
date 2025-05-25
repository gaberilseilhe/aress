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
    route: '',
  },
];


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://pngdownload.io/wp-content/uploads/2025/04/tralalero-tralala-Transparent-768x647.webp' }}
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
    color: '#000',
    fontWeight: 'bold',
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