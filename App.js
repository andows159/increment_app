import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Switch, Image } from "react-native";
export default function App() {
  const [number, setNumber] = useState(0);
  let [DarkMode, setDarkMode] = useState(true)
  return (
    <View style={{
      flex: 1,
      backgroundColor: DarkMode?'#021D20':"white" ,
      alignItems: "center",
      justifyContent: "center",
    }}>
      <Switch value={DarkMode} onValueChange={()=> setDarkMode(!DarkMode)} style={styles.switchDarkMode} />
      <Text style={{
    position:'absolute',
    top:115,
    right:40,
    fontSize:10,
    color: DarkMode?'white':'black'
  }}>Dark Mode</Text>

      <Text style={{
      color: DarkMode?"white":'#154242'
  }}>Welcome to you Counter App</Text>
      <Text style={{
    fontSize: 50,
    color:DarkMode?"#16E1E5":"#154242"
  }}>{number} Types</Text>

      <TouchableOpacity
        style={styles.incrementButton}
        onPress={() => setNumber(number + 1)}
      >
        
        <Text>Increment +1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.resetButton}
        onPress={() => setNumber(number - number)}
      >
        
        <Text style={{fontWeight:'bold',color:DarkMode?'white':'red'}}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
  
}

const styles = StyleSheet.create({
 
  switchDarkMode:{
      position:'absolute',
      top:90,
      right:40
  },
  
  
  incrementButton: {
    top:30,
    backgroundColor: "#71C0C2",
    width: 130,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  resetButton: {
    top:30,
    color:'red',
    width: 130,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
