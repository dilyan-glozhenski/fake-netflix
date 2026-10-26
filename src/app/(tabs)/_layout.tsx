import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { theme } from '../../shared/theme';

export default function TabLayout() {
  return (
    <NativeTabs
      tintColor={theme.colors.textSecondary}
      backgroundColor={theme.colors.surface}
      indicatorColor={theme.colors.textPrimary}
      rippleColor={theme.colors.textPrimary}
>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf={{ default: 'house', selected: 'house.fill' }}
          md="home"
        />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}