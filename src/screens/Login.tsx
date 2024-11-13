import React from 'react';
import { View, TextInput, Button, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Login({ navigation }: any) {

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>NETFLIX</Text>      
      <TextInput
        style={styles.input}
        placeholder="Email ou número de telefone"
        placeholderTextColor="#000" 
      />
       <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#000"  
        secureTextEntry
      />
      <Button title="Entrar" color="#E50914" onPress={() => navigation.navigate('Home')} />
      <Text style={styles.or}>OU</Text>
      <TouchableOpacity style={styles.accessCodeButton}>
        <Text style={styles.accessCodeText}>Usar um código de acesso</Text>
      </TouchableOpacity>
      <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
      <Text style={styles.forgotPassword}>O acesso está protegido pelo Google reCAPTCHA para garantir que você não é um robô. Saiba mais.</Text>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    justifyContent: 'center',
  },
  
  logo: {
    fontSize: 32,
    color: '#E50914',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  
  input: {
    backgroundColor: '#f7f6f6',
    color: '#000',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  
  or: {
    color: '#fff',
    textAlign: 'center',
    marginVertical: 10,
  },

  accessCodeButton: {
    backgroundColor: '#686767',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },

  accessCodeText: {
    color: '#fff',
  },

  forgotPassword: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
  },
  
});
