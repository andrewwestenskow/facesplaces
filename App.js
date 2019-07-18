import React, { Component } from 'react'
import { View, Text, StyleSheet, Button} from 'react-native'




class App extends Component {

  state = {
    position: ''
  }

  getLocation = () => {
    navigator.geolocation.getCurrentPosition(position=>{
      console.log(position)
    }, err=>console.log(err))
  }
  render() {
    return (
      <View>
        <Text>Andrew</Text>
        <Button title='get location' onPress={this.getLocation}/>
      </View>
    )
  }
}
export default App

const styles = StyleSheet.create({

})