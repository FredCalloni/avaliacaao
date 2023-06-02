import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <>
    <View>
        <Image source={require('../assets/32.89.jpg')} style={{resizeMode:'contain', width: 250, height: 250, borderRadius:'100%',}} />
        <Text style={styles.text}>TATE'S ULTRA APLICATION </Text>
        <Text> reg regre gth htghtehtehte h thtrheth thh e h h e ht eh he het ht ht ht h ewreeweqwreq </Text>
        <Text> umukuy uk uk yuk yuj tbgh n ku yy j hbytjyu t jbt bt bt kj tuk ty  tb t bt t tk tj tjj jh </Text>
        <Text> ar egfe ggre gre gerkgek gkq kr gkre grke grk gkq k rkrkgdkd fk kkr t  r trer tret r tr t </Text>
        <Text>  214 35465746hght hth 676 754gg bg bg 7 89  -- ---t554t ffgfgf 544 tf gf gf  d  fgg g jkt </Text>
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
    fontSize: 44,
    fontWeight: 'bold',
},
});

