import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet,
} from 'react-native';
import colors from '../../theme/colors';

export type TVariant = 'contained' | 'outlined';

interface IButtonProps extends TouchableOpacityProps {
  label: string;
  variant: TVariant;
  mt?: number;
}

export const Button = ({
  label,
  variant = 'contained',
  mt = 0,
}: IButtonProps) => {
  return (
    <TouchableOpacity style={styles.container(variant, mt)}>
      <Text style={styles.text(variant)}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: (variant: TVariant, mt: number) => ({
    backgroundColor: variant === 'outlined' ? 'transparent' : colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: 160,
    borderRadius: 30,
    borderWidth: variant === 'outlined' ? 1 : 0,
    borderColor: colors.primary,
    marginTop: mt,
  }),
  text: (variant: TVariant) => ({
    color: variant === 'outlined' ? colors.primary : colors.white,
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  }),
});
