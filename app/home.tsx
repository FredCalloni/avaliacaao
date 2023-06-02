import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <>
    <View style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
        <Text style={styles.text}>Andrew Tate</Text>
    </View>
    <View style={styles.images}>
        <View>
        <Image source={require('../assets/3289.jpg')} style={styles.imagem} />
        <Image source={require('../assets/3290.jpg')} style={styles.imagem} />
        <Image source={require('../assets/3291.jpg')} style={styles.imagem} />
        <Image source={require('../assets/3292.jpg')} style={styles.imagem} />
        </View>
        <View>
        <Image source={require('../assets/3293.jpg')} style={styles.imagem} />
        <Image source={require('../assets/3294.jpeg')} style={styles.imagem} />
        <Image source={require('../assets/3295.jpg')} style={styles.imagem} />
        <Image source={require('../assets/3297.jpg')} style={styles.imagem} />
        </View>
        <StatusBar style="auto" />
        <Link href="/"> Voltar </Link>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
text: {
    fontSize: 107,
    fontWeight: 'bold',
},
images: {
    flex:1,
    display: 'flex',
    flexDirection: 'row'
}
imagem: {
    width:80,
    heigth:80,
    resizeMode:'contain',
    marginBottom:10,
    marginLeft:15,
    borderRadius:10,
},
});