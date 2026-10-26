import { View, ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { theme } from "../../shared/theme";
import { useAllMovies, useSpotlightMovie } from "@/features/movies/store/hooks";
import SpotlightMovie from "@/features/movies/components/SpotlightMovie";
import MoviesRow from "@/features/movies/components/MoviesRow";
import { MovieCategory } from "@/shared/constants/categories";
import { useMemo } from "react";
import { Movie } from "@/features/movies/types";

const getSortKey = (seed: string, value: string) => {
  let hash = 2166136261;
  for (const character of `${seed}:${value}`) {
    hash = Math.imul(hash ^ character.charCodeAt(0), 16777619);
  }
  return hash >>> 0;
};

export default function Index() {
  const { movies, loading } = useAllMovies();
  const spotlightMovie = useSpotlightMovie();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        {loading
          ? <ActivityIndicator />
          : <View style={styles.wrapper}>
            <ScrollView style={styles.scrollView} contentContainerStyle={{ alignItems: 'center' }}>
              {spotlightMovie &&
                <SpotlightMovie
                  title={spotlightMovie.title}
                  poster={spotlightMovie.poster}
                  imdbID={spotlightMovie.imdbID}
                />
              }
              <View style={styles.moviesRow}>
                <MoviesRow title="Only on FakeNetflix" movies={movies} size="large" />
              </View>
              {/* there is no exposed api for categories so will add some for content */}
              <View style={styles.moviesRow}>
                <MoviesRow title={MovieCategory.ACTION_ADVENTURE} movies={movies.slice(10,20)} size="small" />
              </View>
              <View style={styles.moviesRow}>
                <MoviesRow title={MovieCategory.SCI_FI_FANTASY} movies={movies.slice(20, 30)} size="small" />
              </View>
              <View style={styles.moviesRow}>
                <MoviesRow title={MovieCategory.AWARD_WINNING_MOVIES} movies={movies.slice(30, 40)} size="small" />
              </View>
            </ScrollView>
          </View>
        }
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
  scrollView: {
    width: '100%',
  },
  moviesRow: {
    width: '100%',
    marginVertical: 16,
  },
  button: {
    fontSize: theme.fontSize.md,
    fontWeight: theme.fontWeight.bold,
    color: theme.colors.textPrimary,
  },
});
