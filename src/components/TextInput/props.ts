import {
  TextInputProps,
  TextStyle,
  ViewStyle
} from 'react-native';

export interface TextInputProp extends TextInputProps {
    title?: string,
    titleStyle?: TextStyle,
    value?: string,
    placeholder?: string,
    borderStyle?: ViewStyle,
    textInputStyle?: TextStyle,
    styleContainer?: ViewStyle,
    error? : boolean,
    textError?: string,
    disabled?: boolean,
}
