import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>SNEHA SINGH :)</Text>

      {/* Button is self-closing  */}
      <Button 
        onPress = {() => navigation.navigate('Components')}
        title = "Go to component Screen"
      />
      <Button 
        onPress = {() => navigation.navigate('List')}
        title = "Go to list Screen"
      />
      <Button 
        onPress = {() => navigation.navigate('Images')}
        title = "Go to Image Screen"
      />
      <Button 
        onPress = {() => navigation.navigate('Counter')}
        title = "Go to Counter Screen"
      />
      <Button 
        onPress = {() => navigation.navigate('Color')}
        title = "Go to Color Screen"
      />
      <Button 
        onPress = {() => navigation.navigate('Square')}
        title = "Go to Square Screen"
      />

      {/* <TouchableOpacity onPress = {() => console.log('Another button pressed')}>
        <Text>Go to list</Text> 
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
