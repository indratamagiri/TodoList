/* eslint-disable no-underscore-dangle */
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, StyleSheet, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Entypo';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { RootStackType } from '../../RootContainer/RootStackType';
import { color } from '../../theme';
import CardHome from './CardHome';
import { deleteData, getData } from '../../service/firebase';

export type HomeNavigtion = StackNavigationProp<RootStackType, 'HomeScreen'>

interface HomeProps {
    navigation: HomeNavigtion,
    user: string
  }

const Home = (props: HomeProps) => {
  const { navigation, user } = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: `Hi, ${user}`,
      headerStyle: {
        backgroundColor: color.headerBackground,
      },
      headerTitleStyle: {
        color: color.palette.white
      },
      headerLeft: () => null,
      headerRight: () => (
        <TouchableOpacity
          onPress={(() => navigation.navigate('CreateTodoScreen'))}
          style={{ marginRight: 20 }}
        >
          <Icon name="plus" size={20} color={color.palette.white} />
        </TouchableOpacity>
      )
    });
  }, [navigation, user]);

  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    fetchingData();
  }, []);

  const fetchingData = async () => {
    const temp = await getData();
    setData(temp.docs);
    await setLoad(false);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <CardHome
            item={item._data}
            onPressDelete={() => {
              deleteData(item.id);
              setLoad(true);
              fetchingData();
            }}
            onPressEdit={() => {
              navigation.navigate('CreateTodoScreen', {
                id: item.id,
                title: item._data.title,
                description: item._data.description,
                image: item._data.image,
              });
            }}
          />
        )}
        refreshControl={(
          <RefreshControl
            refreshing={load}
            onRefresh={() => {
              setLoad(true);
              fetchingData();
            }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background
  }
});

const mapStateToProps = (state) => ({
  user: state.user.name,
});

export default connect(mapStateToProps, null)(Home);
