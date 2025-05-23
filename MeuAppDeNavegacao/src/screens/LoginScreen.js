import React, { useState } from 'react';
import { View, TextInput, Dimensions, StyleSheet, Text, TouchableOpacity, Alert} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const user = 'admin';
const password = '1234';

export default function LoginScreen({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const verificarCampos = () => {
    if (!usuario || !senha) {
      Alert.alert('Erro', 'Preencha todos os campos.');
    } else if (usuario == user && senha != password) {
      Alert.alert('Erro', 'Senha incorreta.');
      setSenha('');
    } else if (usuario != user && senha == password) {
      Alert.alert('Erro', 'Usuário incorreto.');
      setUsuario('');
      setSenha('');
    } else if (usuario != user && senha != password) {
      Alert.alert('Erro', 'Usuário e senha incorretos.');
      setUsuario('');
      setSenha('');
    } else {
      Alert.alert('Sucesso', 'Login realizado com sucesso!');
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>LOGIN</Text>
      <TextInput
        style={styles.input}
        placeholder='Digite o seu usuário'
        keyboardType='default'
        value={usuario}
        onChangeText={setUsuario}
      />
      <TextInput
        style={styles.input}
        placeholder='Digite a sua senha'
        keyboardType='password'
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      <TouchableOpacity style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5, margin: 10, width: windowWidth * 0.5 }} onPress={verificarCampos}>
        <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
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
  titulo: {
    fontSize: 24,
    marginBottom: 20,
    color: 'black',
    fontWeight: 'bold',
  },
});