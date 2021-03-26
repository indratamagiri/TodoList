/* eslint-disable react/jsx-props-no-spreading */
import React, { memo } from 'react';
import {
  View, TextInput, Text, ViewStyle, StyleSheet, TextStyle, TextInputProps
} from 'react-native';
import { color } from '../../theme';

interface TextFieldProps extends TextInputProps {
    placeholder?: string,
    styleContainer?: ViewStyle,
    error?: boolean,
    textError?: string,
    title: string,
    titleStyle?: TextStyle
}

const TextField = (props: TextFieldProps) => {
  const {
    placeholder,
    styleContainer,
    error,
    textError,
    title,
    titleStyle,
    ...rest
  } = props;
  return (
    <>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      <View style={[{ height: 140, backgroundColor: color.palette.white }, styleContainer]}>
        <TextInput
          {...rest}
          placeholder={placeholder}
          style={styles.textInput}
          multiline
        />
      </View>
      {error ? (
        <Text style={{
          color: color.error,
          fontSize: 12
        }}
        >
          {textError}
        </Text>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    marginBottom: 4
  },
  textInput: {
    alignItems: 'flex-start',
    marginHorizontal: 4,
    height: null,
  }
});

export default memo(TextField);
