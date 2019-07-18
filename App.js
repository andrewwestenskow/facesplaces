import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, PermissionsAndroid } from 'react-native'


class App extends Component {

  state = {
    position: ''
  }

  async componentDidMount(){
    await this.getPermission()
  }

  getPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          'title': 'Example App',
          'message': 'Example App access to your location '
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location")
        alert("You can use the location");
      } else {
        console.log("location permission denied")
        alert("Location permission denied");
      }
    } catch (err) {
      console.warn(err)
    }
  }

  getLocation = () => {
    //This is where I'm trying to get location

    navigator.geolocation.getCurrentPosition(position => {
      console.log(position)
    }, err => console.log(err))
  }
  render() {
    return (
      <View>
        <Text>Andrew</Text>
        <Button title='get location' onPress={this.getLocation} />
      </View>
    )
  }
}
export default App

const styles = StyleSheet.create({

})