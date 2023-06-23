import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native';

const backgroundImage = require('./saitama.jpg');

const Pokemon = () => (
  <View style={styles.container}>
    <View
      style={[styles.backgroundImage, { backgroundImage: `url(${backgroundImage})` }]}
    >
      <View style={styles.content}>
        <Text style={styles.text}>Faça seu Login!</Text>
        <TextInput
        style={styles.textInput}
        placeholder="Nome:"
      />
        <TextInput
        style={styles.textInput}
        placeholder="Senha"
        secureTextEntry={true}
      />
             <TextInput
        style={styles.textInput}
        placeholder="Nivel de calvice"
        secureTextEntry={true}
      />
      <select>
  <option value="opcao1">Leve</option>
  <option value="opcao2">Médio</option>
  <option value="opcao3">Avançado</option>
  <option value="opcao3">Adriel</option>
</select>
        <Button
          title='Enviar'
          onPress={()=>Alert.alert('Login realizado!')}
        />
      </View>
    </View>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // opcional: adicionar um fundo semi-transparente para melhor legibilidade do texto
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  textInput: {
    height: 40,
    width: 250,
    borderColor: 'grey',
    borderWidth: 1, 
    padding: 10,
    margin: 15,
    backgroundColor: 'white',
    color: 'dark-grey',
  },
  button: {
    backgroundColor: 'dark-grey',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },

});

export default Pokemon;