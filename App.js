import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Cabecalho from './src/components/Header';
import Body from './src/components/Body';
import More from './src/components/More';
import Footer from './src/components/Footer';

export default function App() {
  return (
    <> 
    <ScrollView style={styles.container}>
        <Cabecalho/>
        <Body/>
        <More/>
    </ScrollView>
        <Footer/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#530082',
  },
});
