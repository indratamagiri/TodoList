import React, { memo } from 'react';
import {
  View, Text, StyleSheet, TextInput,
} from 'react-native';
import {
  color
} from '../../theme';
import { TextInputProp } from './props';

const TextInputForm = ({
  title,
  titleStyle,
  placeholder,
  borderStyle,
  textInputStyle,
  styleContainer,
  error,
  textError,
  disabled,
  ...rest
}: TextInputProp) => (
  <View style={styleContainer}>
    <Text style={[styles.title, titleStyle]}>{title}</Text>
    <View
      style={[styles.border, borderStyle,
        { backgroundColor: disabled ? color.palette.lightGrey : color.palette.white }]}
    >
      <TextInput
        style={[styles.input, textInputStyle, { color: disabled ? '#909090' : color.palette.black }]}
        placeholder={placeholder}
        {...rest}
      />
    </View>
    {error ? (
      <Text style={styles.error}>{textError}</Text>
    ) : null}
  </View>
);

const styles = StyleSheet.create({
  title: {
    marginBottom: 4
  },
  input: {
    paddingLeft: 14,
    width: '100%',
  },
  border: {
    flexDirection: 'row',
    height: 42,
    paddingHorizontal: 10,
    alignItems: 'center',
    borderRadius: 2,
    marginTop: 6
  },
  error: {
    fontSize: 12
  }
});

export default memo(TextInputForm);
