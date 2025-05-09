import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  const verificarCampos = () => {
    if (!email || !senha) {
      setMensagemErro('Por favor, preencha todos os campos.');
      return;
    }

    setMensagemErro(''); // limpa mensagem de erro se tudo estiver certo
    navigation.navigate('Home'); // substitua pelo nome real
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>LOGIN</Text>
      <TextInput
        style={styles.input}
        placeholder='Digite o seu email'
        keyboardType='email-address'
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder='Digite a sua senha'
        keyboardType='default'
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      <Button title='Login' onPress={verificarCampos} />
      {mensagemErro ? <Text style={styles.erro}>{mensagemErro}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
    padding: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: '#e0f7fa',
  },
  erro: {
    color: 'red',
    marginTop: 10,
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
    color: '#2c3e50',
  },
});