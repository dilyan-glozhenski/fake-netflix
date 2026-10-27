import { View, StyleSheet, Image, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Movie } from '../types';
import { theme } from '@/shared/theme';

interface MovieCardProps extends Movie {
    size?: 'small' | 'medium' | 'large';
}

export default function MovieCard({
    title,
    imdbID,
    poster,
    size = 'small',
}: MovieCardProps) {
    const router = useRouter();

    const onMoviePressedHandler = () => {
        router.push({ pathname: '/movie/[id]', params: { id: imdbID } });
    };

    const posterSource = poster?.trim()
        ? { uri: poster }
        : require('../../../shared/assets/no-image.png');

    return (
        <Pressable
            accessibilityRole="link"
            onPress={onMoviePressedHandler}>
            <View style={[styles.card, cardSizeStyles[size]]}>
                <Image
                    source={posterSource}
                    alt={`${title} poster`}
                    style={styles.poster}
                />
            </View>
        </Pressable>

    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'column',
        borderWidth: 1,
        borderRadius: 4,
        borderColor: theme.colors.border,
        marginRight: 8,
        overflow: 'hidden',
    },
    smallCard: {
        width: 100,
        height: 150,
    },
    mediumCard: {
        width: 120,
        height: 180,
    },
    largeCard: {
        width: 140,
        height: 210,
    },
    poster: {
        width: '100%',
        height: '100%'
    }
});

const cardSizeStyles = {
    small: styles.smallCard,
    medium: styles.mediumCard,
    large: styles.largeCard,
};