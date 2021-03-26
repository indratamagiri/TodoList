import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Name from '../Screen/Name';
import Home from '../Screen/Home';
import CreateTodo from '../Screen/CreateTodo';
import { RootStackType } from './RootStackType';

const Routes = () => {

  const Stack = createStackNavigator<RootStackType>();
  const RouteManagement = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="NameScreen"
            component={Name}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="HomeScreen" component={Home} />
          <Stack.Screen name="CreateTodoScreen" component={CreateTodo} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        {/* <StatusBar backgroundColor={colors.black} barStyle="default" /> */}
        {RouteManagement()}
      </SafeAreaView>
    </View>
  );
};

export default Routes;
