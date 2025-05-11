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
                        source={{ uri: 'https://i.pinimg.com/474x/43/8e/ed/438eed3a479946fb3b7b16044beeb478.jpg' }}
                        style={styles.image}
                    />
                    <Text style={styles.imageText}>1A</Text>
                </View>

                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: 'https://i.pinimg.com/564x/1f/aa/be/1faabe5675f7fe67988a2a5e82b5a634.jpg' }}
                        style={styles.image}
                    />
                    <Text style={styles.imageText}>1B</Text>
                </View>

                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0UVP0XB1ZnRaGufNgIrly6NQz52FmNP9gsQ&s' }}
                        style={styles.image}
                    />
                    <Text style={styles.imageText}>1C</Text>
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: 'https://i.pinimg.com/736x/83/22/72/83227219b57008b9cbd6a81fb0f285b0.jpg' }}
                        style={styles.image}
                    />
                    <Text style={styles.imageText}>2A</Text>
                </View>

                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: 'https://i.pinimg.com/736x/02/41/b9/0241b991bf9cd5bce5f6d918e426d4bc.jpg' }}
                        style={styles.image}
                    />
                    <Text style={styles.imageText}>2B</Text>
                </View>

                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: 'https://i.pinimg.com/736x/b1/ae/fc/b1aefcd1db15e5a126b8063cc5cc0afc.jpg' }}
                        style={styles.image}
                    />
                    <Text style={styles.imageText}>2C</Text>
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: 'https://i.pinimg.com/736x/c4/b6/2f/c4b62f6902a2784d9e6710b04d18cca7.jpg' }}
                        style={styles.image}
                    />
                    <Text style={styles.imageText}>3A</Text>
                </View>

                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: 'https://i.pinimg.com/736x/96/a4/2a/96a42a6bdc6224c56548ba5839f90b38.jpg' }}
                        style={styles.image}
                    />
                    <Text style={styles.imageText}>3B</Text>
                </View>

                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: 'https://i.pinimg.com/736x/c2/71/1c/c2711cc247c1484d982bba0b936135d8.jpg' }}
                        style={styles.image}
                    />
                    <Text style={styles.imageText}>3C</Text>
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: 'https://i.pinimg.com/736x/11/96/30/11963004ddf33ae3d6d2faabcc76dc76.jpg' }}
                        style={styles.image}
                    />
                    <Text style={styles.imageText}>4A</Text>
                </View>

                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: 'https://i.pinimg.com/736x/14/9d/f7/149df793dd58ae88eaa248957b6aba36.jpg' }}
                        style={styles.image}
                    />
                    <Text style={styles.imageText}>4B</Text>
                </View>

                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: 'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:eco/blog/wordpress/prod/sites/7/2024/03/06214132/AdobeStock_539414501.jpg' }}
                        style={styles.image}
                    />
                    <Text style={styles.imageText}>4C</Text>
                </View>
            </View><View style={styles.view_botoes1}>
                    <Pressable onPress={() => navigation.navigate('homens')}>
                        <View style={styles.viewimage}>
                            <Image
                                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS06aZjr3UJfqZ1-908BUPbDpwV1JFXpt2ZUw&s' }}
                                style={styles.image2}
                            />
                        </View>
                        <Text style={[styles.Text]}>Voltar</Text>
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