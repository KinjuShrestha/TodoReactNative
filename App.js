import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';  
import TodoComponent from './todoapp/todo_comp';
import store from './todoapp/todo_store';

export default function App() {
  return (
    <Provider store={store}>
      <TodoComponent />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
