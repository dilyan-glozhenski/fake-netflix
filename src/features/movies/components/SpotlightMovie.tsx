import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Movie } from '../types';
import { theme } from '../../../shared/theme';
import { Button, Typography } from '@/shared/components';

export default function SpotlightMovie({ title, poster, imdbID }: Movie) {
    const router = useRouter();

    const onMoviePressedHandler = () => {
        router.push({ pathname: '/movie/[id]', params: { id: imdbID } });
    };

    const onPlayMoviePressedHandler = () => {
        // play movie functionality
    }

    const onAddToFavoritesPressedHandler = () => {
        // add to favorites functionality
    };

    return (
        <View style={styles.container}>
            <View style={styles.absolute} pointerEvents="none">
                <Image
                    src={poster}
                    alt={`${title} poster`}
                    style={styles.poster}
                    resizeMode="cover"
                />
            </View>
            <Pressable
                accessibilityRole="link"
                onPress={onMoviePressedHandler}
                style={styles.movieContent}
            >
                <View style={styles.titleContainer}>
                    <Typography size='lg' color={theme.colors.textPrimary} weight='semibold' text={title} />
                </View>
            </Pressable>
            <View style={styles.row}>
                <Button
                    icon={
                        <Image
                            source={require('../../../shared/assets/play-button.png')}
                            style={{ width: 30, height: 30 }}
                        />
                    }
                    text="Play Movie"
                    cta={onPlayMoviePressedHandler}
                />
                <Button
                    icon={
                        <View style={styles.addToFavoritesIcon}>
                            <Typography size='xl' color={theme.colors.background} weight='semibold' text='+' />
                        </View>
                    }
                    text="Add to favorites"
                    cta={onAddToFavoritesPressedHandler}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: theme.colors.border,
        overflow: 'hidden',
        position: 'relative',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 500,
    },
    movieContent: {
        flex: 1,
        width: '100%',
        position: 'relative',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    absolute: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    poster: {
        width: '100%',
        height: '100%',
    },
    titleContainer: {
        backgroundColor: theme.colors.transparentSurface,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 4,
        top: 0,
    },
    row: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 8,
        marginTop: 8,
        paddingLeft: 8,
        paddingRight: 8
    },
    col: {
        flex: 1,
        width: '50%'
    },
    playButtonWrapper: {

    },
    playButton: {
        backgroundColor: theme.colors.transparentSurface,
        padding: 8,
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    playIcon: {
        fontSize: 32,
        lineHeight: 32,
        color: theme.colors.textPrimary,
    },
    addToFavoritesIcon: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});
