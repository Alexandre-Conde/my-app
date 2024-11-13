import React from 'react';
import { ScrollView } from 'react-native';
import CategorySection from '../components/CategorySection';
import HomeStyles from '../styles/HomeStyles';

export default function Home() {

  return (
    <ScrollView style={HomeStyles.container}>
      <CategorySection
        title="Séries favoritas da família"
        images={[
          require('../assets/movie5.png'),
          require('../assets/movie6.png'),
          require('../assets/movie7.png'),
        ]}
      />
      <CategorySection
        title="Produções de Hollywood"
        images={[
          require('../assets/movie1.png'),
          require('../assets/movie2.png'),
          require('../assets/movie3.png'),
        ]}
      />
      <CategorySection
        title="Animes dublados em português"
        images={[
          require('../assets/movie8.png'),
          require('../assets/movie9.png'),
          require('../assets/movie10.png'),
        ]}
      />
      <CategorySection
        title="Descubra suas próximas histórias"
        images={[
          require('../assets/movie11.png'),
          require('../assets/movie12.png'),
          require('../assets/movie13.png'),
        ]}
      />
    </ScrollView>
  );
}
