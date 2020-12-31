import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  FirstScreenNavigator,
  SecondScreenNavigator,
  ThirdScreenNavigator,
} from './custom-navigation';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            tabStyle: {
              height: 50,
              zIndex: 99,
              borderColor: 'white',
              borderTopWidth: 0,
            },
            labelStyle: {
              fontSize: 12,
              paddingTop: 2,
              paddingBottom: 3,
            },
            // showLabel: false,
            activeTintColor: '#FF543C',
            inactiveTintColor: 'black',
          }}>
          <Tab.Screen name="Screen1" component={FirstScreenNavigator} />
          <Tab.Screen name="Screen2" component={SecondScreenNavigator} />
          <Tab.Screen name="Screen3" component={ThirdScreenNavigator} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
