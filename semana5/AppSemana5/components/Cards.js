import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Cards(props) {
  
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(2);
  const [score, setScore] = useState(0);
  const [resultado, setResultado] = useState("");
  const [acertou, setAcertou] = useState(true);
  
  const atualizaResult = (value) => {
      setResultado(value);
  }

  const onTestPress = () => {
    let result = parseInt(resultado);

    if (result === (num1 + num2))
    {
      //resposta correta
      setAcertou(true);
      setScore(score + 1);
      setNum1( Math.ceil( Math.random() * 10 ) );
      setNum2( Math.ceil( Math.random() * 10 ) );

    }
    else
    {
      //resposta incorreta
      setAcertou(false);
    }
    setResultado("");
  }

  if( score >= 5)
  {
    return(
      <View style={styles.container}>
        <Text style={styles.win} >You Won!!!!!</Text>
      </View>
    );
  }
  else
  {
    return (
      <View style={styles.container}>
        <Text>Jogo de Adição</Text>
        <Text style={ acertou ? styles.textoSoma : styles.textoSomaErrado   } >{num1} + {num2} ?</Text>
        <TextInput 
            onChangeText={atualizaResult}
            style={styles.input}
            value={resultado}
            placeholder="Advinha?"
            keyboardType="numeric"
            ></TextInput>
        <Button
          title="Testar"
          onPress={onTestPress}
        ></Button>
        <Text style={styles.score} >Score: {score}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    fontSize: 35,
  },
  textoSoma:{
    fontSize: 40,
    color: 'black'
  },
  textoSomaErrado:{
    fontSize: 40,
    color: 'red'
  },
  score:{
    color: 'gray',
    fontSize: 30
  },
  win:{
    fontSize: 60,
    backgroundColor: 'yellow',

  }
});
