import { View, Image, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import { useMovieById } from '@/features/movies/store/hooks';
import { theme } from '@/shared/theme';
import { Button, Typography } from '@/shared/components';
import { useMemo } from 'react';

export default function MovieScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { movieDetails, loading, error } = useMovieById(id);

  const onPlayButtonPressedHandler = () => { }

  const playMovieIcon = useMemo(() => {
    return <Image source={require('../../shared/assets/play-button.png')} style={{ width: 30, height: 30 }} />
  }, []);

  if (!movieDetails) {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.loadingContainer}>
          {loading ? <ActivityIndicator color={theme.colors.textPrimary} /> : (
            <Typography
              color={theme.colors.textPrimary}
              text={error ?? 'Movie details are unavailable.'}
            />
          )}
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }

  const { title, poster, year, duration, plot, imdbRating, actors, genre, director } = movieDetails;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.wrapper}>
          <ScrollView style={styles.scrollView} contentContainerStyle={{ alignItems: 'center' }}>
            <View style={styles.banner}>
              <Image
                src={poster}
                alt={`${title} poster`}
                style={styles.poster}
                resizeMode="contain"
              />
            </View>
            <View style={styles.row}>
              <Typography size='xl' color={theme.colors.textPrimary} text={title} />
            </View>
            <View style={styles.row}>
              <Typography size='sm' color={theme.colors.textSecondary} text={year} />
              <Typography size='sm' color={theme.colors.textSecondary} text={duration} />
              <Typography size='sm' color={theme.colors.textSecondary} text={`Rating: ${imdbRating} / 10`} />
            </View>
            <View style={styles.row}>
              <Typography size='sm' color={theme.colors.textSecondary} text={genre} />
            </View>
            <View style={styles.row}>
              <Button
                icon={playMovieIcon}
                text="Play Movie"
                cta={onPlayButtonPressedHandler}
              />
            </View>
            <View style={styles.row}>
              <Typography size='md' color={theme.colors.textSecondary} text={plot} />
            </View>
            <View style={styles.row}>
              <Typography size='sm' color={theme.colors.textSecondary} text={`Starring: ${actors}`} />
            </View>
            <View style={styles.row}>
              <Typography size='sm' color={theme.colors.textSecondary} text={`Director: ${director}`} />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.background,
    padding: 8,
    width: '100%',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background,
    padding: 16,
  },
  scrollView: {
    width: '100%',
  },
  banner: {
    flex: 1,
    width: '100%',
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 450,
  },
  poster: {
    width: '100%',
    height: '100%',
  },
  row: {
    marginVertical: 8,
    flexDirection: 'row',
    width: '100%',
    gap: 16,
  },
});