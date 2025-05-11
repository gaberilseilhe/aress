import { Link, useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native';

const { width } = Dimensions.get('window');

const listas = [
  {
    label: 'Usuários',
    icon: 'https://cdn-icons-png.flaticon.com/512/8910/8910130.png',
    route: '/listar_usuarios',
  },
  {
    label: 'Serviços',
    icon: 'https://cdn-icons-png.flaticon.com/512/8910/8910130.png',
    route: '/listar_servicos',
  },
  {
    label: 'Agendamentos',
    icon: 'https://cdn-icons-png.flaticon.com/512/8910/8910130.png',
    route: '/listar_agendamentos',
  },
  {
    label: 'Agenda',
    icon: 'https://cdn-icons-png.flaticon.com/512/8910/8910130.png',
    route: '/listar_agenda',
  },
];

export default function EscolherLista() {
  const router = useRouter();

  return (
    <View style={styles.container}>
     

      <Text style={styles.title}>Escolha uma lista</Text>

      <View style={styles.listContainer}>
        {listas.map((item, index) => (
          <Link key={index} href={item.route} asChild>
            <Pressable style={styles.card}>
              <Image source={{ uri: item.icon }} style={styles.icon} />
              <Text style={styles.label}>{item.label}</Text>
            </Pressable>
          </Link>
        ))}
         <Pressable style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>← Voltar</Text>
      </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0F14',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  backButton: {
    marginBottom: 10,
    backgroundColor: '#333',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#F7C500',
    textAlign: 'center',
    marginBottom: 20,
  },
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  card: {
    width: width * 0.4,
    aspectRatio: 1,
    backgroundColor: '#222736',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  icon: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  label: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
});
