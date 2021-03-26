import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'react-native-image-picker';
import { connect } from 'react-redux';
import { RouteProp } from '@react-navigation/core';
import {
  Button, TextInput, TextField, FileImage
} from '../../components';
import { RootStackType } from '../../RootContainer/RootStackType';
import { color } from '../../theme';
import { addData, editData } from '../../service/firebase';

type CreateTodoNavigtion = StackNavigationProp<RootStackType, 'CreateTodoScreen'>
type CreateTodolRoute = RouteProp<RootStackType, 'CreateTodoScreen'>

interface CreateTodoProps {
    navigation: CreateTodoNavigtion,
    user: string,
    route: CreateTodolRoute
  }

const CreateTodo = (props: CreateTodoProps) => {
  const { navigation, user, route } = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Create Todo',
      headerStyle: {
        backgroundColor: color.headerBackground,
      },
      headerTitleStyle: {
        color: color.palette.white
      },
      headerLeft: () => (
        <TouchableOpacity
          onPress={(() => navigation.goBack())}
          style={{ marginLeft: 20 }}
        >
          <Icon name="ios-arrow-back-outline" size={25} color={color.palette.white} />
        </TouchableOpacity>
      )
    });
  }, [navigation]);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [response, setResponse] = useState<ImagePicker.ImagePickerResponse>(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (route.params.id) {
      setTitle(route.params.title);
      setDescription(route.params.description);
      setResponse({ base64: route.params.image });
    }
  }, [route]);

  const onSubmit = () => {
    if (route.params.id) {
      editData(
        route.params.id,
        title,
        response.base64,
        description,
        user,
        setLoad,
      );
    } else {
      addData(
        title,
        response.base64,
        description,
        user,
        setLoad,
      );
    }
    // console.log(response.base64)
  };

  return (
    <View style={styles.constiner}>
      <ScrollView>
        <TextInput
          title="Title"
          onChangeText={((x) => setTitle(x))}
          value={title}
          styleContainer={{ marginTop: 20 }}
        />
        <TextField
          title="Description"
          titleStyle={{ marginTop: 20 }}
          onChangeText={(x) => setDescription(x)}
          value={description}
        />
        <FileImage title="File Image" response={response} setResponse={setResponse} />
      </ScrollView>
      <Button
        fetching={load}
        onPress={() => {
          setLoad(true);
          onSubmit();
        }}
      >
        Submit
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  constiner: {
    backgroundColor: color.background,
    flex: 1,
    paddingHorizontal: 16
  }
});

const mapStateToProps = (state) => ({
  user: state.user.name,
});

export default connect(mapStateToProps, null)(CreateTodo);
