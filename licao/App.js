import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { link } from 'expo-router';
import Principal from "./paginas/fritas";
export default function App() {
  return (
   <Principal />
  );
  function pagina2() {
    <View style = {styles.container}>

    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
