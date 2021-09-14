import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';
import logo from './assets/logo.png';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';

export default function App() {

  const [selectedImage, setSelectedImage] = React.useState(null)

  let openImagePickerAsync = async () => {

    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted == false){
      alert("É necessário permissão para acessar as midias!")
      return
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    //console.log(pickerResult) 
    if( pickerResult.cancelled === true )
      {
        return
      }

    setSelectedImage({ localUri: pickerResult.uri })
    
  }

  //compartilhar imagem
  let openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`Não é possível compratilhar imagem`);
      return;
    }

    await Sharing.shareAsync(selectedImage.localUri);
  }; 

  if (selectedImage !== null)
  {
    return (
      <View style={styles.container}>
        
        <Image source={{ uri: selectedImage.localUri  }}
              style={styles.thumbnail} />
        
        <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
          <Text style={styles.buttonText}>Share this photo</Text>
        </TouchableOpacity>
        
        <Image source={{ uri: "https://i.imgur.com/Bm2c0Tf.png" }} 
                style={styles.logo} />
        <Text style={styles.instructions} >Para compartilhar uma foto, clique no botão abaixo</Text>
        
        <TouchableOpacity
          onPress={ openImagePickerAsync }
          style={styles.button} >
            <Text style={styles.buttonText}>Escolha uma foto</Text> 
        </TouchableOpacity>

      </View>
    );
  }

  return (
    <View style={styles.container}>  
      <Image source={{ uri: "https://i.imgur.com/Bm2c0Tf.png" }} 
              style={styles.logo} />
      <Text style={styles.instructions} >Para compartilhar uma foto, clique no botão abaixo</Text>
      
      <TouchableOpacity
        onPress={ openImagePickerAsync }
        style={styles.button} >
          <Text style={styles.buttonText}>Escolha uma foto</Text> 
      </TouchableOpacity>

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
  logo:{
    width: 305,
    height: 159,
    marginBottom: 10
  },
  instructions:{
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15
  },
  button:{
    backgroundColor:"yellow",
    padding: 20,
    borderRadius: 10
  },
  buttonText:{
    fontSize: 20,
    color:'#888'
  },
  thumbnail:{
    width: 300,
    height: 300,
    resizeMode: "contain"
  }
});
