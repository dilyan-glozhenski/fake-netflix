import { Image, View, StyleSheet } from 'react-native';

export function HomeHeader() {
    return (
        <View style={styles.wrapper}>
            <View>
                <Image source={require('../assets/logo.png')} alt='logo' style={styles.logo} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    logo: {
        height: 32,
        aspectRatio: 1220 / 280,
    }
})