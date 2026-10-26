import { Text } from 'react-native';
import { theme } from '../theme';

type TypographySize = keyof typeof theme.fontSize;
type TypographyWeight = keyof typeof theme.fontWeight;

interface TypographyProps {
  text: string;
  size?: TypographySize;
  weight?: TypographyWeight;
  color?: string;
}

export default function Typography({
  text,
  size = 'md',
  weight = 'regular',
  color = theme.colors.textPrimary,
}: TypographyProps) {
  return (
    <Text
      style={{
        fontSize: theme.fontSize[size],
        fontWeight: theme.fontWeight[weight],
        color,
      }}
    >
      {text}
    </Text>
  );
}