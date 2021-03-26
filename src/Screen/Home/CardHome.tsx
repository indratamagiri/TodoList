import React, { memo } from 'react';
import {
  StyleSheet, View, Image, Text
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Entypo';
import IconTrash from 'react-native-vector-icons/FontAwesome';
import { Button } from '../../components';
import { color } from '../../theme';

interface CardProps {
    item: {
        title: string,
        image: string,
        description: string,
        createTime: string,
        createBy: string,
        finished: boolean
    },
    onPressDelete: () => void,
    onPressEdit: () => void,
}

const CardHome = (props: CardProps) => {
  const {
    item,
    onPressDelete,
    onPressEdit
  } = props;
  const base64Image = `data:image/png;base64,${item.image}`;
  return (
    <View style={styles.container}>

      <View style={{ flexDirection: 'row', marginTop: 16 }}>
        <Image source={{ uri: base64Image }} style={styles.image} />
        <View style={{ marginLeft: 20, flex: 1 }}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={{
              flexDirection: 'row', justifyContent: 'space-between', flex: 0.2, marginRight: 16
            }}
            >
              <TouchableOpacity onPress={() => onPressEdit()}>
                <Icon name="edit" size={18} color={color.palette.DarkGreen} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onPressDelete()}>
                <IconTrash name="trash" size={18} color={color.error} />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.description}>{item.description}</Text>
          <Button
            styleContainer={
                [styles.bottonContainer,
                  {
                    backgroundColor: item.finished
                      ? color.palette.lightGrey : color.palette.deepskyblue
                  }]
}
            styeText={styles.buttonStyle}
            onPress={() => {}}
          >
            {item.finished ? 'This is done' : 'Unfinished'}
          </Button>
        </View>
      </View>

      <View style={styles.viewBottom}>
        <Text style={styles.textBottom}>
          {`CreatedAt: ${item.createTime}`}
        </Text>
        <Text style={styles.textBottom}>
          {`CreatedBy: ${item.createBy}`}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.palette.white,
    marginHorizontal: 18,
    marginVertical: 20,
    borderRadius: 6
  },
  image: {
    width: 57,
    height: 57,
    borderRadius: 50,
    marginLeft: 10
  },
  title: {
    fontWeight: '700',
    fontSize: 14,
    flex: 0.8
  },
  description: {
    marginTop: 7
  },
  bottonContainer: {
    alignSelf: 'flex-start', marginTop: 14, width: '80%',
  },
  buttonStyle: { color: color.palette.black, fontWeight: '700' },
  viewBottom: {
    marginTop: 15,
    marginLeft: 10,
    marginBottom: 5
  },
  textBottom: {
    fontSize: 12,
    fontWeight: '700'
  }
});

export default memo(CardHome);
