import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import md5 from 'js-md5'

const PUBLIC_KEY = 'suachavepublica';
const PRIVATE_KEY = 'suachaveprivada';

export default class App extends React.Component {

  state = {
    data: []
  }

  async componentDidMount() {

    const timestamp = Number(new Date())
    const hash = md5.create()
    hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY)

    const response = await fetch(`https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&orderBy=name&limit=10&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`)
    const responseJson = await response.json()
    this.setState({data: responseJson.data.results})

    //console.log('Renderizei!!!')
    //console.log(responseJson)
  }

  _renderItem = ({ item }) => (
    <Text>{item.name} - {item.description} </Text>
    
  );

  render(){
    return (
      <View style={styles.container}>
        <Text>Voltamos de férias!!</Text>
        <FlatList
          data={this.state.data}
          renderItem={this._renderItem}
          keyExtractor={item => item.id}
        />
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
});
