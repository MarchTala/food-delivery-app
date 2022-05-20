import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import CustomDrawer from './navigation/CustomDrawer';

import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './stores/rootReducer';

const Stack = createStackNavigator();

const store = configureStore(
   {
      reducer: rootReducer
   },
   applyMiddleware(thunk)
);

const App = () => {
   return (
      <Provider store={store}>
         <NavigationContainer>
            <Stack.Navigator
               screenOptions={{
                  headerShown: false
               }}
               initialRouteName={'Home'}
            >
               <Stack.Screen
                  name="Home"
                  component={CustomDrawer}
               />
            </Stack.Navigator>
         </NavigationContainer>
      </Provider>
   )
}

export default App