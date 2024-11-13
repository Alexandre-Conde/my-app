import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import MovieCard from './MovieCard';
import HomeStyles from '../styles/HomeStyles';

type CategorySectionProps = {
  title: string;
  images: any[];
};

export default function CategorySection({ title, images }: CategorySectionProps) {
  
  return (
    <View style={HomeStyles.categoryContainer}>
      <Text style={HomeStyles.categoryTitle}>{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {images.map((image, index) => (
          <MovieCard key={index} image={image} />
        ))}
      </ScrollView>
    </View>
  );
}
