import React from 'react';
import { View, TextInput, Button, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from './style';

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


