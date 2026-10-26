import type { ReactNode } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  type PressableProps,
} from 'react-native';
import { theme } from '../theme';

type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  icon?: ReactNode;
  text: string;
  size?: ButtonSize;
  background?: string;
  textColor?: string;
  cta: NonNullable<PressableProps['onPress']>;
}

export default function Button({
  icon,
  text,
  size = 'medium',
  background = '#FFFFFF',
  textColor = theme.colors.textSecondary,
  cta,
}: ButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={cta}
      style={[styles.button, sizeStyles[size], { backgroundColor: background }]}
    >
      {icon}
      <Text
        style={[
          styles.text,
          textSizeStyles[size],
          { color: textColor },
          icon ? styles.textWithIcon : undefined,
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  small: {
    minHeight: 32,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  medium: {
    minHeight: 40,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  large: {
    minHeight: 48,
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
  text: {
    color: theme.colors.textPrimary,
    fontWeight: theme.fontWeight.bold,
  },
  textWithIcon: {
    marginLeft: 4,
  },
  smallText: {
    fontSize: theme.fontSize.xs,
  },
  mediumText: {
    fontSize: theme.fontSize.md,
  },
  largeText: {
    fontSize: theme.fontSize.lg,
  },
});

const sizeStyles = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
};

const textSizeStyles = {
  small: styles.smallText,
  medium: styles.mediumText,
  large: styles.largeText,
};