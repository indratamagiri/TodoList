/* eslint-disable react-native/split-platform-components */
import React, { useState } from 'react';
import { StyleSheet, ToastAndroid, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StackNavigationProp } from '@react-navigation/stack';
import NameRedux from '../../redux/User/redux';
import { TextInput, Button } from '../../components';
import { color } from '../../theme/color';
import { RootStackType } from '../../RootContainer/RootStackType';

export type NameNavigtion = StackNavigationProp<RootStackType, 'NameScreen'>

interface NameProps {
  nameUser: (data: string) => void,
  navigation: NameNavigtion
}

const Name = (props: NameProps) => {
  const { nameUser, navigation } = props;
  const [textName, setTextName] = useState('');

  const onPressNext = () => {
    if (textName) {
      nameUser(textName);
      navigation.navigate('HomeScreen');
    } else {
      ToastAndroid.show('Please insert your name', ToastAndroid.SHORT);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        title="Name"
        value={textName}
        onChangeText={(x) => { setTextName(x); }}
      />
      <Button
        onPress={() => onPressNext()}
        styleContainer={styles.bottonContainer}
        styeText={styles.buttonStyle}
      >
        Next
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.background,
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 40
  },
  bottonContainer: { alignSelf: 'flex-start', borderRadius: 6, marginTop: 14 },
  buttonStyle: { marginHorizontal: 25 }
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  Object.assign(
    NameRedux
  ),
  dispatch
);

export default connect(null, mapDispatchToProps)(Name);
