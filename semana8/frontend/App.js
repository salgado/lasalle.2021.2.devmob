import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [data,setData] = useState([{}]);
  
  useEffect( () => {
    fetch("http://localhost:5000/professores").then(
        response => response.json()
      ).then(
        data1 => {
          setData(data1);
          console.log(data1);
        })
  }, [])

  return (
    <View style={styles.container}>
      {(typeof data.professores === 'undefined') ?
      (
        <p>Carregando.....</p>
      ): (
        data.professores.map((professor, i) =>(
          <p key={i}>{professor}</p>
        ))
      )

      }
      <Text>Aula de Flask API</Text>
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