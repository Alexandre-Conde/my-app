import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { MovieCardProps } from './type';
import { styles } from './style';


export default function MovieCard({ image }: MovieCardProps) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
    </View>
  );
}

