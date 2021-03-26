import React, { memo } from 'react';
import {
  View, Text, StyleSheet, TextStyle, ViewStyle, Image
} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import { Button } from '..';
import {
  color
} from '../../theme';

interface FileImageProps {
    title?: string,
    titleStyle?: TextStyle,
    placeholder?: string,
    borderStyle?: ViewStyle,
    textInputStyle?: TextStyle,
    styleContainer?: ViewStyle,
    error? : boolean,
    textError?: string,
    disabled?: boolean,
    response?: ImagePicker.ImagePickerResponse,
    setResponse?: (data: ImagePicker.ImagePickerResponse) => void
}

const FileImage = ({
  title,
  titleStyle,
  borderStyle,
  styleContainer,
  error,
  textError,
  disabled,
  response,
  setResponse
}: FileImageProps) => {

  const onPressBrowser = () => {
    ImagePicker.launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: true,
        maxHeight: 450,
        maxWidth: 450,
      },
      (callback) => {
        setResponse(callback);
      },
    );
  };

  return (
    <View style={styleContainer}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      <View
        style={[styles.border, borderStyle]}
      >
        <Text style={[styles.text, {
          backgroundColor: disabled
            ? color.palette.lightGrey : color.palette.white
        }
        ]}
        >
          {response?.fileName || ''}
        </Text>
        <Button styleContainer={{ flex: 0.3 }} onPress={() => onPressBrowser()}>Browser</Button>
      </View>
      {error ? (
        <Text style={styles.error}>{textError}</Text>
      ) : null}
      {/* {response && (
      <View style={styles.image}>
        <Image
          style={{ width: 200, height: 200 }}
          source={{ uri: response.uri }}
        />
      </View>
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginBottom: 4,
    marginTop: 20
  },
  border: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 42,
    alignItems: 'center',
    borderRadius: 2,
    marginTop: 6,
  },
  error: {
    fontSize: 12
  },
  text: {
    height: 42,
    flex: 0.7,
    paddingLeft: 10,
    marginRight: 10
  },
  image: {
    marginVertical: 24,
    alignItems: 'center',
  },
});

export default memo(FileImage);
