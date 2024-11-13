import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

type MovieCardProps = {
  image: any;
};

export default function MovieCard({ image }: MovieCardProps) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 120,
    height: 180,
    marginRight: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  
});
