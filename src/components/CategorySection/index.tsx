import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import MovieCard from '../MovieCard';
import styles from './style';
import { CategorySectionProps } from './type';

export default function CategorySection({ title, images }: CategorySectionProps) {
  
  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.categoryTitle}>{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {images.map((image, index) => (
          <MovieCard key={index} image={image} />
        ))}
      </ScrollView>
    </View>
  );
}
