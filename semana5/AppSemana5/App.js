import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cards from './components/Cards';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Semana 5 - Alex Salgado</Text>
      <Cards/>        
    </View>
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
