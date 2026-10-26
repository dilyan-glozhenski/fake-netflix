import { Text, View, StyleSheet, FlatList } from 'react-native';
import { Typography } from '@/shared/components';
import { Movie } from '../types';
import MovieCard from './MovieCard';
import { theme } from '@/shared/theme';

export interface MoviesRowProps {
  title: string;
  movies: Movie[];
  size?: 'small' | 'medium' | 'large';
}

export default function MoviesRow({ title, movies, size }: MoviesRowProps) {
  return (
    <View style={styles.card}>
      <View style={styles.title}>
        <Typography size='lg' color={theme.colors.textPrimary} weight='semibold' text={title} />
      </View>
      <FlatList
        style={styles.list}
        horizontal={true}
        data={movies}
        keyExtractor={(item) => item.imdbID}
        renderItem={({ item }) => (
          <MovieCard
            title={item.title}
            year={item.year}
            poster={item.poster}
            imdbID={item.imdbID}
            type={item.type}
            size={size}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
  },
  list: {
    width: '100%',
  },
  title: {
    marginBottom: 8,
  },
});