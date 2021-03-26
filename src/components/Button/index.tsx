import React, { memo } from 'react';
import {
  StyleSheet, Text, ActivityIndicator, TouchableOpacity, ViewStyle, TextStyle
} from 'react-native';
import { color as colors } from '../../theme';

interface Props {
  children: React.ReactNode,
  disabled?: boolean,
  styleContainer?: ViewStyle,
  styeText?: TextStyle,
  onPress: () => void,
  fetching?: boolean,
  color?: string
}

const Button = (props: Props) => {
  const {
    children, disabled, styleContainer, styeText, onPress, fetching, color
  } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.container, styleContainer]}
    >
      {fetching
        ? <ActivityIndicator style={[styles.textStyle, styeText]} size="small" color={color || colors.palette.white} />
        : <Text style={[styles.textStyle, styeText]}>{children}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    borderRadius: 2,
    backgroundColor: colors.buttonDark
  },
  textStyle: {
    fontSize: 14,
    marginVertical: 9,
    textAlign: 'center',
    color: colors.palette.white
  }
});

export default memo(Button);
