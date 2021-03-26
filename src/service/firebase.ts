/* eslint-disable react-native/split-platform-components */
import firestore from '@react-native-firebase/firestore';
import { ToastAndroid } from 'react-native';
import moment from 'moment';

export const addData = (
  title: string,
  base64: string,
  description: string,
  createBy: string,
  setLoad:(data: boolean) => void
) => {
  const createTime = moment().format('MMMM Do YYYY, h:mm:ss a');

  firestore()
    .collection('TodoList')
    .add({
      title,
      image: base64,
      description,
      createBy,
      createTime,
      finished: false
    })
    .then(() => {
      setLoad(false);
      ToastAndroid.show('Todo have been add', ToastAndroid.SHORT);
    });
};

export const getData = async () => {
  const users = await firestore()
    .collection('TodoList')
    .get();

  return users;
};

export const deleteData = async (id: string) => {
  await firestore()
    .collection('TodoList')
    .doc(id)
    .delete()
    .then(() => {
      ToastAndroid.show('Todo have been remove', ToastAndroid.SHORT);
    });
};

export const editData = async (
  id: string,
  title: string,
  base64: string,
  description: string,
  createBy: string,
  setLoad:(data: boolean) => void) => {
  const createTime = moment().format('MMMM Do YYYY, h:mm:ss a');
  firestore()
    .collection('TodoList')
    .doc(id)
    .update({
      title,
      image: base64,
      description,
      createBy,
      createTime,
      finished: false
    })
    .then(() => {
      setLoad(false);
      ToastAndroid.show('Todo have been update', ToastAndroid.SHORT);
    });
};
