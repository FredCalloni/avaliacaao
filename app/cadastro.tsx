import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <>
    <View>
        <Image source={require('../assets/32.89.jpg')} style={{resizeMode:'contain', width: 250, height: 250, borderRadius:'100%',}} />
        <Text style={styles.text}>TATE'S ULTRA APLICATION </Text>
        <TextInput placeholder='Qual seu nome Tatezete?'></TextInput>
        <TextInput placeholder='Qual seu e-mail Tatezete?'></TextInput>
        <TextInput placeholder='Qual sua data de nascimento Tatezete?'></TextInput>
        <TextInput placeholder='Qual seu CPF Tatezete?' keyboardType='numeric'></TextInput>
        <TouchableOpacity> Cadastrar </TouchableOpacity>
        <Link href="/sobre" style={styles.button}> Voltar </Link>
        <Link href="/home" style={styles.button}> Já é um tatezete? </Link>
        <StatusBar style="auto" />
    </View>
    </>
)}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    text: {
        fontSize: 44,
        fontWeight: 'bold',
    },
    button: {
        marginTop: 10,
        width: 250,
        height: 50,
        textAlign:'center',
        display:'flex',
        borderRadius:10,
        borderWidth: 1.5,
        borderBottomWidht:5,
    },
    });
    
    