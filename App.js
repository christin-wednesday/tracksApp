import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import Amplify from 'aws-amplify'
import config from './aws-exports'
import TrackList from './containers/TrackList';
import {AddArtist} from './containers/AddArtist';
import {trackListReducer} from './containers/TrackList/reducer';
import {trackListSaga} from './containers/TrackList/saga';

Amplify.configure(config)

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  trackListReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(trackListSaga);

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={TrackList} />
          <Stack.Screen name="addArtist" component={AddArtist} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
