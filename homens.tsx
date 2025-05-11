import React from 'react';
import { View, Image, StyleSheet, ScrollView, Text, TouchableOpacity, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { useNavigation } from 'expo-router';

export default function App() {
    const navigation = useNavigation();
    return (

        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: 'https://imgs.search.brave.com/NYiUI-qGUjlY1vTE0OvIMOZCypbMQ52LywHH6TyuK5A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vYmVsZXphLW5h/LXdlYi9pbWFnZS91/cGxvYWQvZl9hdXRv/LGZsX3Byb2dyZXNz/aXZlLHFfYXV0bzpl/Y28vYmxvZy93b3Jk/cHJlc3MvcHJvZC9z/aXRlcy83LzIwMjMv/MDEvMDQxNTI3Mzcv/c2h1dHRlcnN0b2Nr/XzE4OTE3Nzg2OTIt/c2NhbGVkLmpwZw' }}
                    style={styles.largeImage}
                />
                <Text style={styles.imageText}>Tabela de tipos de cabelo</Text>
            </View>

            <View style={styles.row}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: 'https://imgs.search.brave.com/SvjdCfCr40-hyBaItAZMaNqbl3ZyPp3Av4x6W257caA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90b3MtcHJlbWl1/bS9yb3N0by1kZS1q/b3ZlbS1ib25pdG8t/Y29tLWNhYmVsby1s/b2lyby1hby1hci1s/aXZyZV8yNTExMzYt/MTYxOTQuanBnP3Nl/bXQ9YWlzX2h5YnJp/ZA' }}
                        style={styles.image}
                    />
                    <Text style={styles.imageText}>1A</Text>
                </View>

                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: 'https://imgs.search.brave.com/ufQ1vJVy0iTAiv-8fW0OiOPV17Y1xMAMVQAma21hzY8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zYWxh/b3ZpcnR1YWwub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIy/LzA2L0NhYmVsby0x/Qi1NYXNjdWxpbm8u/anBn' }}
                        style={styles.image}
                    />
                    <Text style={styles.imageText}>1B</Text>
                </View>

                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: 'https://i.pinimg.com/736x/a2/55/47/a255475c6d18a375c9f6af8fa668de2c.jpg' }}
                        style={styles.image}
                    />
                    <Text style={styles.imageText}>1C</Text>
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: 'https://i.pinimg.com/736x/79/6d/e9/796de9e94e8c006d4c70cd802a5e65cc.jpg' }}
                        style={styles.image}
                    />
                    <Text style={styles.imageText}>2A</Text>
                </View>

                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: 'https://i.pinimg.com/736x/82/58/07/8258075c643e57927ed92696ddf5027c.jpg' }}
                        style={styles.image}
                    />
                    <Text style={styles.imageText}>2B</Text>
                </View>

                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: 'https://i.pinimg.com/736x/56/06/e4/5606e42ba11eb1635f33057cd1d5fced.jpg' }}
                        style={styles.image}
                    />
                    <Text style={styles.imageText}>2C</Text>
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: 'https://i.pinimg.com/736x/f1/21/5d/f1215d34eaf37dd96c6e93d300071f7a.jpg' }}
                        style={styles.image}
                    />
                    <Text style={styles.imageText}>3A</Text>
                </View>

                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: 'https://i.pinimg.com/736x/e4/ad/84/e4ad84dd052f66ec52ea53a6f189e4bf.jpg' }}
                        style={styles.image}
                    />
                    <Text style={styles.imageText}>3B</Text>
                </View>

                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: 'https://i.pinimg.com/736x/59/16/7f/59167fac9cc2090dc11121b08d6fe17d.jpg' }}
                        style={styles.image}
                    />
                    <Text style={styles.imageText}>3C</Text>
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: 'https://i.pinimg.com/736x/57/cc/a5/57cca5bc3e82e28f47e82ea3e799d7ff.jpg' }}
                        style={styles.image}
                    />
                    <Text style={styles.imageText}>4A</Text>
                </View>

                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: 'https://i.pinimg.com/736x/3d/7d/8a/3d7d8acdc7c74a9c2488181fd15f4fb3.jpg' }}
                        style={styles.image}
                    />
                    <Text style={styles.imageText}>4B</Text>
                </View>

                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: 'https://i.pinimg.com/236x/ed/ac/a9/edaca9fb7abf8c38fae2b8676e69cd88.jpg' }}
                        style={styles.image}
                    />
                    <Text style={styles.imageText}>4C</Text>
                </View>
            </View><View style={styles.view_botoes1}>
                    <Pressable onPress={() => navigation.navigate('index')}>
                        <View style={styles.viewimage}>
                            <Image
                                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS06aZjr3UJfqZ1-908BUPbDpwV1JFXpt2ZUw&s' }}
                                style={styles.image2}
                            />
                        </View>
                        <Text style={[styles.Text]}>Voltar</Text>
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate('mulheres')}>
                        <View style={styles.viewimage}>
                            <Image
                                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/560/560449.png' }}
                                style={styles.image2}
                            />
                        </View>
                        <Text style={[styles.Text]}>Mulheres</Text>
                    </Pressable>

            </View>
        </ScrollView>


    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: 10,
        flex: 1,
        backgroundColor:'#222736',
    },
    largeImage: {
        width: '100%',
        height: 200,
        marginBottom: 20,
        borderRadius: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    imageContainer: {
        position: 'relative',
        
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        margin: 5,
    },
    imageText: {
        position: 'absolute',
        top: 10,
        left: 10,
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 3,
        borderRadius: 5,
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    view_botoes1: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 0.11,
    },
    Text: {
        textAlign: 'center',
        color: 'white',
    },
    viewimage: {
        justifyContent:'space-around',
        paddingHorizontal:50,
    },
    image2: {
        width: 55,
        height: 55,
        backgroundColor: '#F3F3F3',
        borderRadius: 40,
        borderWidth:1,
        borderColor:'white',
      },

});