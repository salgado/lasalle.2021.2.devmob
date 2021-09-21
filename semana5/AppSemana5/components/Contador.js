import React, {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Contador(props) {
  
  const [valor, setValor] = useState(0);

  const atualizaContador = () => {
      setValor(valor + 1);  
  }

  return (
    <View style={styles.container}>
      <Text>Você clicou {valor} vezes no botão.</Text>
      <Button
          onPress={atualizaContador}
          title={props.title || "contar"} />
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
